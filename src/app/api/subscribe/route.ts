import { NextRequest, NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Rate limiter: max 3 subscriptions per IP per hour
// ---------------------------------------------------------------------------
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitMap.set(ip, recent);
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

// ---------------------------------------------------------------------------
// Email validation
// ---------------------------------------------------------------------------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---------------------------------------------------------------------------
// Send welcome email via Resend
// ---------------------------------------------------------------------------
async function sendWelcomeEmail(
  email: string,
  firstName?: string
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const name = firstName || "there";

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#212121">
      <div style="background:#1B5E20;padding:24px;text-align:center">
        <img src="https://inbio.net/images/IMG_20250624_1852251-300x72.png" alt="iNBIO" style="height:36px" />
      </div>
      <div style="padding:32px 24px">
        <h1 style="color:#1B5E20;font-size:24px;margin:0 0 16px">Welcome, ${name}!</h1>
        <p style="font-size:16px;line-height:1.6;color:#616161">
          Thank you for your interest in iNBIO's crowdfunding raise. You're now on our investor updates list.
        </p>
        <p style="font-size:16px;line-height:1.6;color:#616161">
          We're building the future of clean energy by converting biomass waste into bio-oil, biochar, and syngas
          through fast pyrolysis technology. Here's what you can expect from us:
        </p>
        <ul style="font-size:15px;line-height:1.8;color:#616161;padding-left:20px">
          <li>Updates on our WeFunder campaign progress</li>
          <li>Insights into our technology and market opportunity</li>
          <li>Key milestones and company news</li>
        </ul>
        <div style="text-align:center;margin:32px 0">
          <a href="https://wefunder.com/investor-warmup" style="display:inline-block;background:#F57C00;color:#fff;padding:14px 32px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px">
            View Our WeFunder Page
          </a>
        </div>
        <p style="font-size:13px;color:#9E9E9E;line-height:1.5">
          This is not a solicitation to buy securities. Any investment involves risk, including the possible loss of principal.
        </p>
      </div>
      <div style="background:#F5F5F5;padding:20px 24px;font-size:12px;color:#9E9E9E;text-align:center">
        <p style="margin:0">International BioRefineries, Inc. | 31901 Tri-County Way, Suite 102B | Salisbury, MD 21804</p>
        <p style="margin:8px 0 0"><a href="{{unsubscribe_url}}" style="color:#9E9E9E">Unsubscribe</a></p>
      </div>
    </div>
  `;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "iNBIO Investor Updates <invest@inbio.net>",
        to: [email],
        subject: "Welcome to iNBIO's Investor Updates",
        html,
      }),
    });
  } catch (err) {
    console.error("[Subscribe] Failed to send welcome email:", err);
  }
}

// ---------------------------------------------------------------------------
// POST /api/subscribe
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email, firstName, lastName, source } = body;

    // Validate email
    if (!email || typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "A valid email address is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!apiKey || !audienceId) {
      console.error("[Subscribe] RESEND_API_KEY or RESEND_AUDIENCE_ID not set.");
      return NextResponse.json(
        { success: false, message: "Subscription service is not configured." },
        { status: 503 }
      );
    }

    // Add contact to Resend Audience
    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          first_name: firstName?.trim() || undefined,
          last_name: lastName?.trim() || undefined,
          unsubscribed: false,
        }),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error(`[Subscribe] Resend API error (${res.status}):`, text);
      return NextResponse.json(
        { success: false, message: "Could not subscribe. Please try again." },
        { status: 502 }
      );
    }

    const contact = await res.json();

    console.log(
      `[Subscribe] New contact: ${email} (source: ${source || "invest-page"})`,
      contact
    );

    // Send welcome email (fire-and-forget)
    sendWelcomeEmail(email.trim(), firstName?.trim());

    return NextResponse.json({
      success: true,
      message: "You're subscribed! Check your inbox for a welcome email.",
    });
  } catch (error) {
    console.error("[Subscribe] Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

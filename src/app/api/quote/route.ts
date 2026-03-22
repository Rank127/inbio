import { NextRequest, NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// In-memory rate limiter: max 5 submissions per IP per hour
// ---------------------------------------------------------------------------
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];

  // Prune entries older than the window
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
// Helpers
// ---------------------------------------------------------------------------
const FORM_TYPE_LABELS: Record<string, string> = {
  product: "Product",
  epc: "EPC",
  oem: "OEM",
  contact: "Contact",
};

function formTypeLabel(formType?: string): string {
  if (!formType) return "General";
  return FORM_TYPE_LABELS[formType] ?? formType;
}

/** Build an HTML table of all submitted fields. */
function buildHtmlBody(body: Record<string, unknown>): string {
  const rows = Object.entries(body)
    .map(([key, value]) => {
      const displayValue =
        typeof value === "object" ? JSON.stringify(value) : String(value ?? "");
      const label = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (s) => s.toUpperCase());
      return `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:6px 12px">${displayValue}</td></tr>`;
    })
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#0f172a">New ${formTypeLabel(body.formType as string)} Inquiry</h2>
      <p>A new form submission was received on the iNBIO website.</p>
      <table style="border-collapse:collapse;width:100%;border:1px solid #e2e8f0">
        <tbody>
          ${rows}
        </tbody>
      </table>
      <p style="color:#64748b;font-size:12px;margin-top:24px">
        This message was sent automatically from the iNBIO website.
      </p>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Email notification via Resend
// ---------------------------------------------------------------------------
async function sendEmailNotification(
  body: Record<string, unknown>
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[Email] RESEND_API_KEY not set — skipping email notification.");
    return;
  }

  const contactEmail = process.env.CONTACT_EMAIL ?? "Raj@inbio.net";
  const submitterEmail = String(body.email ?? "");
  const name = String(body.name ?? "Someone");
  const label = formTypeLabel(body.formType as string);

  const subject = `New ${label} Inquiry from ${name} — iNBIO`;

  const payload = {
    from: "iNBIO Website <notifications@inbio.net>",
    to: [contactEmail],
    reply_to: submitterEmail || undefined,
    subject,
    html: buildHtmlBody(body),
  };

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`[Email] Resend API error (${res.status}):`, text);
    } else {
      console.log("[Email] Notification sent successfully.");
    }
  } catch (err) {
    console.error("[Email] Failed to send notification:", err);
  }
}

// ---------------------------------------------------------------------------
// Google Sheets logging
// ---------------------------------------------------------------------------
async function logToGoogleSheets(
  body: Record<string, unknown>
): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEETS_ID;
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;

  if (!sheetId || !apiKey) {
    console.log(
      "[Sheets] GOOGLE_SHEETS_ID or GOOGLE_SHEETS_API_KEY not set — skipping."
    );
    return;
  }

  const timestamp = new Date().toISOString();
  const formType = String(body.formType ?? "");
  const name = String(body.name ?? "");
  const email = String(body.email ?? "");
  const company = String(body.company ?? "");
  const phone = String(body.phone ?? "");

  // Collect "other" fields into a JSON dump
  const coreKeys = new Set(["formType", "name", "email", "company", "phone"]);
  const otherFields: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(body)) {
    if (!coreKeys.has(key)) {
      otherFields[key] = value;
    }
  }

  const row = [
    timestamp,
    formType,
    name,
    email,
    company,
    phone,
    JSON.stringify(otherFields),
  ];

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A1:append?valueInputOption=USER_ENTERED&key=${apiKey}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ values: [row] }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`[Sheets] Google Sheets API error (${res.status}):`, text);
    } else {
      console.log("[Sheets] Row appended successfully.");
    }
  } catch (err) {
    console.error("[Sheets] Failed to log to Google Sheets:", err);
  }
}

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  try {
    // --- Rate limiting ---
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many submissions. Please wait a while before trying again.",
        },
        { status: 429 }
      );
    }

    // --- Parse body ---
    const body = await request.json();

    const { name, email, company, formType } = body;

    // --- Validate required fields ---
    const missingFields: string[] = [];
    if (!name || typeof name !== "string" || name.trim() === "") {
      missingFields.push("name");
    }
    if (!email || typeof email !== "string" || email.trim() === "") {
      missingFields.push("email");
    }
    if (!company || typeof company !== "string" || company.trim() === "") {
      missingFields.push("company");
    }

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // --- Validate formType (if provided) ---
    const validFormTypes = ["product", "epc", "oem", "contact"];
    if (formType && !validFormTypes.includes(formType)) {
      return NextResponse.json(
        {
          success: false,
          message: `Invalid form type. Must be one of: ${validFormTypes.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // --- Console log (always) ---
    console.log("=== New Quote Submission ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Form Type:", formTypeLabel(formType));
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Company:", company);
    if (body.phone) console.log("Phone:", body.phone);
    if (body.message) console.log("Message:", body.message);
    console.log("Full payload:", JSON.stringify(body, null, 2));
    console.log("============================");

    // --- Fire-and-forget: email + sheets (errors handled internally) ---
    await Promise.allSettled([
      sendEmailNotification(body),
      logToGoogleSheets(body),
    ]);

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch within 24 hours.",
    });
  } catch (error) {
    console.error("Error processing quote submission:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}

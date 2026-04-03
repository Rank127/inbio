import { NextRequest, NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// POST /api/campaign — Admin: send a broadcast email to the entire audience
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  const adminKey = request.headers.get("x-admin-key");

  if (!adminKey || adminKey !== process.env.ADMIN_API_KEY) {
    return NextResponse.json(
      { success: false, message: "Unauthorized." },
      { status: 401 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    return NextResponse.json(
      { success: false, message: "Resend not configured." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { subject, html } = body;

    if (!subject || !html) {
      return NextResponse.json(
        { success: false, message: "subject and html are required." },
        { status: 400 }
      );
    }

    // 1. Fetch all contacts from the audience
    const contactsRes = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );

    if (!contactsRes.ok) {
      const text = await contactsRes.text();
      console.error(`[Campaign] Failed to fetch contacts (${contactsRes.status}):`, text);
      return NextResponse.json(
        { success: false, message: "Failed to fetch audience contacts." },
        { status: 502 }
      );
    }

    const contactsData = await contactsRes.json();
    const contacts: { email: string; unsubscribed: boolean }[] =
      contactsData.data ?? [];

    // Filter to subscribed contacts only
    const subscribed = contacts.filter((c) => !c.unsubscribed);

    if (subscribed.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No subscribed contacts to send to.",
        sent: 0,
      });
    }

    // 2. Send via Resend Batch API (max 100 per batch)
    const BATCH_SIZE = 100;
    let totalSent = 0;
    const errors: string[] = [];

    for (let i = 0; i < subscribed.length; i += BATCH_SIZE) {
      const batch = subscribed.slice(i, i + BATCH_SIZE);

      const emails = batch.map((contact) => ({
        from: "iNBIO Investor Updates <invest@inbio.net>",
        to: [contact.email],
        subject,
        html,
        headers: {
          "List-Unsubscribe": "<https://inbio.net/unsubscribe>",
        },
      }));

      const batchRes = await fetch("https://api.resend.com/emails/batch", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emails),
      });

      if (!batchRes.ok) {
        const text = await batchRes.text();
        console.error(`[Campaign] Batch send error (${batchRes.status}):`, text);
        errors.push(`Batch ${i / BATCH_SIZE + 1}: ${text}`);
      } else {
        totalSent += batch.length;
        console.log(
          `[Campaign] Batch ${i / BATCH_SIZE + 1} sent: ${batch.length} emails`
        );
      }
    }

    return NextResponse.json({
      success: errors.length === 0,
      message: `Sent to ${totalSent} of ${subscribed.length} subscribers.`,
      sent: totalSent,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    console.error("[Campaign] Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}

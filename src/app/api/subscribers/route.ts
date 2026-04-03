import { NextRequest, NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// GET /api/subscribers — Admin: list all contacts in the Resend Audience
// ---------------------------------------------------------------------------
export async function GET(request: NextRequest) {
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
    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        headers: { Authorization: `Bearer ${apiKey}` },
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error(`[Subscribers] Resend API error (${res.status}):`, text);
      return NextResponse.json(
        { success: false, message: "Failed to fetch contacts." },
        { status: 502 }
      );
    }

    const data = await res.json();

    return NextResponse.json({
      success: true,
      contacts: data.data ?? [],
    });
  } catch (error) {
    console.error("[Subscribers] Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}

#!/usr/bin/env tsx
// ---------------------------------------------------------------------------
// iNBIO Crowdfunding Drip Campaign — Daily Drip Sender
// ---------------------------------------------------------------------------
// Run daily via cron: npx tsx scripts/send-drip.ts
// or: npm run send-drip
//
// Env vars required:
//   RESEND_API_KEY       — Resend API key
//   RESEND_AUDIENCE_ID   — Resend Audience ID for the crowdfunding list
//
// Optional:
//   DRIP_DRY_RUN=true    — log what would be sent without actually sending
// ---------------------------------------------------------------------------

import * as fs from "fs";
import * as path from "path";
import {
  nurture1Email,
  nurture2Email,
  nurture3Email,
} from "../src/lib/email-templates";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;
const DRY_RUN = process.env.DRIP_DRY_RUN === "true";

const FROM_ADDRESS = "iNBIO <campaign@inbio.net>";

// Path to the drip log file (tracks which emails have been sent)
const DRIP_LOG_PATH = path.resolve(__dirname, "../data/drip-log.json");

// Drip schedule: day offset -> template key
interface DripStep {
  day: number;
  key: string;
  subject: string;
  templateFn: (firstName?: string) => string;
}

const DRIP_STEPS: DripStep[] = [
  // Day 0 = welcome email, sent on subscribe by the subscribe endpoint — skip
  {
    day: 3,
    key: "nurture1",
    subject: "The Science Behind iNBIO — How Fast Pyrolysis Works",
    templateFn: nurture1Email,
  },
  {
    day: 7,
    key: "nurture2",
    subject: "Why Now? The Market Opportunity for Biomass-to-Energy",
    templateFn: nurture2Email,
  },
  {
    day: 14,
    key: "nurture3",
    subject: "Meet the Team Building iNBIO",
    templateFn: nurture3Email,
  },
];

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ResendContact {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  created_at: string;
  unsubscribed: boolean;
}

interface DripLog {
  /** Map of contact email -> set of drip keys already sent */
  [email: string]: string[];
}

// ---------------------------------------------------------------------------
// Drip log helpers
// ---------------------------------------------------------------------------

function loadDripLog(): DripLog {
  try {
    if (fs.existsSync(DRIP_LOG_PATH)) {
      const raw = fs.readFileSync(DRIP_LOG_PATH, "utf-8");
      return JSON.parse(raw) as DripLog;
    }
  } catch (err) {
    console.warn("[Drip] Could not read drip log, starting fresh:", err);
  }
  return {};
}

function saveDripLog(log: DripLog): void {
  // Ensure directory exists
  const dir = path.dirname(DRIP_LOG_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DRIP_LOG_PATH, JSON.stringify(log, null, 2), "utf-8");
}

// ---------------------------------------------------------------------------
// Resend API helpers
// ---------------------------------------------------------------------------

async function fetchContacts(): Promise<ResendContact[]> {
  const url = `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to fetch contacts (${res.status}): ${text}`);
  }

  const data = (await res.json()) as { data: ResendContact[] };
  return data.data ?? [];
}

async function sendEmail(
  to: string,
  subject: string,
  html: string
): Promise<boolean> {
  if (DRY_RUN) {
    console.log(`  [DRY RUN] Would send "${subject}" to ${to}`);
    return true;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: [to],
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`  [ERROR] Failed to send to ${to} (${res.status}): ${text}`);
    return false;
  }

  return true;
}

// ---------------------------------------------------------------------------
// Date helpers
// ---------------------------------------------------------------------------

function daysSince(dateStr: string): number {
  const created = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - created.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log("=== iNBIO Drip Campaign Sender ===");
  console.log(`Timestamp: ${new Date().toISOString()}`);

  if (!RESEND_API_KEY) {
    console.error("[ERROR] RESEND_API_KEY is not set. Exiting.");
    process.exit(1);
  }

  if (!RESEND_AUDIENCE_ID) {
    console.error("[ERROR] RESEND_AUDIENCE_ID is not set. Exiting.");
    process.exit(1);
  }

  if (DRY_RUN) {
    console.log("[INFO] DRY RUN mode — no emails will actually be sent.\n");
  }

  // 1. Load contacts from Resend
  console.log("[1/4] Fetching contacts from Resend Audience...");
  const contacts = await fetchContacts();
  console.log(`  Found ${contacts.length} contact(s).\n`);

  if (contacts.length === 0) {
    console.log("No contacts to process. Done.");
    return;
  }

  // 2. Load drip log
  console.log("[2/4] Loading drip log...");
  const log = loadDripLog();
  console.log(
    `  Drip log has ${Object.keys(log).length} tracked contact(s).\n`
  );

  // 3. Process each contact
  console.log("[3/4] Processing contacts...");
  let sentCount = 0;
  let skippedCount = 0;

  for (const contact of contacts) {
    // Skip unsubscribed contacts
    if (contact.unsubscribed) {
      console.log(`  [SKIP] ${contact.email} — unsubscribed`);
      skippedCount++;
      continue;
    }

    const days = daysSince(contact.created_at);
    const alreadySent = log[contact.email] ?? [];
    const firstName = contact.first_name || undefined;

    console.log(
      `  Checking ${contact.email} (signed up ${days} day(s) ago)...`
    );

    for (const step of DRIP_STEPS) {
      // Only send if enough days have passed AND not already sent
      if (days >= step.day && !alreadySent.includes(step.key)) {
        console.log(
          `    -> Sending "${step.key}" (day ${step.day}) to ${contact.email}`
        );

        const html = step.templateFn(firstName);
        const success = await sendEmail(contact.email, step.subject, html);

        if (success) {
          // Record in log
          if (!log[contact.email]) {
            log[contact.email] = [];
          }
          log[contact.email].push(step.key);
          sentCount++;
        }

        // Small delay to respect rate limits (Resend allows 10 req/s on most plans)
        await new Promise((resolve) => setTimeout(resolve, 150));
      }
    }
  }

  // 4. Save updated drip log
  console.log(`\n[4/4] Saving drip log...`);
  saveDripLog(log);

  console.log("\n=== Summary ===");
  console.log(`  Contacts processed: ${contacts.length}`);
  console.log(`  Emails sent: ${sentCount}`);
  console.log(`  Contacts skipped (unsubscribed): ${skippedCount}`);
  console.log(`  Drip log saved to: ${DRIP_LOG_PATH}`);
  console.log("=== Done ===\n");
}

main().catch((err) => {
  console.error("[FATAL]", err);
  process.exit(1);
});

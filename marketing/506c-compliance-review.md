# Reg D 506(c) Compliance Review — Marketing Files

> **Reviewed:** 2026-05-31
> **Files:** `marketing/ad-copy.md`, `marketing/linkedin-content.md`, `marketing/pitch-emails.md`
> **Reviewer:** AI assistant (Claude Code) — **NOT legal advice.**
> **⚠️ All findings below must be confirmed by securities counsel and by WeFunder before any
> material goes live. This review identifies likely problems; it does not clear anything for use.**

---

## 0. TL;DR

All three files were written for a **Regulation Crowdfunding (Reg CF)** raise. The confirmed
strategy is now a **Reg D Rule 506(c)** private round *first* (Reg CF comes later). These are
**different exemptions with opposite investor rules**, and the current copy markets the one thing
506(c) forbids: participation by **non-accredited / "everyday" investors at $100**.

**Bottom line:** Do not run any of this copy as-is. The educational/technology content is largely
reusable; the *offering framing, investor eligibility, minimums, and disclaimers* must be rewritten
for 506(c). Several pieces (the "democratize investing / open to everyone" press pitches and a few
LinkedIn posts) are built so deeply around the Reg CF hook that they need to be rewritten or shelved,
not patched.

This also stays gated behind the existing blocker: **WeFunder must reconfigure the offering to
506(c) on their backend before any public solicitation goes out.** See `memory/project_cf_campaign.md`.

---

## 1. Why the regime matters (plain-English)

| | **Reg CF** (what the copy assumes) | **Reg D 506(c)** (the actual first round) |
|---|---|---|
| Who can invest | Anyone 18+ (accredited **and** non-accredited) | **Accredited investors ONLY** |
| Verification | Self-certify; portal checks income/net-worth limits | **Mandatory third-party verification** of every investor (no self-cert) |
| Public advertising | Allowed but "tombstone-limited" (Rule 204): ad can't carry all terms, must point to portal | **Allowed and open** — general solicitation is the whole point of 506(c) |
| Typical minimum | $100 | Much higher (deal-set; thousands+, not $100) |
| Filing | Form C with SEC; audited/reviewed financials | Form D within 15 days of first sale; no Form C |
| Intermediary | WeFunder **Portal LLC** (FINRA funding portal) | WeFunder via an **SPV / RIA + verification** flow — *not* the funding portal |
| Cap | $5M / 12 months | No dollar cap |

**The trap:** 506(c) *lets* you advertise publicly (good — that's why it was chosen), but the audience
you convert must be **accredited and verified**. Copy that says "open to all," "everyday investors,"
"anyone can invest," or "$100" actively invites the wrong investor and contradicts the exemption.
Worse, the SEC treats general solicitation as a **one-way door**: marketing publicly under a 506(c)
offering while signaling non-accredited eligibility creates real exposure.

> **Anti-fraud applies either way.** Rule 10b-5 / Section 17(a) prohibit false or misleading
> statements and material omissions regardless of exemption. Every factual claim below must be
> accurate and substantiated — see §4.

---

## 2. Cross-cutting changes (apply to ALL three files)

These find/replace items recur throughout every file:

| ❌ Remove / rewrite | ✅ Replace with |
|---|---|
| "open to everyday investors," "open to all investors," "anyone can invest," "Open to all investors now" | "Open to **accredited investors only**" |
| "accredited and non-accredited investors alike" | "available to accredited investors" |
| "Invest from $100," "Shares starting at $100," "Minimum investment: $100" | The actual 506(c) minimum (deal-set — confirm with Raj/WeFunder); **remove $100 entirely** |
| "Anyone 18 or older … can invest" (LinkedIn Post 18) | "Open to accredited investors; accreditation is verified by a third party" |
| "Regulation Crowdfunding," "Reg CF," "Reg CF offering" | "private offering under Reg D Rule 506(c)" (or simply "private placement to accredited investors") |
| "WeFunder Portal LLC, a FINRA-registered funding portal" | The correct 506(c) entity/structure (SPV/RIA) — confirm exact name with WeFunder |
| "Form C," "audited/reviewed financials," "files Form C with the SEC" | Remove (these are Reg CF mechanics); 506(c) uses Form D |
| "Rule 204 of Regulation Crowdfunding" compliance sections | Replace with 506(c) framework (general solicitation permitted; accredited-only; verification; Form D; anti-fraud) |
| "democratizing cleantech investment," "who gets to invest," "open to everyone" narrative | Rewrite — this thesis is **incompatible** with accredited-only 506(c) |

**New disclaimer (506c) to use in place of the Reg CF footers:**

> *International BioRefineries [LLC/Inc.] is offering securities under Rule 506(c) of Regulation D.
> This offering is available to **verified accredited investors only**. This communication is not an
> offer to sell or a solicitation of an offer to buy securities; any offer is made solely through the
> official offering materials. Investing in early-stage companies involves significant risk, including
> illiquidity and the possible loss of your entire investment. Past performance does not indicate
> future results. This is not investment advice; consult your own advisors. No securities regulator
> has approved or passed on the merits of this offering.*

(Exact wording to be set by counsel.)

---

## 3. File-by-file findings

### 3.1 `ad-copy.md` — **HIGH severity; do not run as-is**

This is the most exposed file because paid ads are public, archived, and platform-screened.

- **Eligibility/minimum claims (every section):** "Now open to everyday investors" (L16), "Shares
  starting at $100" (L22), "Open to all investors now" (L76), "Invest from $100" (L70, L97, L159,
  L202, etc.), "Limited Reg CF offering" (L130). **All must go** per §2.
- **The entire "Compliance Notes" section (L469–539) is Reg-CF-specific and wrong for 506(c):**
  - "Rule 204 of Regulation Crowdfunding" (L502) — wrong rule.
  - "the ad must direct investors to the intermediary's (WeFunder's) platform … ad itself cannot
    contain all material terms" (L502–503) — that's the Reg CF tombstone rule; **506(c) does not
    impose the tombstone limit** (general solicitation is broadly permitted), though anti-fraud still
    governs content.
  - All four "Required Disclaimers" and the four "Platform-Specific Disclaimer Templates"
    (L523–539) reference "Regulation CF / WeFunder Portal LLC / funding portal" — **rewrite for
    506(c)** using the §2 disclaimer.
- **Platform ad-policy reality check:** Meta, Google, and LinkedIn restrict securities ads and many
  **require the offering to be 506(c) + verification** to run at all. This is a point in 506(c)'s
  favor, but each platform still needs the *correct* exemption stated and may require pre-clearance.
- **Reddit note (L383):** keep — its caution about securities solicitation is, if anything, more apt.
- **CTAs:** "Invest Now" / "Reserve Your Spot" are acceptable for 506(c) (no tombstone limit), but
  every ad must still route to an offering page that gates on accreditation verification.
- **Targeting:** the broad consumer targeting (e.g., "household income $75K+," "ages 22–55,
  environmentally conscious consumers," lookalikes of crowdfunding users) aims at a **largely
  non-accredited** audience. Not illegal (you may advertise broadly under 506(c)), but it wastes
  spend and raises optics risk. Recommend retargeting toward accredited-investor proxies and making
  the landing page hard-gate on verification.

### 3.2 `linkedin-content.md` — **MEDIUM-HIGH severity; mostly salvageable**

The educational posts (technology, market, biochar, incentives) are reusable with the §2 swaps.
The offering-specific posts need real work:

- **Post 5 — Raise Announcement (L213):** "raising capital through Regulation CF (Reg CF) … for the
  first time, **accredited and non-accredited investors alike can participate**." **Directly wrong
  for 506(c).** Rewrite: accredited-only, verification required, private placement.
- **Post 16 — Investor Update (L643–666):** templated social proof — "the response has been
  incredible," implied "hundreds of investors," "We still have room in this round." Under **anti-fraud
  these numbers must be true and current**, not aspirational placeholders. Do not post fabricated
  momentum. (Same caution as ad-copy Variation 5, "Hundreds of investors are backing iNBIO," L124.)
- **Post 18 — "What is Reg CF" FAQ (L716–741):** this entire post explains the **wrong exemption**
  ("Anyone 18 or older … can invest," "Form C," "$5 million," "audited or reviewed financials").
  **Rewrite as a 506(c) explainer** ("What is a 506(c) private placement / why accredited-only / how
  verification works") or drop it.
- **Posts 11/12 — market & carbon-credit claims (L437–443, L490):** specific market sizes and carbon
  price ranges ("$100 to $150+ per ton," "$3.1B by 2030," "$50+ billion") need **cited, credible
  sources** on the linked page — see §4.
- **Compliance Note at top (L8):** update from "guaranteed returns / WeFunder link in first comment"
  (Reg CF reach tactics are fine to keep) to also state accredited-only positioning.
- **Reusable as-is (with §2 swaps):** Posts 1, 2, 3, 4, 6, 7, 9, 10, 13, 19 (story, problem,
  pyrolysis, products, certs, modular systems, vision) — provided the technology/cert claims in §4
  check out.

### 3.3 `pitch-emails.md` — **MIXED; split into two buckets**

- **Bucket A — Accelerator / grant / press / warm-network emails (Templates 1–13):** these pitch
  *programs and journalists*, not investors, so the 506(c) eligibility rules are less central. BUT
  every one drops the line "raising via **Reg CF** on WeFunder," which is now factually wrong.
  → Simple swap: "raising a **private round under Reg D 506(c)** (accredited investors)."
  - **Press pitches 9–12** lean hard on the **"democratizing investment / opening the raise to
    everyone / non-accredited investors can participate"** angle (e.g., L307, L367, L371, L403, L438).
    That hook is **the opposite of 506(c)** and would plant a false public narrative. **Rewrite the
    angle** (e.g., "raising to scale modular pyrolysis") or hold these pitches until the later Reg CF
    round, when "open to everyone" becomes true again.
- **Bucket B — Warm Network Email (Template 14, L448–479):** "raising capital through a Regulation
  Crowdfunding campaign … **This means anyone can invest, not just accredited investors**" (L462).
  **Wrong and high-visibility** (goes to Raj's whole personal list). Rewrite for 506(c):
  accredited-only, verification, "if you're an accredited investor, here's the offering." The existing
  disclaimer (L479) is good but should be updated to the §2 506(c) version.
- **Follow-up (Template 15):** swap "Reg CF" → 506(c); otherwise fine.
- **General Notes (L512–527):** the compliance note (L514) is sound in spirit ("no guaranteed
  returns / no projections / direct to offering page") — keep, but change "Regulation Crowdfunding"
  → "Reg D 506(c)" and add the accredited-only + verification points.

---

## 4. Anti-fraud / substantiation issues (apply regardless of exemption)

These are independent of CF-vs-506(c) and must be fixed before *any* version goes out:

1. **Stage / scale claims.** Copy repeatedly implies deployed commercial scale: "75 TPD systems,"
   "proven technology … at commercial scale," "technology risk retired" (emails L109, L178), "This is
   the model we are building and scaling" (LinkedIn Post 15). If the real status is a **demo-scale
   plant** (per project notes, ~6 TPD demo), then asserting commercial-scale deployment is **materially
   misleading**. Reframe to actual stage (e.g., "demonstration plant operating; commercial systems in
   development") — confirm exact current status with Raj.
2. **Sawmill use case (LinkedIn Post 15, L600–628).** Specific economics ($600/day, $219k/yr,
   eliminated disposal, new revenue) framed as "**This is not theoretical**." If no such deployment
   exists, label it explicitly as a **hypothetical illustration**, not a realized result.
3. **"IBI/EBC certified" biochar** (appears in nearly every file). If certification is **pending or
   not yet granted**, this is a false statement of fact. Verify certification status; if pending, say
   "pursuing IBI/EBC certification."
4. **"Proprietary" / "patented" fast pyrolysis** (emails L71). Confirm IP status; fast pyrolysis is
   well-known prior art (the same file later says so, L109). Don't overclaim proprietary tech.
5. **Market statistics** ($50B+ cleantech, $3.1B biochar by 2030, 36B gal SAF by 2050, $2B carbon
   market, "$100–$150/ton" credits). Each needs a **named, credible, dated source** on the landing
   page. ad-copy already instructs this (L476) — enforce it.
6. **"Carbon-negative" / "carbon-negative operations"** claims. Substantiate with lifecycle basis or
   soften to "carbon-reducing"; bare "carbon-negative" invites greenwashing scrutiny.
7. **"Negative feedstock cost — waste generators will pay us"** (LinkedIn Post 13, L523). Substantiate
   (do you have such contracts?) or soften to "can carry low or negative feedstock cost."
8. **No guaranteed-return / no-projection rules** are correctly stated in all three files — keep
   enforcing them.

---

## 5. Factual inconsistencies to resolve (defer to Raj)

1. **Entity name/type:** ad-copy and emails say "International BioRefineries, **Inc.**"; project
   records say "International BioRefineries, **LLC**" (Maryland, taxed as partnership). Securities
   docs, disclaimers, and the entity that issues must match reality. **Pick one and make it consistent
   everywhere.**
2. **WeFunder URL:** ad-copy uses `wefunder.com/investor-warmup` (L5, L527, L539); project records
   show the live page as `wefunder.com/activity/international.biorefineries`. Confirm the canonical URL.
3. **`/invest` landing page** still references Reg CF/WeFunder (per project notes) and may state
   convertible-note vs SAFE terms inconsistently — align it with the 506(c) structure before driving
   ad/email traffic to it.

---

## 6. Action checklist (severity-ranked)

**🔴 Blockers — before anything goes live**
- [ ] Confirm WeFunder has reconfigured the offering to **506(c)** on their backend (existing blocker).
- [ ] Securities counsel reviews and approves all rewritten copy + disclaimers.
- [ ] Resolve entity name (Inc. vs LLC) and canonical WeFunder URL.
- [ ] Remove **every** "$100 / open to all / everyday / non-accredited / anyone can invest" instance.
- [ ] Verify IBI/EBC certification status and current plant scale; fix any overclaims (§4).

**🟠 High — rewrite, don't patch**
- [ ] `ad-copy.md`: replace the entire Reg CF "Compliance Notes" + disclaimer templates with 506(c) versions.
- [ ] LinkedIn Posts 5, 16, 18: rewrite for accredited-only / no fabricated social proof.
- [ ] Pitch-emails Template 14 (warm network) + press pitches 9–12: rewrite the "open to everyone" angle.

**🟡 Medium — swap and source**
- [ ] Global find/replace per §2 across all three files.
- [ ] Add named sources for every market statistic on the landing page.
- [ ] Update the top-of-file compliance notes in each document to 506(c).

**🟢 Reusable as-is (after §2 swaps + §4 verification)**
- LinkedIn educational posts 1–4, 6, 7, 9, 10, 13, 19.
- Accelerator/grant emails 1–8 (Bucket A) with the one-line exemption swap.
- ad-copy technology/educational primary text (minus eligibility lines).

---

## 7. Strategic note

Much of this copy will become **correct again** for the **later Reg CF round**, when "open to
everyone / invest from $100 / non-accredited welcome" is true. Rather than deleting it, consider
**forking**: keep a `*-regcf.md` archive of the current files for the Reg CF phase, and create
`*-506c.md` versions (accredited-only) for the private round now. That preserves the work and keeps
the two regulatory voices from bleeding into each other.

*— End of review. Not legal advice; for counsel and WeFunder review before use.*

# `/invest` Page Under 506(b) — The Problem & Options

> **NOT legal advice — confirm with counsel before changing a live offering page.**
> Drafted 2026-06-01. Re: `src/app/invest/page.tsx`, `src/components/InvestFAQ.tsx`,
> `src/components/InvestEmailForm.tsx`.

---

## The problem (urgent)

The live `/invest` page is **public and SEO-indexed**, and it actively **solicits investment** in the
current raise:

- Metadata + hero: "Raising $3M under Reg D **506(c)**" — *wrong exemption now; the round is 506(b).*
- Full **deal terms** published: $3M convertible note, 7% interest, 2-yr maturity, 20% discount, and
  a line-item use-of-funds table.
- **Solicitation CTAs:** "Request Investment Details," "Stay Updated on Our Raise," "Get Investor
  Updates," "Get Started."
- A **public email-capture funnel** (`InvestEmailForm` → `/api/subscribe`) building an investor list.

Under **506(b)** (the live exemption), this is **general solicitation** — which 506(b) prohibits.
The risk is not theoretical: publicly conditioning the market for an active 506(b) raise can **blow
the exemption for the entire round.** And the public email-capture funnel makes it worse — signups
collected from a public page are **not** the pre-existing, substantive relationships 506(b) requires.

**Key point:** simply changing "506(c)" → "506(b)" on this page does **not** fix it. A public page
that promotes the active offering is the violation regardless of the label.

---

## Options (pick one — recommend with counsel)

### 🟢 Option A — Replace with a non-soliciting placeholder (RECOMMENDED)
Keep `/invest` live but strip it to neutral "investor relations" info that does **not** mention an
active raise, deal terms, or invite investment. Public visitors see a company/IR overview; the actual
offering lives **only** on the private WeFunder link shared by email.
- ✅ Keeps the URL alive, no broken links, no SEO 404.
- ✅ Removes the solicitation. Compliant for 506(b).
- Draft copy below.

### 🟡 Option B — Gate the real content behind access control
Move the offering details behind a login / private-link gate so the public can't see deal terms or
the invite. **Caveat:** a public "request access" form does **not** by itself create a pre-existing
substantive relationship, so the gate must be paired with discipline about who actually gets in.
- More engineering; still needs the public-facing entry to be non-soliciting.

### 🔴 Option C — Take `/invest` down entirely (301 to home or /contact)
Safest from a pure-compliance view, but loses the asset and creates a redirect.

**In all cases:** disable or repoint the public **email-capture funnel** (`InvestEmailForm`) so the
site isn't building a solicitation list, and remove `/invest` deal terms from the **sitemap/SEO** push
if it's being actively promoted.

---

## Draft — Option A non-soliciting placeholder copy

*(Drop-in replacement copy for `/invest`. No deal terms, no "raising now," no invest CTA.)*

> **Investor Relations**
> # Building the Future of Biomass Conversion
>
> International BioRefineries (iNBIO) develops modular fast-pyrolysis systems that convert biomass
> waste — forestry and agricultural residues — into bio-oil, biochar, and renewable energy products.
> Our technology is protected by issued U.S. and Canadian patents, with a pilot plant in
> commissioning on Maryland's Eastern Shore.
>
> **Our technology** → [link to /our-technology]
> **What we make** → [links to /biochar, /biofuels]
> **About the company** → [link to /about]
>
> ---
> *iNBIO conducts private financings from time to time. We are not making a public offering of
> securities. Nothing on this page is an offer to sell or a solicitation of an offer to buy any
> security. If you have an existing relationship with iNBIO and wish to discuss the company, please*
> [contact us](/contact).

**Notes on the placeholder:**
- No raise amount, no terms, no "invest," no "request investment details," no email-capture-for-raise.
- The `/contact` link is generic company contact — **not** an investment-request funnel. Inbound
  contacts do not become solicitation targets unless a genuine relationship already exists.
- Keep the existing risk/▢disclaimer tone out — there's nothing to disclaim if you're not offering.

---

## What to preserve for later

The current page is genuinely good work (clear economics, real patents, named team, honest risk +
litigation disclosure). Don't delete it — **archive** `page.tsx`/`InvestFAQ.tsx` as
`invest.regd-506c.archived.tsx` so it's ready if a **506(c) or Reg CF** phase ever becomes available,
when a public soliciting page is permitted again.

## Anti-fraud items still to verify (carry over from the marketing review)
- Entity type consistency (Inc. vs LLC) across all materials.
- The specific unit economics ($615/ton, 24×, $4.00/gal, credit values) must be backed by the
  offering documents wherever they appear.
- Patent numbers (US 9,121,644; CA 2,832,550; US App. 18/672,256) — confirm current/accurate.
- IBI/EBC biochar certification status (granted vs pending) — fix any overstatement.

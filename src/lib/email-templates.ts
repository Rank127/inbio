// ---------------------------------------------------------------------------
// iNBIO Investment Drip Campaign — Email Templates
// ---------------------------------------------------------------------------
// Each function returns a complete HTML email string using inline styles
// and table-based layout for maximum email client compatibility.
// ---------------------------------------------------------------------------

const LOGO_URL =
  "https://inbio.net/images/IMG_20250624_1852251-300x72.png";
const WEFUNDER_URL = "https://wefunder.com/investor-warmup";
const WEBSITE_URL = "https://inbio.net";

// Brand colors
const GREEN_DARK = "#1B5E20";
const GREEN_LIGHT = "#2E7D32";
const ORANGE = "#F57C00";
const ORANGE_LIGHT = "#FF9800";
const TEXT_PRIMARY = "#212121";
const TEXT_SECONDARY = "#616161";
const WHITE = "#FFFFFF";
const BG_LIGHT = "#FAFAFA";
const BORDER = "#E0E0E0";

// ---------------------------------------------------------------------------
// Shared layout helpers
// ---------------------------------------------------------------------------

function greeting(firstName?: string): string {
  return firstName ? `Hi ${firstName},` : "Hi there,";
}

function ctaButton(text: string, href: string = WEFUNDER_URL): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:28px auto;">
      <tr>
        <td align="center" style="border-radius:6px;background-color:${ORANGE};">
          <a href="${href}" target="_blank" style="display:inline-block;padding:14px 36px;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:${WHITE};text-decoration:none;border-radius:6px;">
            ${text}
          </a>
        </td>
      </tr>
    </table>`;
}

function wrapLayout(bodyContent: string): string {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>iNBIO</title>
  <!--[if mso]>
  <style>table,td{font-family:Arial,Helvetica,sans-serif;}</style>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#F5F5F5;font-family:Arial,Helvetica,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">

<!-- Outer wrapper -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F5F5F5;">
  <tr>
    <td align="center" style="padding:24px 12px;">

      <!-- Email container -->
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:${WHITE};border-radius:8px;overflow:hidden;border:1px solid ${BORDER};">

        <!-- Header -->
        <tr>
          <td style="background-color:${GREEN_DARK};padding:24px 32px;text-align:center;">
            <a href="${WEBSITE_URL}" target="_blank">
              <img src="${LOGO_URL}" alt="iNBIO" width="200" style="display:block;margin:0 auto;max-width:200px;height:auto;" />
            </a>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;color:${TEXT_PRIMARY};font-size:15px;line-height:1.7;">
            ${bodyContent}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:${BG_LIGHT};padding:24px 32px;border-top:1px solid ${BORDER};text-align:center;font-size:12px;color:${TEXT_SECONDARY};line-height:1.6;">
            <p style="margin:0 0 8px;">International BioRefineries, Inc. | 31901 Tri-County Way, Suite 102B | Salisbury, MD 21804</p>
            <p style="margin:0 0 8px;">
              <a href="${WEBSITE_URL}" style="color:${GREEN_LIGHT};text-decoration:underline;">inbio.net</a>
            </p>
            <p style="margin:0;">
              <a href="{{unsubscribe_url}}" style="color:${TEXT_SECONDARY};text-decoration:underline;font-size:11px;">Unsubscribe</a>
            </p>
          </td>
        </tr>

      </table>
      <!-- /Email container -->

    </td>
  </tr>
</table>
<!-- /Outer wrapper -->

</body>
</html>`;
}

// ---------------------------------------------------------------------------
// 1. Welcome Email — sent immediately on subscribe
// ---------------------------------------------------------------------------
export function welcomeEmail(firstName?: string): string {
  const body = `
    <p style="margin:0 0 16px;font-size:17px;font-weight:700;color:${GREEN_DARK};">Welcome to the iNBIO Community!</p>

    <p style="margin:0 0 16px;">${greeting(firstName)}</p>

    <p style="margin:0 0 16px;">
      Thank you for joining us on an exciting journey. At <strong>International BioRefineries (iNBIO)</strong>,
      we are building the next generation of biomass-to-energy technology right here in Salisbury, Maryland.
    </p>

    <p style="margin:0 0 16px;">
      Our proprietary fast pyrolysis process converts agricultural and forestry waste into three valuable
      product streams: <strong>bio-oil</strong>, <strong>biochar</strong>, and <strong>syngas</strong> &mdash;
      displacing fossil fuels while diverting waste from landfills.
    </p>

    <p style="margin:0 0 16px;font-weight:600;">Here is what you can expect from us:</p>
    <ul style="margin:0 0 16px;padding-left:20px;color:${TEXT_PRIMARY};">
      <li style="margin-bottom:6px;">Updates on our investment round and company milestones</li>
      <li style="margin-bottom:6px;">Behind-the-scenes looks at our technology and team</li>
      <li style="margin-bottom:6px;">Insights into the cleantech and renewable energy market</li>
    </ul>

    <p style="margin:0 0 16px;">
      In the meantime, you can learn more about our company and technology:
    </p>

    ${ctaButton("Learn More About iNBIO", WEBSITE_URL)}

    <p style="margin:0;color:${TEXT_SECONDARY};font-size:13px;">
      <em>This email is for informational purposes only and does not constitute an offer to sell or a
      solicitation of an offer to buy any securities. This offering is made under Regulation D Rule
      506(c) and is available only to accredited investors as defined by the SEC.</em>
    </p>`;

  return wrapLayout(body);
}

// ---------------------------------------------------------------------------
// 2. Announcement Email — "We're live on WeFunder!"
// ---------------------------------------------------------------------------
export function announcementEmail(firstName?: string): string {
  const body = `
    <p style="margin:0 0 16px;font-size:17px;font-weight:700;color:${GREEN_DARK};">iNBIO Is Now Accepting Investments</p>

    <p style="margin:0 0 16px;">${greeting(firstName)}</p>

    <p style="margin:0 0 16px;">
      The moment we have been working toward is here &mdash; <strong>iNBIO's private investment round is now
      open to accredited investors.</strong>
    </p>

    <p style="margin:0 0 16px;">
      This is your opportunity to become part of a company turning biomass waste into clean energy products.
      Our fast pyrolysis technology addresses two critical challenges simultaneously: <strong>waste management</strong>
      and <strong>renewable energy production</strong>.
    </p>

    <p style="margin:0 0 4px;font-weight:600;">Investment highlights:</p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px;width:100%;">
      <tr>
        <td style="padding:10px 16px;background-color:${BG_LIGHT};border-left:4px solid ${ORANGE};margin-bottom:8px;">
          <strong style="color:${GREEN_DARK};">Technology</strong><br />
          Patented fast pyrolysis reactor converting biomass waste to bio-oil, biochar, and syngas
        </td>
      </tr>
      <tr><td style="height:8px;"></td></tr>
      <tr>
        <td style="padding:10px 16px;background-color:${BG_LIGHT};border-left:4px solid ${ORANGE};">
          <strong style="color:${GREEN_DARK};">Market</strong><br />
          Cleantech, carbon credits, and sustainable aviation fuel (SAF) &mdash; sectors experiencing significant growth
        </td>
      </tr>
      <tr><td style="height:8px;"></td></tr>
      <tr>
        <td style="padding:10px 16px;background-color:${BG_LIGHT};border-left:4px solid ${ORANGE};">
          <strong style="color:${GREEN_DARK};">Location</strong><br />
          Salisbury, MD &mdash; strategically positioned near abundant biomass feedstock on the Delmarva Peninsula
        </td>
      </tr>
    </table>

    <p style="margin:0 0 16px;">
      Contact us to review the full offering details, financials, and team information.
    </p>

    ${ctaButton("Request Investment Details", WEBSITE_URL + "/invest")}

    <p style="margin:0;color:${TEXT_SECONDARY};font-size:13px;">
      <em>This offering is made under Regulation D Rule 506(c) and is available only to accredited investors.
      Investing in early-stage companies involves risks, including illiquidity and loss of capital.
      Please review the offering materials carefully.</em>
    </p>`;

  return wrapLayout(body);
}

// ---------------------------------------------------------------------------
// 3. Nurture 1 (Day 3) — The technology behind iNBIO
// ---------------------------------------------------------------------------
export function nurture1Email(firstName?: string): string {
  const body = `
    <p style="margin:0 0 16px;font-size:17px;font-weight:700;color:${GREEN_DARK};">The Science Behind iNBIO</p>

    <p style="margin:0 0 16px;">${greeting(firstName)}</p>

    <p style="margin:0 0 16px;">
      We wanted to share a closer look at the technology powering iNBIO &mdash; and why we believe it has
      the potential to make a real impact in the renewable energy landscape.
    </p>

    <p style="margin:0 0 8px;font-weight:700;color:${GREEN_DARK};">What Is Fast Pyrolysis?</p>
    <p style="margin:0 0 16px;">
      Fast pyrolysis is a thermochemical process that rapidly heats biomass (wood chips, agricultural
      residues, forestry waste) in the absence of oxygen. In just seconds, the organic material is
      converted into three valuable products:
    </p>

    <!-- Three product streams -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin:0 0 20px;">
      <tr>
        <td style="width:33%;padding:8px;vertical-align:top;text-align:center;">
          <div style="background-color:${GREEN_DARK};color:${WHITE};padding:12px;border-radius:6px 6px 0 0;font-weight:700;font-size:14px;">Bio-Oil</div>
          <div style="padding:12px;border:1px solid ${BORDER};border-top:none;border-radius:0 0 6px 6px;font-size:13px;line-height:1.5;">
            A liquid fuel that can replace heating oil or be further refined into transportation fuels,
            including sustainable aviation fuel (SAF).
          </div>
        </td>
        <td style="width:33%;padding:8px;vertical-align:top;text-align:center;">
          <div style="background-color:${GREEN_DARK};color:${WHITE};padding:12px;border-radius:6px 6px 0 0;font-weight:700;font-size:14px;">Biochar</div>
          <div style="padding:12px;border:1px solid ${BORDER};border-top:none;border-radius:0 0 6px 6px;font-size:13px;line-height:1.5;">
            A stable, carbon-rich solid used as a soil amendment that sequesters carbon for hundreds
            of years &mdash; generating carbon credits.
          </div>
        </td>
        <td style="width:33%;padding:8px;vertical-align:top;text-align:center;">
          <div style="background-color:${GREEN_DARK};color:${WHITE};padding:12px;border-radius:6px 6px 0 0;font-weight:700;font-size:14px;">Syngas</div>
          <div style="padding:12px;border:1px solid ${BORDER};border-top:none;border-radius:0 0 6px 6px;font-size:13px;line-height:1.5;">
            A combustible gas used to power the pyrolysis process itself, making the system
            energy-efficient and reducing operating costs.
          </div>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 8px;font-weight:700;color:${GREEN_DARK};">Why It Matters</p>
    <p style="margin:0 0 16px;">
      Unlike incineration or landfilling, our process captures the energy and carbon locked in biomass
      waste and converts it into products the market needs. The result is a circular, waste-to-value model
      that can generate multiple revenue streams simultaneously.
    </p>

    <p style="margin:0 0 16px;">
      Interested in learning more? Visit our website for detailed information about our technology,
      business model, and growth plans.
    </p>

    ${ctaButton("Learn More", WEBSITE_URL + "/our-technology")}

    <p style="margin:0;color:${TEXT_SECONDARY};font-size:13px;">
      <em>This communication is for informational purposes only and does not constitute investment advice.
      This offering is available only to accredited investors under Regulation D Rule 506(c).</em>
    </p>`;

  return wrapLayout(body);
}

// ---------------------------------------------------------------------------
// 4. Nurture 2 (Day 7) — Market opportunity
// ---------------------------------------------------------------------------
export function nurture2Email(firstName?: string): string {
  const body = `
    <p style="margin:0 0 16px;font-size:17px;font-weight:700;color:${GREEN_DARK};">The Market Opportunity</p>

    <p style="margin:0 0 16px;">${greeting(firstName)}</p>

    <p style="margin:0 0 16px;">
      Last week we shared the science behind iNBIO. Today, we want to talk about <strong>why now</strong>
      &mdash; and why the market conditions for biomass-to-energy are stronger than ever.
    </p>

    <p style="margin:0 0 8px;font-weight:700;color:${GREEN_DARK};">Cleantech Is Accelerating</p>
    <p style="margin:0 0 16px;">
      Global investment in clean energy exceeded $1.7 trillion in 2023 and continues to grow.
      Government policy, corporate sustainability commitments, and consumer demand are all pushing
      in the same direction: away from fossil fuels and toward renewable alternatives.
    </p>

    <p style="margin:0 0 8px;font-weight:700;color:${GREEN_DARK};">Carbon Credits Create a New Revenue Stream</p>
    <p style="margin:0 0 16px;">
      Biochar &mdash; one of our three product streams &mdash; sequesters carbon in soil for hundreds
      of years. This makes it eligible for carbon credits under leading certification standards. As
      carbon markets mature and pricing strengthens, this represents a potentially significant source
      of revenue for iNBIO.
    </p>

    <p style="margin:0 0 8px;font-weight:700;color:${GREEN_DARK};">Sustainable Aviation Fuel (SAF) Demand Is Surging</p>
    <p style="margin:0 0 16px;">
      Airlines worldwide have committed to net-zero emissions by 2050, but today SAF accounts for less
      than 1% of global jet fuel consumption. Bio-oil produced through fast pyrolysis is a feedstock for
      SAF production, positioning iNBIO in a high-demand, supply-constrained market.
    </p>

    <!-- Highlight box -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin:0 0 20px;">
      <tr>
        <td style="padding:20px;background-color:${BG_LIGHT};border:1px solid ${BORDER};border-radius:6px;text-align:center;">
          <p style="margin:0 0 8px;font-weight:700;color:${GREEN_DARK};font-size:16px;">Three Markets. One Process.</p>
          <p style="margin:0;color:${TEXT_SECONDARY};font-size:14px;">
            iNBIO's fast pyrolysis technology produces bio-oil, biochar, and syngas in a single integrated
            process &mdash; addressing renewable fuels, carbon sequestration, and energy efficiency simultaneously.
          </p>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 16px;">
      Contact us for detailed market analysis, financial projections, and our go-to-market strategy.
    </p>

    ${ctaButton("See the Full Opportunity", WEBSITE_URL + "/invest")}

    <p style="margin:0;color:${TEXT_SECONDARY};font-size:13px;">
      <em>Market projections and trends discussed herein are based on publicly available data and do not
      guarantee future performance. Investing involves risk, including possible loss of principal.</em>
    </p>`;

  return wrapLayout(body);
}

// ---------------------------------------------------------------------------
// 5. Nurture 3 (Day 14) — Meet the team / vision
// ---------------------------------------------------------------------------
export function nurture3Email(firstName?: string): string {
  const body = `
    <p style="margin:0 0 16px;font-size:17px;font-weight:700;color:${GREEN_DARK};">Meet the Team Behind iNBIO</p>

    <p style="margin:0 0 16px;">${greeting(firstName)}</p>

    <p style="margin:0 0 16px;">
      Great technology is only part of the equation. Today, we want to introduce you to the people and
      the vision driving iNBIO forward.
    </p>

    <p style="margin:0 0 8px;font-weight:700;color:${GREEN_DARK};">Raj Kathuria &mdash; Founder &amp; CEO</p>
    <p style="margin:0 0 16px;">
      Raj Kathuria brings decades of experience in biotechnology, engineering, and entrepreneurship to
      iNBIO. His vision: build a scalable, commercially viable platform that transforms biomass waste
      into clean energy products &mdash; creating economic value while reducing environmental impact.
    </p>

    <p style="margin:0 0 16px;">
      Under Raj's leadership, iNBIO has developed its proprietary fast pyrolysis reactor technology,
      secured strategic partnerships, and established operations on the Delmarva Peninsula &mdash; one of
      the most biomass-rich regions on the East Coast.
    </p>

    <p style="margin:0 0 8px;font-weight:700;color:${GREEN_DARK};">Our Mission</p>

    <!-- Mission quote box -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin:0 0 20px;">
      <tr>
        <td style="padding:20px 24px;background-color:${GREEN_DARK};color:${WHITE};border-radius:6px;font-size:15px;line-height:1.7;">
          <p style="margin:0 0 12px;font-style:italic;">
            &ldquo;We believe waste is not something to dispose of &mdash; it is a resource waiting to be
            unlocked. At iNBIO, we are building the infrastructure to convert agricultural and forestry
            waste into the clean energy products the world needs.&rdquo;
          </p>
          <p style="margin:0;font-weight:700;font-size:13px;">&mdash; Raj Kathuria, Founder &amp; CEO</p>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 8px;font-weight:700;color:${GREEN_DARK};">Why Salisbury, Maryland?</p>
    <p style="margin:0 0 16px;">
      The Delmarva Peninsula produces massive volumes of agricultural waste, including poultry litter
      and crop residues. Locating here gives iNBIO access to abundant, low-cost feedstock while
      addressing a real waste-management challenge for local farmers and producers.
    </p>

    <p style="margin:0 0 16px;">
      Our private investment round is your chance to be part of this story. Get in touch to learn more
      about the team, our technology, and how we plan to grow.
    </p>

    ${ctaButton("Learn More About Investing", WEBSITE_URL + "/invest")}

    <p style="margin:0;color:${TEXT_SECONDARY};font-size:13px;">
      <em>This email is for informational purposes only. Any investment decision should be based solely
      on the offering materials available on WeFunder. Past achievements do not guarantee future results.</em>
    </p>`;

  return wrapLayout(body);
}

// ---------------------------------------------------------------------------
// 6. Last Chance Email — urgency / deadline reminder
// ---------------------------------------------------------------------------
export function lastChanceEmail(firstName?: string): string {
  const body = `
    <p style="margin:0 0 16px;font-size:17px;font-weight:700;color:${ORANGE};">Investment Round Closing Soon</p>

    <p style="margin:0 0 16px;">${greeting(firstName)}</p>

    <p style="margin:0 0 16px;">
      We wanted to reach out one more time because <strong>iNBIO's private investment round is approaching its
      close</strong>. If you have been considering participating, now is the time to review the offering.
    </p>

    <!-- Urgency box -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin:0 0 20px;">
      <tr>
        <td style="padding:20px;background-color:#FFF3E0;border:2px solid ${ORANGE};border-radius:6px;text-align:center;">
          <p style="margin:0 0 8px;font-weight:700;color:${ORANGE};font-size:18px;">Time Is Running Out</p>
          <p style="margin:0;color:${TEXT_PRIMARY};font-size:14px;">
            Once the round closes, this opportunity to invest will no longer be available.
          </p>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 8px;font-weight:600;">A quick recap of what makes iNBIO compelling:</p>
    <ul style="margin:0 0 16px;padding-left:20px;color:${TEXT_PRIMARY};">
      <li style="margin-bottom:6px;"><strong>Proven technology:</strong> Proprietary fast pyrolysis process producing bio-oil, biochar, and syngas</li>
      <li style="margin-bottom:6px;"><strong>Growing markets:</strong> Cleantech, carbon credits, and sustainable aviation fuel demand</li>
      <li style="margin-bottom:6px;"><strong>Strategic location:</strong> Delmarva Peninsula with abundant, low-cost biomass feedstock</li>
      <li style="margin-bottom:6px;"><strong>Experienced leadership:</strong> Raj Kathuria and a team with deep biotech expertise</li>
    </ul>

    <p style="margin:0 0 16px;">
      Do not miss your chance to review the offering before the round closes.
    </p>

    ${ctaButton("Review the Offering Now", WEBSITE_URL + "/invest")}

    <p style="margin:0;color:${TEXT_SECONDARY};font-size:13px;">
      <em>This is a time-sensitive notice, not a solicitation to invest. This offering is available only
      to accredited investors under Regulation D Rule 506(c). All investment decisions should be made
      based on a thorough review of the offering materials. Investing in early-stage companies involves
      significant risk, including potential loss of your entire investment.</em>
    </p>`;

  return wrapLayout(body);
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industry News | iNBIO",
  description:
    "Curated news on the biochar, fast pyrolysis, carbon credit, and biofuel markets — with sources — from the team at International BioRefineries.",
};

// ---------------------------------------------------------------------------
// News data
//
// Each digest is a dated batch of public-facing news items distilled from the
// iNBIO industry-news research (site/content/news-research/*.md). Keep items
// public-safe: a factual summary + sources, no internal strategy notes.
// To publish a new digest, add a NewsDigest object to the TOP of `digests`.
// ---------------------------------------------------------------------------

type NewsSource = { name: string; url: string };

type NewsItem = {
  title: string;
  summary: string;
  category: string;
  region?: string;
  sources: NewsSource[];
  related?: { label: string; href: string };
};

type NewsDigest = {
  date: string; // ISO yyyy-mm-dd
  title?: string;
  items: NewsItem[];
};

const digests: NewsDigest[] = [
  {
    date: "2026-08-05",
    title: "Global Funding & Investment",
    items: [
      {
        title: "India's Varaha Raises $20M to Scale Carbon Removal",
        category: "Funding",
        region: "India",
        summary:
          "Carbon-removal developer Varaha secured $20 million as the first tranche of a $45M Series B led by WestBridge Capital, funding measurement, R&D, and international expansion. Varaha runs biochar, afforestation, regenerative-agriculture, and enhanced-rock-weathering projects and holds offtake agreements with Microsoft, Google, and Lufthansa — following a $30M Mirova investment in late 2025.",
        sources: [
          {
            name: "TechCrunch",
            url: "https://techcrunch.com/2026/02/03/indias-varaha-bags-20m-to-scale-carbon-removal-from-the-global-south/",
          },
          {
            name: "ESG Today",
            url: "https://www.esgtoday.com/carbon-removal-project-developer-varaha-raises-20-million/",
          },
        ],
        related: { label: "Carbon Credits", href: "/carbon-credits" },
      },
      {
        title:
          "ProClime & Japan's Cadira to Mobilize $10M for Seven Indian Biochar Plants",
        category: "Project Finance",
        region: "India",
        summary:
          "India-based developer ProClime signed an MoU with Japan's Cadira Capital Management to mobilize an initial $10 million to build seven biochar facilities across six Indian states, converting invasive-species, agri-residue, and forest waste into carbon-removal credits, soil-amendment biochar, and bio-oil. The plants are projected to generate roughly 35,000 CDR credits annually, certified under Puro.earth and Isometric.",
        sources: [
          {
            name: "Carbon Herald",
            url: "https://carbonherald.com/proclime-and-cadira-to-mobilize-global-investment-into-india-based-biochar/",
          },
          {
            name: "ANI News",
            url: "https://aninews.in/news/business/proclime-and-cadira-partner-on-india-biochar-carbon-removal20260803182617/",
          },
        ],
        related: {
          label: "Build + Operate a Plant",
          href: "/build-operate-plant",
        },
      },
      {
        title:
          "Equilibrium & Altitude Sign 180,000-Tonne Biochar Removal Deal in India",
        category: "Offtake",
        region: "India",
        summary:
          "India-based developer Equilibrium and Swiss financier Altitude signed an eight-year offtake for roughly 180,000 tonnes of biochar carbon removal, reported at about $25 million. The agreement funds scaling of Equilibrium's Maharashtra production from ~15,000 to ~22,500 tCO₂e per year — a clear example of long-term demand underwriting new Indian plant construction.",
        sources: [
          {
            name: "EnkiAI",
            url: "https://enkiai.com/carbon-capture/equilibrium-biochar-project-india/",
          },
        ],
        related: { label: "Carbon Credits", href: "/carbon-credits" },
      },
      {
        title:
          "Japan's Green Carbon Nears First Isometric-Certified Credits from Indian Plants",
        category: "Offtake",
        region: "India",
        summary:
          "Japan's Green Carbon passed an Isometric audit for its Kapadvanj (Gujarat) industrial biochar facility — a first for a Japanese company — advancing toward credit issuance in August 2026. Four Indian plants, run with partners The Varhad Group and Excellent Enfab, are expected to supply roughly 300,000 tonnes of high-quality CDR credits over ten years.",
        sources: [
          {
            name: "Green Carbon, Inc.",
            url: "https://green-carbon.co.jp/en/engreencarbon-isometric/",
          },
        ],
        related: { label: "Carbon Credits", href: "/carbon-credits" },
      },
      {
        title: "EIB & Eni Sign €500M to Convert Sannazzaro Refinery into a Biorefinery",
        category: "Project Finance",
        region: "Italy / EU",
        summary:
          "The European Investment Bank and Eni signed a 15-year, €500 million loan to convert units of Eni's Sannazzaro refinery into a biorefinery using Ecofining technology, plus a pre-treatment plant for used cooking oils, animal fats, and agri-food waste. From 2028 it will produce roughly 550,000 tonnes a year of HVO diesel and SAF biojet — the second such EIB–Eni deal after a €500M Livorno agreement in 2025.",
        sources: [
          {
            name: "Eni",
            url: "https://www.eni.com/en-IT/media/press-release/2026/04/eib-eni-sign--500-million-financing-for-biorefinery-sannazzaro-burgondi.html",
          },
          {
            name: "Biodiesel Magazine",
            url: "https://biodieselmagazine.com/articles/eib-and-eni-sign-500-million-in-financing-for-new-biorefinery-in-sannazzaro-de-burgondi",
          },
        ],
        related: { label: "Biofuel Applications", href: "/biofuel-applications" },
      },
      {
        title: "Exomad Green & Senken Sign 105,000-Tonne Biochar Removal Deal for Aviation",
        category: "Offtake",
        region: "Bolivia",
        summary:
          "Bolivia-based Exomad Green — one of the world's largest durable-CDR suppliers — agreed to deliver 105,000 tonnes of permanent biochar carbon removal to Berlin's Senken over 2026–2028, targeting aviation buyers and bringing the two firms' total contracted volume to nearly $30 million. Exomad expects to deliver roughly 300,000 tonnes of CO₂ removal in 2026.",
        sources: [
          {
            name: "ESG Today",
            url: "https://www.esgtoday.com/exomad-green-senken-sign-105000-tonne-carbon-removal-agreement-to-target-aviation-sector/",
          },
          {
            name: "Decarbonfuse",
            url: "https://decarbonfuse.com/posts/exomad-green-and-senken-partner-on-105-000-tonne-biochar-carbon-removal-deal-for-aviation",
          },
        ],
        related: { label: "Carbon Credits", href: "/carbon-credits" },
      },
      {
        title: "CHAR Technologies to Acquire Québec Biocarbon Assets",
        category: "M&A",
        region: "Canada",
        summary:
          "Canadian biocarbon firm CHAR Technologies announced a planned acquisition of biocarbon production assets in Québec — a facility, IP, and a 62,500-tonne offtake — to expand its high-temperature pyrolysis biochar and biocoal-pellet business, part of a broader consolidation wave among North American biochar producers.",
        sources: [
          {
            name: "ACCESS Newswire",
            url: "https://www.accessnewswire.com/newsroom/en/metals-and-mining/char-tech-announces-planned-acquisition-of-biocarbon-assets-in-québec-including-6-1158238",
          },
        ],
        related: { label: "OEM Equipment", href: "/oem-equipment" },
      },
      {
        title: "BioCarbon Australia Wins AU$4.8M ARENA Grant for First Commercial Plant",
        category: "Grant/Policy",
        region: "Australia",
        summary:
          "BioCarbon Australia secured AU$4.8 million from the Australian Renewable Energy Agency (ARENA) to move from pilot to commercial scale at Bulahdelah, NSW, producing biochar for steelmaking after successful 3,000-tonne steel trials.",
        sources: [
          {
            name: "Bioenergy International",
            url: "https://bioenergyinternational.com/biocarbon-secures-au4-8m-arena-support-for-first-commercial-biochar-project/",
          },
        ],
        related: { label: "Biochar Applications", href: "/biochar-applications" },
      },
      {
        title: "Edinburgh's Carbogenics Closes $3M Investment-Plus-Grant Round",
        category: "Funding",
        region: "United Kingdom",
        summary:
          "Carbogenics raised $3 million in combined equity and grant funding to scale its CreChar biochar product and expand into the US and UK. Backers included Dangerous Ventures, Green Angel Ventures, Scottish Enterprise, and the University of Edinburgh's venture fund, with grants from Innovate UK and New Mexico state bodies.",
        sources: [
          {
            name: "Bioenergy News",
            url: "https://www.bioenergy-news.com/news/edinburgh-biochar-firm-carbogenics-secures-3-million-to-scale-carbon-removal-technology/",
          },
        ],
        related: { label: "Biochar", href: "/biochar" },
      },
      {
        title: "Oikocredit Lends NetZero $2.5M for Brazil Biochar Expansion",
        category: "Project Finance",
        region: "Brazil",
        summary:
          "Impact investor Oikocredit made a first disbursement of $2.5 million to biochar producer NetZero to scale mid-size production in rural Brazil, which dominates Latin American biochar volume aided by its Bio-Inputs Law incentives. NetZero previously raised roughly $19.5M from STOA in 2024.",
        sources: [
          {
            name: "Oikocredit",
            url: "https://www.oikocredit.org/news/oikocredit-partners-with-biochar-producer-netzero-to-scale-operations-in-brazil/",
          },
          {
            name: "QCIntel",
            url: "https://www.qcintel.com/carbon/article/non-profit-to-lend-netzero-2-5m-for-brazil-biochar-projects-25397.html",
          },
        ],
        related: {
          label: "Build + Operate a Plant",
          href: "/build-operate-plant",
        },
      },
      {
        title: "Uganda Launches $12M 'Nile Char' — Africa's First Industrial Biochar Plant",
        category: "Project Finance",
        region: "Uganda",
        summary:
          "A $12 million project is backing Africa's first large-scale industrial biochar carbon-removal and biochar-fertilizer facility, funded by Stack Carbon Investments (Uganda), Jiaxing Tongao (China), TerraCapX (Norway), and Greenchar Climate Solutions (Singapore). Capacity is about 30 tonnes of biochar per day, processing roughly 10 million tonnes of agri-waste over 20 years. Operations are targeted for Q3 2026.",
        sources: [
          {
            name: "Nordic Climate Finance Summit",
            url: "https://www.ncfsummit.com/news/uganda-to-launch-first-ever-industrial-biochar-carbon-removal-and-biochar-based-fertilizer-production-project",
          },
        ],
        related: { label: "Build + Operate a Plant", href: "/build-operate-plant" },
      },
      {
        title: "Canada Commits C$7M to Greater Victoria Biochar Project",
        category: "Grant/Policy",
        region: "Canada",
        summary:
          "The Capital Regional District received C$7 million from a federal infrastructure fund to introduce biochar/carbonization technology — proposed for the Hartland Landfill — converting biosolids into stable, carbon-sequestering biochar. Detailed plans and proponent selection go to the board in 2027.",
        sources: [
          {
            name: "Victoria News",
            url: "https://vicnews.com/2026/07/30/feds-announce-7m-in-funding-for-biochar-project-in-greater-victoria/",
          },
        ],
        related: { label: "Biochar Applications", href: "/biochar-applications" },
      },
      {
        title: "EU Adopts First CRCF Biochar Certification Methodology",
        category: "Grant/Policy",
        region: "European Union",
        summary:
          "The European Commission adopted the first delegated act under the Carbon Removal Certification Framework (CRCF), establishing methodologies for permanent removals including biochar carbon capture. Commission analysis estimates €2.4–6.7 billion in purchases may be needed over 2025–2030 to hit a 5 Mt/yr industrial-removals target, with the first CRCF units expected in late 2026/2027 — a major demand signal for biochar financing.",
        sources: [
          {
            name: "European Commission",
            url: "https://climate.ec.europa.eu/news-other-reads/news/eu-sets-worlds-first-voluntary-standard-permanent-carbon-removals-2026-02-03_en",
          },
          {
            name: "Carbon Credits",
            url: "https://carboncredits.com/eu-sets-global-benchmark-for-permanent-carbon-removals-and-carbon-farming/",
          },
        ],
        related: { label: "Carbon Credits", href: "/carbon-credits" },
      },
    ],
  },
  {
    date: "2026-04-07",
    items: [
      {
        title: "ICVCM Approves Three Biochar Carbon Credit Methodologies",
        category: "Carbon Markets",
        summary:
          "The Integrity Council for the Voluntary Carbon Market approved three biochar methodologies at once — CAR's U.S. & Canada Biochar (V1.0), Isometric's Biochar Production and Storage (V1.0), and Verra's VM0044 (V1.2). Together they are expected to bring roughly 750,000 biochar carbon credits to market in 2026, with about 40% already pre-sold — the credibility signal institutional buyers had been waiting for.",
        sources: [
          {
            name: "Carbon Herald",
            url: "https://carbonherald.com/icvcm-approves-new-biochar-and-ifm-methodologies/",
          },
          {
            name: "Sylvera",
            url: "https://www.sylvera.com/blog/biochar-carbon-credits",
          },
        ],
        related: { label: "Carbon Credits", href: "/carbon-credits" },
      },
      {
        title: "Biochar Carbon Credit Prices Reach $164/ton",
        category: "Carbon Markets",
        summary:
          "Average biochar credit pricing hit $164/tonne in 2025, up 25% from $131 in 2023. Microsoft purchased 129,000 tonnes in a single quarter, and biochar carbon removal accounted for 89% of durable CDR deliveries in Q2 2025. Analysts caution that a widening quality gap — driven by lifecycle accounting and feedstock transparency — will increasingly separate premium credits from the rest.",
        sources: [
          {
            name: "Sylvera",
            url: "https://www.sylvera.com/blog/biochar-carbon-credits",
          },
          {
            name: "Regreener",
            url: "https://www.regreener.earth/blog/the-5-best-biochar-carbon-credit-and-offset-projects-of-2026",
          },
        ],
        related: { label: "Carbon Credits", href: "/carbon-credits" },
      },
      {
        title: "Holcim Pours Net-Zero Concrete at Canary Wharf Using Biochar",
        category: "Construction",
        summary:
          "Holcim UK and Canary Wharf Group produced concrete with a projected -14 kgCO₂e/m³ footprint by embedding biochar made from coffee grounds and coppiced wood. After a 2025 test slab, they poured two-metre-deep raft slabs on a live London development — full-scale proof that biochar concrete works well outside the lab.",
        sources: [
          {
            name: "Holcim",
            url: "https://www.holcim.co.uk/news-and-resources/press-releases/Net-Zero-Concrete-Achievement",
          },
          {
            name: "ESG News",
            url: "https://esgnews.com/holcim-uk-delivers-net-zero-concrete-using-carbon-storing-biochar/",
          },
          {
            name: "World Cement",
            url: "https://www.worldcement.com/europe-cis/12032026/holcim-and-canary-wharf-group-produce-carbon-storing-concrete/",
          },
        ],
        related: {
          label: "Biochar Applications",
          href: "/biochar-applications",
        },
      },
      {
        title: "Global Biochar Market Nears $1 Billion",
        category: "Market",
        summary:
          "The global biochar market reached roughly $860M in 2025 and is projected at $970M for 2026, growing ~13% annually toward $2.7–3.5B by the mid-2030s. Supply is the constraint: 62% of high-quality 2025 capacity was already locked into contracts, with another 28% secured through 2026. The EU's Carbon Removal Certification Framework goes operational in 2026.",
        sources: [
          {
            name: "Future Markets",
            url: "https://www.futuremarketsinc.com/the-global-biochar-market-2026-2036/",
          },
          {
            name: "Precedence Research",
            url: "https://www.precedenceresearch.com/biochar-market",
          },
          {
            name: "Inkwood Research",
            url: "https://www.inkwoodresearch.com/reports/north-america-biochar-market-size/",
          },
        ],
        related: {
          label: "Build + Operate a Plant",
          href: "/build-operate-plant",
        },
      },
      {
        title: "USDA EQIP Now Funds Biochar Application (Practice 336)",
        category: "Policy",
        summary:
          "USDA NRCS pays for biochar application under Conservation Practice Standard 336, with rates varying by state — Delaware lists $201.87 per cubic yard, and the Delta region estimates about $1,700 per acre for full application. USDA invested $120M across six biochar initiatives in late 2024. Applications are accepted year-round with state-specific ranking deadlines.",
        sources: [
          {
            name: "US Biochar Initiative",
            url: "https://biochar-us.org/usda-nrcs-biochar-funding-quick-guide",
          },
          {
            name: "NRCS EQIP",
            url: "https://www.nrcs.usda.gov/programs-initiatives/environmental-quality-incentives-program",
          },
        ],
        related: {
          label: "Buy Biochar & Biofuel",
          href: "/buy-biochar-biofuel",
        },
      },
      {
        title: "Minnesota Advances Biochar in Production and Stormwater",
        category: "Stormwater",
        summary:
          "Scott County, MN approved a facility slated to produce 8,600 tons of biochar per year, while the state pollution control agency is updating its stormwater manual with new biochar guidance. One Minnesota biochar-sand stormwater basin is estimated to remove 22,000 lbs of sediment, 202 lbs of nitrogen, and 50 lbs of phosphorus annually.",
        sources: [
          {
            name: "MPCA Stormwater Manual",
            url: "https://stormwater.pca.state.mn.us/?title=Biochar_and_applications_of_biochar_in_stormwater_management",
          },
          {
            name: "MPCA Biochar Production",
            url: "https://www.pca.state.mn.us/business-with-us/biochar-production",
          },
        ],
        related: {
          label: "Biochar Applications",
          href: "/biochar-applications",
        },
      },
      {
        title: "Sustainable Aviation Fuel: Biomass Pathways on the Horizon",
        category: "Biofuels",
        summary:
          "SAF production reached 1.3 billion liters in 2024 — about 0.3% of global jet fuel — still dominated (95%+) by hydroprocessed fats and oils. The DOE's SAF Grand Challenge targets 3 billion gallons by 2030. Lignocellulosic routes from woody biomass and residues are the next frontier, though cost ($1.85–$6/gallon) and feedstock supply remain the bottleneck.",
        sources: [
          {
            name: "U.S. DOE",
            url: "https://www.energy.gov/eere/bioenergy/sustainable-aviation-fuels",
          },
          {
            name: "Seed World",
            url: "https://www.seedworld.com/us/2026/02/09/from-seed-to-sky-the-demand-for-sustainable-aviation-fuel/",
          },
        ],
        related: {
          label: "Biofuel Applications",
          href: "/biofuel-applications",
        },
      },
    ],
  },
];

const categoryColors: Record<string, string> = {
  "Carbon Markets": "bg-accent/10 text-accent",
  Construction: "bg-primary/10 text-primary",
  Market: "bg-primary/10 text-primary",
  Policy: "bg-accent/10 text-accent",
  Stormwater: "bg-primary/10 text-primary",
  Biofuels: "bg-accent/10 text-accent",
  Funding: "bg-accent/10 text-accent",
  "Project Finance": "bg-accent/10 text-accent",
  Offtake: "bg-primary/10 text-primary",
  "M&A": "bg-primary/10 text-primary",
  "Grant/Policy": "bg-accent/10 text-accent",
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsPage() {
  const latest = digests[0]?.date;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3">
              Industry News
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              What&apos;s Moving in{" "}
              <span className="text-accent-light">Biochar &amp; Pyrolysis</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              A curated read on the funding, deals, and developments that
              actually matter across the global biochar, carbon credit, and
              biomass energy markets — from India to the EU to the Americas,
              with sources so you can dig in yourself.
            </p>
            {latest && (
              <p className="mt-4 text-sm text-white/60">
                Last updated {formatDate(latest)}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Digests */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {digests.map((digest) => (
            <div key={digest.date} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-text">
                  {digest.title ?? "News Digest"}
                </h2>
                <span className="text-sm font-medium text-text-lighter">
                  <time dateTime={digest.date}>{formatDate(digest.date)}</time>
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {digest.items.map((item) => (
                  <article
                    key={item.title}
                    className="flex flex-col bg-surface rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                          categoryColors[item.category] ||
                          "bg-primary/10 text-primary"
                        }`}
                      >
                        {item.category}
                      </span>
                      {item.region && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-border/60 text-text-light">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {item.region}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-text leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-text-light leading-relaxed flex-1">
                      {item.summary}
                    </p>

                    <div className="mt-4 pt-4 border-t border-border flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-text-lighter">
                        Sources
                      </span>
                      {item.sources.map((source) => (
                        <a
                          key={source.url}
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
                        >
                          {source.name}
                        </a>
                      ))}
                    </div>

                    {item.related && (
                      <Link
                        href={item.related.href}
                        className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                      >
                        Learn more: {item.related.label}
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Want the Deeper Analysis?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Our blog breaks down what these developments mean for producers,
            developers, and investors in the biomass economy.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center mt-8 px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
          >
            Read the Blog
          </Link>
        </div>
      </section>
    </>
  );
}

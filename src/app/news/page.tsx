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
  sources: NewsSource[];
  related?: { label: string; href: string };
};

type NewsDigest = {
  date: string; // ISO yyyy-mm-dd
  items: NewsItem[];
};

const digests: NewsDigest[] = [
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
              A curated read on the developments that actually matter across the
              biochar, carbon credit, and biomass energy markets — with sources,
              so you can dig in yourself.
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
                  News Digest
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
                    <div className="mb-3">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                          categoryColors[item.category] ||
                          "bg-primary/10 text-primary"
                        }`}
                      >
                        {item.category}
                      </span>
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

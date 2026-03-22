import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biomass Energy & Pyrolysis Blog | iNBIO",
  description:
    "Read the latest articles on fast pyrolysis, biochar science, biofuel innovation, and sustainable biomass energy from International BioRefineries experts.",
};

const blogPosts = [
  {
    slug: "what-is-fast-pyrolysis",
    title: "What Is Fast Pyrolysis? How We Actually Turn Biomass into Fuel",
    excerpt:
      "Fast pyrolysis is counterintuitive until you see it run. You take organic waste, heat it extremely fast in a zero-oxygen environment, and in under two seconds it breaks apart into three products.",
    date: "2026-03-15",
    category: "Technology",
  },
  {
    slug: "biochar-vs-compost",
    title:
      "Biochar vs. Compost: What We've Learned Producing One and Recommending Both",
    excerpt:
      "Biochar and compost do fundamentally different things in soil. Here's our actual assessment — what each does well, where each falls short, and why we recommend using them together.",
    date: "2026-03-14",
    category: "Agriculture",
  },
  {
    slug: "biochar-carbon-credits",
    title:
      "How Biochar Carbon Credits Work: A Guide for Landowners and Producers",
    excerpt:
      "A mid-size pyrolysis operation producing 500 tons of biochar a year could generate $180,000 to $210,000 in annual carbon credit revenue. Here's how the path from production to revenue actually works.",
    date: "2026-03-13",
    category: "Carbon Markets",
  },
  {
    slug: "bio-oil-applications",
    title: "5 Industrial Applications of Bio-Oil You Should Know",
    excerpt:
      "Bio-oil keeps showing up as the answer for operations with a fossil fuel dependency and a waste stream to manage. Here are the five applications with the most traction.",
    date: "2026-03-12",
    category: "Biofuels",
  },
  {
    slug: "sustainable-aviation-fuel",
    title:
      "Sustainable Aviation Fuel from Biomass Pyrolysis: Where iNBIO Fits In",
    excerpt:
      "The highest-value pathway for pyrolysis bio-oil is upgrading it into drop-in jet fuel. The bottleneck isn't refining technology — it's feedstock.",
    date: "2026-03-11",
    category: "Biofuels",
  },
  {
    slug: "biochar-stormwater",
    title:
      "Biochar for Stormwater Management: A Supplier's Practical Guide",
    excerpt:
      "Stormwater engineers have been calling us more in the past two years than the previous five combined. Biochar is proving itself as a filter medium across the country.",
    date: "2026-03-10",
    category: "Water Management",
  },
  {
    slug: "economics-pyrolysis",
    title: "The Economics of Small-Scale Pyrolysis Plants",
    excerpt:
      "How much does it actually cost? Capital costs, revenue streams, ROI timelines — honest numbers for modular pyrolysis systems in the 5-75 TPD range.",
    date: "2026-03-09",
    category: "Business",
  },
  {
    slug: "usda-epa-incentives-2026",
    title: "USDA and EPA Incentives for Biochar Production in 2026",
    excerpt:
      "Federal programs that can offset pyrolysis and biochar project costs — REAP grants, EQIP, CSP, the Renewable Fuel Standard, and carbon credits explained.",
    date: "2026-03-08",
    category: "Policy",
  },
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const categoryColors: Record<string, string> = {
  Technology: "bg-primary/10 text-primary",
  Agriculture: "bg-green-100 text-green-800",
  "Carbon Markets": "bg-amber-100 text-amber-800",
  Biofuels: "bg-accent/10 text-accent",
  "Water Management": "bg-blue-100 text-blue-800",
  Business: "bg-purple-100 text-purple-800",
  Policy: "bg-rose-100 text-rose-800",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3">
              Blog
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Biomass Energy &amp;{" "}
              <span className="text-accent-light">Pyrolysis Blog</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              Practical insights on fast pyrolysis technology, biochar science,
              biofuel applications, carbon markets, and the business of
              biomass-to-energy — from the team at International BioRefineries.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col bg-surface rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Card image placeholder */}
                <div className="h-48 bg-surface-dark flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-text-lighter"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  {/* Category badge */}
                  <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        categoryColors[post.category] ||
                        "bg-primary/10 text-primary"
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-text leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-3 text-sm text-text-light leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <div className="text-xs text-text-lighter">
                      <span className="font-medium text-text-light">
                        Raj Kathuria
                      </span>
                      <span className="mx-2">&middot;</span>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                    >
                      Read more
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
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Have a Biomass Question?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Whether you are exploring pyrolysis for the first time or evaluating
            a specific feedstock, our team is ready to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

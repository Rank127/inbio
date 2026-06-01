import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investor Relations — iNBIO",
  description:
    "International BioRefineries (iNBIO) develops modular fast-pyrolysis systems that convert biomass waste into bio-oil, biochar, and renewable energy. Investor relations overview.",
};

const exploreCards = [
  {
    title: "Our Technology",
    description:
      "How fast pyrolysis converts forestry and agricultural waste into bio-oil, biochar, and syngas.",
    href: "/our-technology",
  },
  {
    title: "Biochar",
    description:
      "Carbon-rich, stable biochar for soil amendment, filtration, and durable carbon storage.",
    href: "/biochar",
  },
  {
    title: "Biofuels",
    description:
      "Bio-oil and renewable fuel pathways produced from waste biomass feedstock.",
    href: "/biofuels",
  },
  {
    title: "About iNBIO",
    description:
      "The team and patents behind International BioRefineries, based in Maryland.",
    href: "/about",
  },
];

export default function InvestPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3">
              Investor Relations
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Building the Future of{" "}
              <span className="text-accent-light">Biomass Conversion</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              International BioRefineries (iNBIO) develops modular fast-pyrolysis systems that
              convert forestry and agricultural waste into bio-oil, biochar, and renewable energy
              products. Our technology is protected by issued U.S. and Canadian patents, with a
              pilot plant in commissioning on Maryland&apos;s Eastern Shore.
            </p>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Learn More About iNBIO
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              Explore our technology, our products, and the team building it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {exploreCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="flex flex-col p-8 bg-surface rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-xl font-bold text-text">{card.title}</h3>
                <p className="mt-3 text-sm text-text-light leading-relaxed">
                  {card.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-primary">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Investor inquiries — non-offer */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text">
            Investor Inquiries
          </h2>
          <p className="mt-4 text-text-light leading-relaxed">
            iNBIO conducts private financings from time to time. We are not making a public
            offering of securities. If you have an existing relationship with iNBIO and would like
            to discuss the company, please get in touch.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-10 text-xs text-text-lighter leading-relaxed">
            Nothing on this page is an offer to sell or a solicitation of an offer to buy any
            security. Any securities offering by iNBIO is private and made only to persons with whom
            the company has a pre-existing, substantive relationship, solely through official
            offering documents. Investing in early-stage companies involves significant risk,
            including the possible loss of your entire investment.
          </p>
        </div>
      </section>
    </>
  );
}

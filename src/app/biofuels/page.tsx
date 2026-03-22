import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Renewable Biofuels from Biomass Waste",
  description:
    "iNBIO produces renewable biofuels from biomass waste through fast pyrolysis.",
};

const bioOilAdvantages = [
  "High volumetric energy density compared to raw biomass, making it easier and more economical to store and transport",
  "Renewable and carbon-neutral when produced from sustainably managed feedstocks",
  "Compatible with existing combustion infrastructure for industrial boilers, furnaces, and kilns with minor modifications",
  "Upgradeable to drop-in fuels through catalytic hydrotreatment, producing renewable diesel, jet fuel, and marine fuel",
];

const applicationAreas = [
  {
    title: "Industrial Heat & Steam",
    description:
      "Bio-oil can directly replace heavy fuel oil and natural gas in industrial boilers, kilns, and dryers. Manufacturers in food processing, lumber drying, and materials production can switch to biomass fuel without overhauling existing thermal systems.",
  },
  {
    title: "Combined Heat & Power (CHP)",
    description:
      "District energy systems and institutional campuses can use bio-oil to generate both electricity and usable heat from a single fuel source. CHP configurations maximize energy efficiency and reduce dependence on grid electricity and fossil-fueled heating.",
  },
  {
    title: "Transportation Fuels",
    description:
      "When upgraded through catalytic processing, bio-oil becomes a feedstock for sustainable aviation fuel (SAF), renewable marine fuel, rail diesel, and on-road diesel blends -- meeting existing engine specifications and supporting decarbonization mandates.",
  },
  {
    title: "Backup Power & Microgrids",
    description:
      "Bio-oil-fueled generators provide reliable backup power for critical facilities and remote operations. In microgrid configurations, pyrolysis biofuel ensures energy resilience independent of centralized grid infrastructure.",
  },
  {
    title: "Infrastructure & Materials",
    description:
      "Bio-oil shows strong potential as an asphalt binder modifier, improving pavement performance while incorporating a renewable material into road construction -- creating additional value from the same pyrolysis process.",
  },
];

const workingSteps = [
  {
    number: "01",
    title: "Site Assessment & Feedstock Analysis",
    description:
      "We evaluate your available biomass waste streams, energy requirements, and infrastructure to determine the optimal system configuration and expected fuel output.",
  },
  {
    number: "02",
    title: "System Design & Specification",
    description:
      "Our engineering team designs a tailored pyrolysis solution covering reactor sizing, fuel handling, storage, and integration with your existing thermal or power systems.",
  },
  {
    number: "03",
    title: "Installation, Commissioning & Ongoing Support",
    description:
      "We manage the full deployment process from construction through startup, then provide ongoing operational support, performance monitoring, and maintenance to ensure sustained fuel quality and system uptime.",
  },
];

export default function BiofuelsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3">
              Products
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Renewable{" "}
              <span className="text-accent-light">Biofuels</span> from Biomass
              Waste
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              iNBIO transforms wood residues, agricultural waste, and other
              organic feedstocks into bio-oil, biochar, and syngas -- displacing
              fossil fuels across a range of industrial and commercial
              applications.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote-products"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/biofuel-applications"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors"
              >
                View Applications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Bio-Oil */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text">
                What Is Bio-Oil?
              </h2>
              <p className="mt-4 text-text-light leading-relaxed">
                Bio-oil is a dark, dense liquid produced through the rapid
                thermal decomposition of biomass in the absence of oxygen.
                Biomass is heated to approximately 500&deg;C in seconds,
                breaking down its cellulose, hemicellulose, and lignin into
                condensable vapors that are rapidly cooled into a pourable
                liquid fuel.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                Bio-oil typically contains 50--70% of the energy density of
                conventional heating oil and consists of a complex mixture of
                oxygenated hydrocarbons and water. While its composition differs
                from petroleum-based fuels, bio-oil offers several practical
                advantages for industrial and commercial energy users.
              </p>
            </div>

            <div className="bg-surface-dark rounded-xl border border-border p-8">
              <h3 className="text-lg font-semibold text-text mb-6">
                Properties &amp; Performance
              </h3>
              <ul className="space-y-4">
                {bioOilAdvantages.map((adv) => (
                  <li key={adv} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-text-light">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-accent-light">
                50--70%
              </p>
              <p className="mt-1 text-sm text-white/70">
                Energy Density vs. Heating Oil
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-accent-light">
                5
              </p>
              <p className="mt-1 text-sm text-white/70">
                Application Sectors
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-accent-light">
                500&deg;C
              </p>
              <p className="mt-1 text-sm text-white/70">Pyrolysis Temp</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-accent-light">
                Net &minus;
              </p>
              <p className="mt-1 text-sm text-white/70">Carbon Outcome</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Biofuel Applications */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
            Key Biofuel Applications
          </h2>
          <p className="mt-4 text-lg text-text-light text-center max-w-2xl mx-auto">
            Bio-oil and our other pyrolysis biofuels serve five major market
            segments, each offering a practical, lower-carbon alternative to
            fossil fuels.
          </p>

          <div className="mt-12 space-y-6">
            {applicationAreas.map((app, idx) => (
              <div
                key={app.title}
                className="bg-white rounded-xl border border-border p-6 sm:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <span className="hidden sm:block text-4xl font-black text-primary/15 leading-none shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {app.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-light leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/biofuel-applications"
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              View detailed application profiles and technical specifications
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
      </section>

      {/* Carbon Reduction Benefits */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
              Carbon Reduction Benefits
            </h2>

            <div className="mt-10 space-y-6">
              <div className="bg-surface rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary">
                  Biogenic Carbon Cycle
                </h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">
                  Because the carbon in bio-oil originates from recently grown
                  biomass -- not ancient geological deposits -- burning it
                  returns carbon to the atmosphere as part of the natural carbon
                  cycle rather than adding new carbon to it.
                </p>
              </div>

              <div className="bg-surface rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary">
                  Carbon-Negative When Biochar Is Sequestered
                </h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">
                  When biochar is sequestered in soils rather than combusted, the
                  overall process achieves carbon-negative outcomes: more
                  CO&#8322; is locked away than is released during fuel
                  production and use. This circular economy model transforms
                  waste into stable carbon storage and clean energy
                  simultaneously.
                </p>
              </div>

              <div className="bg-surface rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary">
                  Scope 1 &amp; 2 Reduction Pathway
                </h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">
                  For organizations tracking Scope 1 and Scope 2 emissions,
                  switching to iNBIO biofuels provides a quantifiable pathway
                  toward reduction targets, supported by lifecycle analysis data
                  and third-party verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working With iNBIO */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
            Working With iNBIO
          </h2>
          <p className="mt-4 text-lg text-text-light text-center max-w-2xl mx-auto">
            We partner with industrial operators, municipalities, and energy
            developers to deploy pyrolysis biofuel solutions matched to their
            specific requirements.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {workingSteps.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col">
                {idx < workingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-4 z-0" />
                )}
                <span className="text-5xl font-black text-primary/15 leading-none mb-3">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-text">{step.title}</h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Replace Fossil Fuels with Renewable Biofuels
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Explore how our products fit your operations, or connect with our
            team to discuss your project.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/biofuel-applications"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
            >
              Explore Biofuel Applications
            </Link>
            <Link
              href="/quote-products"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

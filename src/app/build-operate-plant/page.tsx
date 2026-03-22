import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Build + Operate a Pyrolysis Plant",
  description:
    "iNBIO designs, builds, and operates modular fast pyrolysis plants (5-75 TPD) at your site. Turn biomass waste into bio-oil, biochar, and syngas with full-service, turnkey, or build-train-transfer engagement models.",
};

const steps = [
  {
    number: "01",
    title: "Feedstock Assessment",
    description:
      "We analyze your biomass waste stream -- species, moisture, particle size, contaminants, and seasonal availability -- to model yields and design the optimal system configuration.",
  },
  {
    number: "02",
    title: "System Design",
    description:
      "Our engineers size the reactor, condensation train, and balance-of-plant to your throughput target, site constraints, and end-product requirements. You receive a full engineering package with P&IDs, layouts, and financial projections.",
  },
  {
    number: "03",
    title: "Build & Commission",
    description:
      "Factory-fabricated modules arrive at your site ready for interconnection. Our field team handles installation, piping tie-ins, controls integration, and commissioning -- through first product.",
  },
  {
    number: "04",
    title: "Operate & Optimize",
    description:
      "Depending on your engagement model, our operators run the plant day-to-day or we train your crew. Either way, we provide ongoing process optimization, preventive maintenance, and yield improvement.",
  },
];

const engagementModels = [
  {
    title: "Full-Service",
    subtitle: "We build it. We run it.",
    points: [
      "iNBIO designs, builds, and operates the plant at your location",
      "You supply feedstock; we handle everything else",
      "Revenue share or tolling-fee structure",
      "Carbon credit documentation included",
      "Lowest barrier to entry -- no operator hiring required",
    ],
  },
  {
    title: "Turnkey",
    subtitle: "We build it. You run it.",
    points: [
      "iNBIO delivers a fully commissioned plant",
      "Your team operates after handover",
      "Comprehensive operator training program included",
      "Optional maintenance & spare parts contract",
      "Full ownership of output and carbon credits",
    ],
  },
  {
    title: "Build + Train + Transfer",
    subtitle: "We build it, run it together, then hand it over.",
    points: [
      "iNBIO operates the plant during a 6--12 month transition period",
      "Side-by-side training with your operators",
      "Gradual knowledge transfer and SOPs",
      "We step back when your team is fully certified",
      "Ongoing remote monitoring and support available",
    ],
  },
];

export default function BuildOperatePlantPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3">
              EPC Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Build + Operate a{" "}
              <span className="text-accent-light">Pyrolysis Plant</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              We design, fabricate, install, and -- if you want -- operate a
              fast pyrolysis system at your site. Modular plants from 5 to 75
              TPD that turn your biomass waste into revenue-generating bio-oil,
              biochar, and syngas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote-epc"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
              >
                Request a Proposal
              </Link>
              <Link
                href="/our-technology"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors"
              >
                Our Technology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-text-light text-center max-w-2xl mx-auto">
            From initial feasibility through daily production, here is the path
            from biomass waste to operating plant.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col">
                {/* Connector line (hidden on the last card) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4 z-0" />
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

      {/* Technology Highlights */}
      <section className="py-12 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-accent-light">
                5--75
              </p>
              <p className="mt-1 text-sm text-white/70">TPD Capacity Range</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-accent-light">
                BFB
              </p>
              <p className="mt-1 text-sm text-white/70">
                Bubbling Fluidized Bed
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-accent-light">
                &lt; 2 s
              </p>
              <p className="mt-1 text-sm text-white/70">
                Vapor Residence Time
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-accent-light">
                0
              </p>
              <p className="mt-1 text-sm text-white/70">
                External Fuel Required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
            Choose Your Engagement Model
          </h2>
          <p className="mt-4 text-lg text-text-light text-center max-w-2xl mx-auto">
            Every organization has different operational capabilities and risk
            appetites. Pick the model that fits yours.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="flex flex-col bg-white rounded-xl border border-border p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary">
                  {model.title}
                </h3>
                <p className="text-sm text-text-light mt-1 italic">
                  {model.subtitle}
                </p>
                <ul className="mt-6 space-y-3 flex-1">
                  {model.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
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
                      <span className="text-sm text-text-light">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carbon Credits + Technology Links */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-text">
                Carbon Credit Documentation
              </h2>
              <p className="mt-4 text-text-light leading-relaxed">
                Biochar is one of the most durable carbon removal pathways
                available today. We help you document feedstock sourcing,
                pyrolysis conditions, and biochar stability so you can register
                credits under Puro.earth, Verra, or Gold Standard protocols.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                Our plants are instrumented to log the data these registries
                require -- mass balances, operating temperatures, and biochar
                characterization -- automatically.
              </p>
            </div>
            <div className="bg-surface-dark rounded-xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-text mb-4">
                Technology Deep-Dive
              </h3>
              <p className="text-sm text-text-light mb-6">
                Our bubbling fluidized bed reactor is thermally self-sufficient:
                recycled syngas provides all process heat, eliminating external
                fuel costs. Read more about the platform and review detailed
                specifications.
              </p>
              <div className="space-y-3">
                <Link
                  href="/our-technology"
                  className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  <svg
                    className="w-4 h-4"
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
                  Technology overview
                </Link>
                <Link
                  href="/fast-pyrolysis-specs"
                  className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  <svg
                    className="w-4 h-4"
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
                  Fast pyrolysis system specifications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let&apos;s Scope Your Plant
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Share your feedstock details, throughput targets, and site
            constraints. We&apos;ll come back with a preliminary design,
            projected yields, and a budgetary estimate.
          </p>
          <Link
            href="/quote-epc"
            className="inline-flex items-center justify-center mt-8 px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
          >
            Request a Proposal
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineered Biochar Products & Carbon Credits",
  description:
    "iNBIO produces engineered biochar with tunable properties via fast pyrolysis. Certified to IBI/EBC standards.",
};

const tunableProperties = [
  {
    property: "Surface Area",
    detail:
      "From moderate (<100 m\u00B2/g) to very high (>400 m\u00B2/g), depending on adsorption requirements",
  },
  {
    property: "pH",
    detail: "Tailored to match soil chemistry or process needs",
  },
  {
    property: "Ash Content",
    detail: "Managed through feedstock selection and process control",
  },
  {
    property: "Particle Size Distribution",
    detail: "Screened and graded for specific end uses",
  },
  {
    property: "Fixed Carbon Content",
    detail: "Optimized for carbon sequestration and structural applications",
  },
];

const applications = [
  {
    title: "Agriculture & Soil Amendment",
    description:
      "Improves water retention, nutrient availability, and microbial habitat in depleted or sandy soils. A proven tool for long-term soil health.",
  },
  {
    title: "Stormwater Filtration",
    description:
      "High-surface-area biochar adsorbs heavy metals, hydrocarbons, and nutrients from stormwater runoff, meeting municipal and state water quality requirements.",
  },
  {
    title: "Environmental Remediation",
    description:
      "Binds contaminants in soil and groundwater, offering a cost-effective alternative to activated carbon in many remediation scenarios.",
  },
  {
    title: "Concrete & Asphalt Admixture",
    description:
      "Enhances strength, reduces permeability, and lowers the carbon footprint of cementitious and asphalt mixtures.",
  },
  {
    title: "Composting Enhancement",
    description:
      "Reduces odor and nutrient loss during composting while improving the quality and consistency of finished compost.",
  },
  {
    title: "Livestock Bedding",
    description:
      "Absorbs moisture and ammonia, improving animal welfare and producing nutrient-enriched biochar for subsequent soil application.",
  },
  {
    title: "Carbon Removal Credits (BCR)",
    description:
      "Qualifies as a durable carbon removal pathway, generating verifiable carbon credits for organizations with net-zero commitments.",
  },
];

const testingParameters = [
  "Proximate & ultimate analysis",
  "Surface area (BET method)",
  "pH & electrical conductivity",
  "Heavy metals screening",
  "PAH content",
  "Particle size distribution",
];

export default function BiocharPage() {
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
              Engineered{" "}
              <span className="text-accent-light">Biochar</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              A carbon-rich solid produced through fast pyrolysis, manufactured
              specifically for beneficial use -- improving soil health, filtering
              stormwater, strengthening building materials, and permanently
              sequestering atmospheric carbon.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote-products"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/biochar-applications"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors"
              >
                Explore Applications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              What Makes Our Biochar Different
            </h2>
            <p className="mt-6 text-text-light leading-relaxed">
              Commodity biochar produced in open kilns or uncontrolled burns
              varies widely in quality, contamination levels, and performance.
              iNBIO&apos;s engineered biochar is a precision-manufactured product
              with documented, repeatable characteristics -- produced at our
              facility in Salisbury, Maryland, using fast pyrolysis of
              sustainably sourced biomass.
            </p>
          </div>
        </div>
      </section>

      {/* Tunable Properties */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-text">
                Tunable Properties
              </h2>
              <p className="mt-4 text-text-light leading-relaxed">
                By adjusting pyrolysis temperature, residence time, and feedstock
                selection, we control the properties that matter most for your
                application. Whether you need a high-surface-area biochar for
                filtration or a pH-balanced amendment for agricultural soils,
                iNBIO can deliver a product built to your specifications.
              </p>
            </div>
            <div className="space-y-4">
              {tunableProperties.map((item) => (
                <div
                  key={item.property}
                  className="bg-white rounded-xl border border-border p-5 flex items-start gap-4"
                >
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
                  <div>
                    <h3 className="text-sm font-bold text-text">
                      {item.property}
                    </h3>
                    <p className="mt-1 text-sm text-text-light">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consistent Quality + Standards */}
      <section className="py-12 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold text-white">
                Consistent Quality
              </h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                Our fast pyrolysis system operates under tightly controlled
                conditions, producing biochar with batch-to-batch consistency
                that commodity suppliers cannot match. Every production run is
                monitored and documented.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Standards Compliance
              </h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                Tested and characterized according to ASTM, ISO, the
                International Biochar Initiative (IBI) Biochar Standards, and
                the European Biochar Certificate (EBC). Full analytical data
                with every shipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Applications */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
            Key Applications
          </h2>
          <p className="mt-4 text-lg text-text-light text-center max-w-2xl mx-auto">
            Engineered biochar is used across a growing range of industries.
            iNBIO products are designed to meet the specific performance
            requirements of each application.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <div
                key={app.title}
                className="flex flex-col bg-surface rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-primary">{app.title}</h3>
                <p className="mt-3 text-sm text-text-light leading-relaxed flex-1">
                  {app.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/biochar-applications"
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              Explore detailed biochar applications
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

      {/* Carbon Credits */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text">
                Biochar &amp; Carbon Credits
              </h2>
              <p className="mt-4 text-text-light leading-relaxed">
                Biochar is one of the few carbon removal technologies recognized
                for its permanence. When biomass decomposes naturally, its stored
                carbon returns to the atmosphere within years. Converting that
                biomass into biochar locks the carbon into a highly stable
                aromatic structure that persists in soil for hundreds to
                thousands of years.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                Each ton of biochar applied to soil represents approximately 2.5
                to 3 tons of CO&#8322; permanently removed from the carbon
                cycle.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border p-8">
              <h3 className="text-lg font-semibold text-text mb-4">
                BCR Credit Market
              </h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">
                The market for biochar carbon removal (BCR) credits is expanding
                rapidly as corporations and governments seek high-quality,
                verifiable carbon removal. BCR credits are traded on registries
                such as Puro.earth and recognized under leading carbon
                accounting frameworks. Because biochar&apos;s permanence is
                well-documented and scientifically validated, BCR credits command
                a premium over many other offset types.
              </p>
              <p className="mt-4 text-sm text-text-light leading-relaxed">
                iNBIO supports customers pursuing carbon credit programs by
                providing the production documentation, chain-of-custody
                records, and analytical data required by certification
                registries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Testing */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text">
                Quality &amp; Testing
              </h2>
              <p className="mt-4 text-text-light leading-relaxed">
                Every iNBIO biochar product is backed by comprehensive
                laboratory analysis. Results are reported against IBI Biochar
                Standards and EBC thresholds to give you clear, comparable data.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                We also offer custom specifications for customers with unique
                performance requirements. If your application demands a specific
                surface area range, particle gradation, or contaminant
                threshold, our team will work with you to develop a product that
                meets those parameters -- and verify it through third-party lab
                testing before shipment.
              </p>
            </div>

            <div className="bg-surface-dark rounded-xl border border-border p-8">
              <h3 className="text-lg font-semibold text-text mb-6">
                Standard Testing Parameters
              </h3>
              <ul className="space-y-4">
                {testingParameters.map((param) => (
                  <li key={param} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-primary shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-text">{param}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get Started with iNBIO Biochar
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Ready to evaluate engineered biochar for your project? We offer
            samples for testing and can provide technical data sheets tailored to
            your application.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/biochar-applications"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
            >
              Explore Biochar Applications
            </Link>
            <Link
              href="/quote-products"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors"
            >
              Request a Sample or Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

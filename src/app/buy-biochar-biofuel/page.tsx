import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buy BioChar & BioFuel Products",
  description:
    "Purchase engineered biochar, bio-oil, syngas, and renewable biofuels from iNBIO. Certified to IBI/EBC standards with full lab data and batch consistency for agriculture, filtration, energy, and carbon credits.",
};

const biocharUses = [
  "Soil amendment & fertility",
  "Stormwater filtration",
  "Contaminated-site remediation",
  "Concrete & asphalt additive",
  "Composting accelerant",
  "Livestock bedding",
  "Carbon credit generation",
];

const biofuelUses = [
  "Industrial process heat",
  "Combined heat & power (CHP)",
  "Sustainable aviation fuel feedstock",
  "Backup & peaking power",
  "Asphalt binder replacement",
  "Renewable diesel blending",
  "Marine fuel",
];

const advantages = [
  {
    title: "Tunable Properties",
    description:
      "We control temperature, residence time, and feedstock blend to hit your target spec -- whether that is high surface area for filtration or optimized CEC for agriculture.",
  },
  {
    title: "IBI & EBC Certified",
    description:
      "Every batch meets International Biochar Initiative and European Biochar Certificate quality thresholds, giving you regulatory confidence.",
  },
  {
    title: "Batch Consistency",
    description:
      "Automated process controls and in-line monitoring ensure repeatable product from run to run, eliminating variability surprises.",
  },
  {
    title: "Full Lab Data",
    description:
      "Each shipment includes a certificate of analysis: proximate & ultimate analysis, PAH levels, heavy metals, pH, BET surface area, and more.",
  },
];

export default function BuyBiocharBiofuelPage() {
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
              Buy BioChar &{" "}
              <span className="text-accent-light">BioFuel</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              Engineered biochar, bio-oil, syngas, and renewable biofuels --
              produced via fast pyrolysis from sustainably sourced biomass. Every
              product ships with full lab data and meets IBI/EBC quality
              standards.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote-products"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
              >
                Request a Product Quote
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section id="products" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
            Our Product Lines
          </h2>
          <p className="mt-4 text-lg text-text-light text-center max-w-2xl mx-auto">
            Two core product families, each available in bulk or by the tote,
            with custom specs to match your application.
          </p>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Biochar Card */}
            <div className="flex flex-col bg-surface rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mb-5">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text">
                Engineered Biochar
              </h3>
              <p className="mt-3 text-text-light leading-relaxed flex-1">
                High-carbon, low-PAH biochar produced at controlled pyrolysis
                temperatures. We tune porosity, surface area, pH, and nutrient
                content to your application -- from high-CEC soil amendments to
                ultra-fine filtration media.
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-lighter mb-3">
                  Typical specs
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  <span className="text-text-light">Fixed carbon</span>
                  <span className="font-medium text-text">70 -- 92 %</span>
                  <span className="text-text-light">Surface area</span>
                  <span className="font-medium text-text">
                    250 -- 600 m&sup2;/g
                  </span>
                  <span className="text-text-light">pH range</span>
                  <span className="font-medium text-text">7.5 -- 10.5</span>
                  <span className="text-text-light">Moisture</span>
                  <span className="font-medium text-text">&lt; 5 %</span>
                </div>
              </div>
              <Link
                href="/biochar"
                className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Explore biochar products
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

            {/* Bio-Oil & Biofuels Card */}
            <div className="flex flex-col bg-surface rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center mb-5">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text">
                Bio-Oil, Syngas & Biofuels
              </h3>
              <p className="mt-3 text-text-light leading-relaxed flex-1">
                Fast pyrolysis bio-oil is a dense, renewable liquid fuel that
                directly displaces heavy fuel oil and natural gas. We also supply
                upgraded biofuels -- renewable diesel and marine fuel -- and can
                deliver syngas for on-site process heat or power generation.
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-lighter mb-3">
                  Energy products
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  <span className="text-text-light">Bio-oil HHV</span>
                  <span className="font-medium text-text">16 -- 19 MJ/kg</span>
                  <span className="text-text-light">Syngas HHV</span>
                  <span className="font-medium text-text">5 -- 15 MJ/Nm&sup3;</span>
                  <span className="text-text-light">Ren. diesel blend</span>
                  <span className="font-medium text-text">Up to 100 %</span>
                  <span className="text-text-light">SAF pathway</span>
                  <span className="font-medium text-text">ASTM D7566</span>
                </div>
              </div>
              <Link
                href="/biofuels"
                className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Explore bio-oil &amp; biofuels
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
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
            Applications
          </h2>
          <p className="mt-4 text-lg text-text-light text-center max-w-2xl mx-auto">
            Our products serve dozens of end-uses across agriculture,
            construction, energy, and environmental remediation.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Biochar Applications */}
            <div>
              <h3 className="text-xl font-bold text-text mb-5">
                Biochar Applications
              </h3>
              <ul className="space-y-3">
                {biocharUses.map((use) => (
                  <li key={use} className="flex items-start gap-3">
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
                    <span className="text-text-light">{use}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/biochar-applications"
                className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                All biochar applications
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

            {/* Biofuel Applications */}
            <div>
              <h3 className="text-xl font-bold text-text mb-5">
                Bio-Oil & Biofuel Applications
              </h3>
              <ul className="space-y-3">
                {biofuelUses.map((use) => (
                  <li key={use} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-text-light">{use}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/biofuel-applications"
                className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                All biofuel applications
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
        </div>
      </section>

      {/* Why Buy from iNBIO */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
            Why Buy from iNBIO
          </h2>
          <p className="mt-4 text-lg text-text-light text-center max-w-2xl mx-auto">
            We are not brokers. We manufacture every product in our own fast
            pyrolysis systems, giving us full control over quality and
            consistency.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="relative pl-8 border-l-4 border-primary"
              >
                <h3 className="text-lg font-bold text-text">{item.title}</h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">
                  {item.description}
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
            Ready to Order?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Tell us what you need -- product type, volume, target specs -- and
            we&apos;ll send a quote with pricing, lead times, and a sample COA.
          </p>
          <Link
            href="/quote-products"
            className="inline-flex items-center justify-center mt-8 px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
          >
            Request a Product Quote
          </Link>
        </div>
      </section>
    </>
  );
}

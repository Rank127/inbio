import Image from "next/image";
import Link from "next/link";

const serviceCards = [
  {
    title: "Buy BioChar & BioFuel",
    description:
      "Purchase engineered biochar, bio-oil, syngas, and renewable biofuels. Certified to IBI/EBC standards for agriculture, filtration, carbon credits, and industrial energy.",
    href: "/buy-biochar-biofuel",
    cta: "View Products",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Build + Operate a Plant",
    description:
      "We design, build, and operate fast pyrolysis plants at your location. Turn your biomass waste into revenue — from feedstock assessment through commissioning and daily operations.",
    href: "/build-operate-plant",
    cta: "Learn More",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Buy OEM Equipment",
    description:
      "Purchase modular fast pyrolysis systems in the 5–75 TPD range. Factory-built, shipped to your site, with installation support and operator training available.",
    href: "/oem-equipment",
    cta: "View Systems",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "5–75", label: "TPD System Range" },
  { value: "3", label: "Product Streams" },
  { value: "500+°C", label: "Pyrolysis Temp" },
  { value: "<2s", label: "Reaction Time" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Converting Biomass Waste
              <br />
              <span className="text-accent-light">into Value</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              iNBIO transforms agricultural residues, forestry byproducts, and organic waste into
              bio-oil, biochar, and syngas through fast pyrolysis — displacing fossil fuels and
              sequestering carbon.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
              >
                Request a Consultation
              </Link>
              <Link
                href="/our-technology"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              How Can We Help?
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              Whether you need biochar products, a full-service pyrolysis plant, or OEM equipment —
              we have a solution for your operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {serviceCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group relative flex flex-col p-8 bg-surface rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-200"
              >
                <div className="text-primary mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-text-light leading-relaxed flex-1">
                  {card.description}
                </p>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                  {card.cta}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-accent-light">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text">
                Three Products, Zero Waste
              </h2>
              <p className="mt-4 text-text-light leading-relaxed">
                Fast pyrolysis converts virtually 100% of incoming dry biomass into usable
                products. Nothing goes to landfill.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                    <span className="text-lg">🛢️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Bio-Oil (40–70% yield)</h3>
                    <p className="text-sm text-text-light mt-1">
                      Dense, energy-rich liquid. Replaces heavy fuel oil in boilers or upgrades to
                      SAF, renewable diesel, and marine fuel.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <span className="text-lg">⬛</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Biochar (15–40% yield)</h3>
                    <p className="text-sm text-text-light mt-1">
                      Stable carbon-rich solid for soil amendment, water filtration, carbon credits,
                      and construction materials.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="text-lg">💨</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Syngas (7–20% yield)</h3>
                    <p className="text-sm text-text-light mt-1">
                      Combustible gas recycled to heat the reactor — making the process thermally
                      self-sufficient with no external fuel.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/our-technology"
                className="inline-flex items-center mt-8 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Explore our technology platform
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-surface-dark rounded-xl p-8 border border-border">
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/iStock-1063777306-1-scaled.jpg"
                  alt="Fast pyrolysis technology converting biomass into bio-oil, biochar, and syngas"
                  width={1024}
                  height={683}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-text mb-4">
                Feedstock Flexibility
              </h3>
              <p className="text-sm text-text-light mb-6">
                Our systems process a wide range of biomass waste:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Forestry residues",
                  "Sawmill waste",
                  "Crop stover & straw",
                  "Nut shells",
                  "Poultry litter",
                  "Urban wood waste",
                  "Rice husks",
                  "Sugarcane bagasse",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-text">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Not Sure Which Option Fits?
          </h2>
          <p className="mt-4 text-lg text-text-light max-w-xl mx-auto">
            Tell us about your biomass waste stream, and we&apos;ll recommend the right solution for
            your operation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 px-8 py-3 text-base font-semibold bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}

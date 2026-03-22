import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fast Pyrolysis Technology for Biomass Conversion",
  description:
    "Learn how iNBIO's fast pyrolysis technology rapidly converts wood and agricultural waste into renewable energy products.",
};

const processSteps = [
  {
    number: "01",
    title: "Biomass Preparation",
    description:
      "Incoming feedstock is dried to 15% moisture or less and reduced to uniform particles of 2--6 mm. Proper sizing and drying ensure rapid, even heat transfer inside the reactor and maximize liquid yield.",
  },
  {
    number: "02",
    title: "Rapid Thermal Decomposition",
    description:
      "Prepared biomass enters a fluidized bed reactor at 450--550\u00B0C. Particles reach full reaction temperature in under two seconds -- favoring condensable vapors over solid char or permanent gases, which is why fast pyrolysis achieves significantly higher bio-oil yields than slow pyrolysis or gasification.",
  },
  {
    number: "03",
    title: "Product Separation & Collection",
    description:
      "The hot vapor stream passes through cyclones and condensers. Biochar is separated first, then vapors are rapidly cooled into bio-oil. The non-condensable fraction is captured as syngas and routed back to fuel the reactor\u2019s heating system.",
  },
];

const reactorAdvantages = [
  {
    title: "Superior Heat Transfer",
    description:
      "Intimate contact between sand and biomass particles achieves heat transfer rates that fixed-bed and auger-style reactors cannot match, resulting in higher bio-oil yields and more consistent product quality.",
  },
  {
    title: "Uniform Temperature Control",
    description:
      "Turbulent mixing inside the fluidized bed eliminates hot spots and cold zones, ensuring that every particle experiences the same thermal conditions -- essential for producing bio-oil with predictable, repeatable specifications.",
  },
  {
    title: "Scalable, Modular Architecture",
    description:
      "Reactor units are available in capacities ranging from 5 to 75 metric tons per day, and multiple units can be combined to exceed 200 TPD. Each module is factory-built and shipped to site, reducing construction timelines and capital risk.",
  },
];

const products = [
  {
    name: "Bio-Oil",
    yield: "40--70%",
    href: "/biofuels",
    description:
      "A dense, energy-rich liquid that can replace heavy fuel oil in industrial boilers and furnaces, or be refined into transportation-grade biofuels. Bio-oil is the primary revenue product of the pyrolysis process.",
    bgColor: "bg-amber-100",
  },
  {
    name: "Biochar",
    yield: "15--40%",
    href: "/biochar",
    description:
      "A stable, carbon-rich solid with applications in soil amendment, water filtration, and carbon sequestration. When applied to soils, biochar locks carbon underground for hundreds of years while improving fertility and water retention.",
    bgColor: "bg-green-100",
  },
  {
    name: "Syngas",
    yield: "7--20%",
    href: null,
    description:
      "A combustible gas mixture of hydrogen, carbon monoxide, and light hydrocarbons. In our system, syngas is recycled internally to heat the reactor, making the process thermally self-sufficient and reducing operating costs.",
    bgColor: "bg-blue-100",
  },
];

const woodyBiomass = [
  "Forestry residues (tops, limbs, bark)",
  "Sawmill fines and wood shavings",
  "Urban wood waste (pallets, construction debris, land-clearing material)",
];

const agriculturalResidues = [
  "Corn stover and wheat straw",
  "Rice husk and rice straw",
  "Nut shells (pecan, walnut, almond)",
  "Sugarcane bagasse",
  "Poultry litter and other animal-bedding waste",
];

export default function OurTechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3">
              Our Technology
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Turning Biomass Waste into{" "}
              <span className="text-accent-light">Valuable Energy Products</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              Fast pyrolysis converts agricultural residues, forestry byproducts,
              and urban wood debris into bio-oil, biochar, and syngas -- a
              carbon-negative, economically self-sustaining process that scales
              from small rural operations to large industrial facilities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/fast-pyrolysis-specs"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
              >
                View Reactor Specs
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro context */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Why Fast Pyrolysis?
            </h2>
            <p className="mt-6 text-text-light leading-relaxed">
              Every year, billions of tons of biomass waste end up in landfills
              or are left to decompose in the open. This wasted organic material
              represents an enormous untapped energy resource. Fast pyrolysis
              offers a proven, commercially viable path to convert that waste
              into high-value products.
            </p>
            <p className="mt-4 text-text-light leading-relaxed">
              iNBIO&apos;s modular reactor systems are designed to operate at the
              point of waste generation -- sawmills, farms, wood recycling yards
              -- eliminating costly long-haul transport and turning a disposal
              liability into a revenue stream.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works -- 3 Steps */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
            How Fast Pyrolysis Works
          </h2>
          <p className="mt-4 text-lg text-text-light text-center max-w-2xl mx-auto">
            A thermochemical process that rapidly decomposes organic material in
            the absence of oxygen, producing three distinct, usable products.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col">
                {idx < processSteps.length - 1 && (
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

      {/* Reactor Technology */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text">
                Our Reactor Technology
              </h2>
              <p className="mt-4 text-text-light leading-relaxed">
                iNBIO&apos;s reactor is built around a bubbling fluidized bed
                design -- the same core technology used in the most successful
                commercial pyrolysis installations worldwide. A stream of hot
                inert gas suspends a bed of sand particles, creating a
                turbulent, fluid-like environment that delivers heat to every
                biomass particle surface almost instantaneously.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                After the initial startup period, the system becomes
                self-sustaining: syngas generated by the process is recycled to
                provide all the heat the reactor requires, with no external fuel
                needed for continuous operation.
              </p>
            </div>

            <div className="space-y-6">
              {reactorAdvantages.map((adv) => (
                <div
                  key={adv.title}
                  className="bg-surface rounded-xl border border-border p-6"
                >
                  <h3 className="text-lg font-bold text-primary">
                    {adv.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-light leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              ))}
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
                450--550
              </p>
              <p className="mt-1 text-sm text-white/70">&deg;C Reactor Temp</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-accent-light">
                &lt; 2 s
              </p>
              <p className="mt-1 text-sm text-white/70">Residence Time</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-accent-light">
                5--75
              </p>
              <p className="mt-1 text-sm text-white/70">TPD Modular Range</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-accent-light">
                100%
              </p>
              <p className="mt-1 text-sm text-white/70">Biomass Utilization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Products */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
            Three Products, Zero Waste
          </h2>
          <p className="mt-4 text-lg text-text-light text-center max-w-2xl mx-auto">
            Fast pyrolysis converts virtually 100% of incoming dry biomass into
            usable products. Nothing is sent to a landfill.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex flex-col bg-white rounded-xl border border-border p-8 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-12 h-12 ${product.bgColor} rounded-lg flex items-center justify-center mb-4`}
                >
                  <span className="text-xl font-bold text-primary-dark">
                    {product.yield}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text">{product.name}</h3>
                <p className="text-sm text-text-lighter font-medium mt-1">
                  {product.yield} yield by weight
                </p>
                <p className="mt-4 text-sm text-text-light leading-relaxed flex-1">
                  {product.description}
                </p>
                {product.href && (
                  <Link
                    href={product.href}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    Learn more
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
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-text-lighter text-center max-w-2xl mx-auto">
            Product yields vary depending on feedstock type, moisture content,
            and reactor operating parameters. Our engineering team works with
            each client to optimize for their specific biomass source and target
            product mix.
          </p>
        </div>
      </section>

      {/* Feedstock Flexibility */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text">
                Feedstock Flexibility
              </h2>
              <p className="mt-4 text-text-light leading-relaxed">
                One of the most important advantages of iNBIO&apos;s technology
                is its ability to process a wide range of biomass feedstocks. Our
                reactor systems have been tested and validated with woody biomass
                and agricultural residues alike.
              </p>
              <p className="mt-4 text-sm text-text-lighter leading-relaxed">
                For optimal performance, feedstock should arrive at or be dried
                to a moisture content of 15% or less, with an ash content below
                10%. Our team provides feedstock assessment and preparation
                guidance as part of every project engagement.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-surface-dark rounded-xl border border-border p-6">
                <h3 className="text-lg font-semibold text-text mb-4">
                  Woody Biomass
                </h3>
                <ul className="space-y-3">
                  {woodyBiomass.map((item) => (
                    <li key={item} className="flex items-start gap-3">
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
                      <span className="text-sm text-text-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface-dark rounded-xl border border-border p-6">
                <h3 className="text-lg font-semibold text-text mb-4">
                  Agricultural Residues
                </h3>
                <ul className="space-y-3">
                  {agriculturalResidues.map((item) => (
                    <li key={item} className="flex items-start gap-3">
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
                      <span className="text-sm text-text-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
              Environmental Impact
            </h2>
            <div className="mt-10 space-y-6">
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary">
                  Carbon-Negative Process
                </h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">
                  By diverting biomass from landfills and open burning, the
                  process eliminates methane emissions -- a greenhouse gas 80
                  times more potent than CO&#8322; over a 20-year horizon. When
                  biochar sequestration is combined with fossil fuel displacement
                  by bio-oil, the overall process achieves a net carbon-negative
                  footprint.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary">
                  Fossil Fuel Displacement
                </h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">
                  Bio-oil produced through fast pyrolysis directly replaces heavy
                  fuel oil, natural gas, and other fossil fuels in industrial
                  heating and power generation applications -- reducing Scope 1
                  emissions for every operator that adopts the technology.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary">
                  Landfill Diversion &amp; Circular Economy
                </h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">
                  Waste materials that currently have zero or negative value are
                  transformed into energy products, soil amendments, and process
                  heat -- closing the loop on organic waste streams and reducing
                  dependence on fossil resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Explore Fast Pyrolysis for Your Operation
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Whether you manage forestry residues, agricultural waste, or urban
            wood debris, iNBIO&apos;s modular fast pyrolysis systems can turn
            your biomass into revenue.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fast-pyrolysis-specs"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
            >
              View Reactor Specifications
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

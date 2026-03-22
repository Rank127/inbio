import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OEM Pyrolysis Equipment & Modular Systems",
  description:
    "Purchase modular fast pyrolysis systems from 5 to 75 TPD. Factory-built, shipped to your site, with installation support, operator training, and maintenance contracts available from iNBIO.",
};

const systems = [
  {
    capacity: "5 TPD",
    bioOil: "1.5 -- 3.5",
    biochar: "0.75 -- 2.0",
    footprint: "40 ft container",
    power: "~50 kW",
    note: "Pilot & demonstration scale",
  },
  {
    capacity: "10 TPD",
    bioOil: "3 -- 7",
    biochar: "1.5 -- 4",
    footprint: "2 x 40 ft modules",
    power: "~90 kW",
    note: "Small commercial operations",
  },
  {
    capacity: "25 TPD",
    bioOil: "7.5 -- 17.5",
    biochar: "3.75 -- 10",
    footprint: "4 x 40 ft modules",
    power: "~180 kW",
    note: "Mid-scale production",
  },
  {
    capacity: "50 TPD",
    bioOil: "15 -- 35",
    biochar: "7.5 -- 20",
    footprint: "6 x 40 ft modules",
    power: "~320 kW",
    note: "Full commercial scale",
  },
  {
    capacity: "75 TPD",
    bioOil: "22.5 -- 52.5",
    biochar: "11.25 -- 30",
    footprint: "8 x 40 ft modules",
    power: "~450 kW",
    note: "High-throughput operations",
  },
];

const included = [
  {
    title: "Bubbling Fluidized Bed Reactor",
    description:
      "Core pyrolysis reactor with refractory lining, fluidization system, and char separation cyclones.",
  },
  {
    title: "Feedstock Preparation",
    description:
      "Drying, sizing, and metering equipment to deliver consistent feedstock to the reactor at target moisture and particle size.",
  },
  {
    title: "Condensation Train",
    description:
      "Multi-stage quench and condenser system to maximize bio-oil recovery and quality, including electrostatic precipitator.",
  },
  {
    title: "Biochar Handling",
    description:
      "Cooling auger, screening, and storage system. Optional bagging or bulk-load conveyors.",
  },
  {
    title: "Bio-Oil Storage",
    description:
      "Heated tanks with recirculation to maintain homogeneity. Sized for 3--7 days of production capacity.",
  },
  {
    title: "Controls & Automation",
    description:
      "PLC-based control system with HMI touchscreen, remote monitoring capability, and data logging for carbon credit documentation.",
  },
  {
    title: "Emissions Controls",
    description:
      "Syngas combustion flare, thermal oxidizer, and particulate controls to meet local air quality permitting requirements.",
  },
];

const supportOptions = [
  {
    title: "Installation & Commissioning",
    description:
      "Our field engineers supervise module placement, interconnection, piping tie-ins, and electrical hookup. We commission the system through first product and performance verification.",
  },
  {
    title: "Operator Training",
    description:
      "Hands-on training program covering startup/shutdown procedures, steady-state operation, quality sampling, troubleshooting, and preventive maintenance. Typically 2--4 weeks on-site.",
  },
  {
    title: "Maintenance & Spare Parts",
    description:
      "Annual maintenance contracts with scheduled inspections, consumable replacement, and priority spare parts supply. Remote monitoring and diagnostics included.",
  },
];

export default function OemEquipmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3">
              Equipment Sales
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              OEM Pyrolysis{" "}
              <span className="text-accent-light">Equipment</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              Factory-built, modular fast pyrolysis systems in five standard
              sizes from 5 to 75 TPD. Ship to your site, connect, and produce.
              Combine multiple units for 200+ TPD capacity.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote-oem"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
              >
                Request Equipment Quote
              </Link>
              <Link
                href="#systems"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors"
              >
                View System Sizes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* System Capacity Cards */}
      <section id="systems" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
            Modular System Sizes
          </h2>
          <p className="mt-4 text-lg text-text-light text-center max-w-2xl mx-auto">
            Five standard capacities, all based on the same proven bubbling
            fluidized bed reactor technology. Need more than 75 TPD? Deploy
            multiple units in parallel.
          </p>

          {/* Desktop Table */}
          <div className="mt-12 hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-3 px-4 font-semibold text-text">
                    System
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-text">
                    Bio-Oil (TPD)
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-text">
                    Biochar (TPD)
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-text">
                    Footprint
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-text">
                    Parasitic Load
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-text">
                    Use Case
                  </th>
                </tr>
              </thead>
              <tbody>
                {systems.map((sys, idx) => (
                  <tr
                    key={sys.capacity}
                    className={
                      idx % 2 === 0 ? "bg-surface" : "bg-white"
                    }
                  >
                    <td className="py-3 px-4 font-bold text-primary">
                      {sys.capacity}
                    </td>
                    <td className="py-3 px-4 text-text-light">
                      {sys.bioOil}
                    </td>
                    <td className="py-3 px-4 text-text-light">
                      {sys.biochar}
                    </td>
                    <td className="py-3 px-4 text-text-light">
                      {sys.footprint}
                    </td>
                    <td className="py-3 px-4 text-text-light">{sys.power}</td>
                    <td className="py-3 px-4 text-text-light">{sys.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="mt-12 md:hidden space-y-4">
            {systems.map((sys) => (
              <div
                key={sys.capacity}
                className="bg-surface rounded-xl border border-border p-6"
              >
                <h3 className="text-xl font-bold text-primary mb-1">
                  {sys.capacity}
                </h3>
                <p className="text-xs text-text-lighter mb-4">{sys.note}</p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                  <span className="text-text-light">Bio-Oil</span>
                  <span className="font-medium text-text">
                    {sys.bioOil} TPD
                  </span>
                  <span className="text-text-light">Biochar</span>
                  <span className="font-medium text-text">
                    {sys.biochar} TPD
                  </span>
                  <span className="text-text-light">Footprint</span>
                  <span className="font-medium text-text">
                    {sys.footprint}
                  </span>
                  <span className="text-text-light">Parasitic Load</span>
                  <span className="font-medium text-text">{sys.power}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-text-lighter">
            Yields are approximate and vary with feedstock type, moisture
            content, and operating parameters. Contact us for a feedstock-specific
            projection.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
            What&apos;s Included
          </h2>
          <p className="mt-4 text-lg text-text-light text-center max-w-2xl mx-auto">
            Every system ships as a complete, integrated plant. No third-party
            equipment sourcing required.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-text">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
            Support &amp; Services
          </h2>
          <p className="mt-4 text-lg text-text-light text-center max-w-2xl mx-auto">
            Buying the equipment is step one. We back every system with the
            support you need to run it successfully.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option) => (
              <div key={option.title} className="flex flex-col">
                <div className="w-12 h-1 bg-accent rounded-full mb-4" />
                <h3 className="text-lg font-bold text-text">{option.title}</h3>
                <p className="mt-3 text-sm text-text-light leading-relaxed flex-1">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 relative w-full aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src="/images/iStock-1185246772-768x512.jpg"
              alt="Modular pyrolysis equipment deployed at a biomass processing site"
              width={768}
              height={512}
              className="rounded-xl object-cover w-full"
            />
          </div>

          <div className="mt-8 bg-surface-dark rounded-xl border border-border p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-text">
                Need a Capacity Beyond 75 TPD?
              </h3>
              <p className="mt-2 text-sm text-text-light">
                Deploy multiple modular units in parallel at a single site. Our
                shared-infrastructure design keeps per-unit costs low while
                giving you linear scale-up to 200+ TPD.
              </p>
            </div>
            <Link
              href="/quote-oem"
              className="shrink-0 inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
            >
              Discuss Multi-Unit Config
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get an Equipment Quote
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Tell us your target throughput, feedstock type, and site location.
            We&apos;ll send system options, budgetary pricing, and a preliminary
            layout.
          </p>
          <Link
            href="/quote-oem"
            className="inline-flex items-center justify-center mt-8 px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
          >
            Request Equipment Quote
          </Link>
        </div>
      </section>
    </>
  );
}

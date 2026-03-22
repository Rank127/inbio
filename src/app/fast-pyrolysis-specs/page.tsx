import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pyrolysis Reactor Specs & Performance Data",
  description:
    "Review detailed fast pyrolysis reactor specifications, throughput ranges, and product yield data. Request a custom system quote from iNBIO engineering.",
};

const systemSizes = [
  { capacity: "5 TPD", parasitic: "75 kW", footprint: "40 x 20 ft", capital: "$2–5M" },
  { capacity: "10 TPD", parasitic: "100 kW", footprint: "50 x 25 ft", capital: "$3–7M" },
  { capacity: "25 TPD", parasitic: "120 kW", footprint: "60 x 30 ft", capital: "$8–18M" },
  { capacity: "50 TPD", parasitic: "140 kW", footprint: "80 x 40 ft", capital: "$15–25M" },
  { capacity: "75 TPD", parasitic: "150 kW", footprint: "100 x 50 ft", capital: "$20–30M" },
];

const commonSpecs = [
  { label: "Reactor Temperature", value: "450–550°C" },
  { label: "Residence Time", value: "<2 seconds" },
  { label: "Feedstock Moisture", value: "<15%" },
  { label: "Particle Size", value: "2–6 mm" },
  { label: "Bio-Oil Yield", value: "60–75% by weight" },
  { label: "Biochar Yield", value: "15–25% by weight" },
  { label: "Syngas Yield", value: "10–20% by weight" },
  { label: "External Fuel Required", value: "None (self-sustaining)" },
];

const bioOilProps = [
  { property: "Energy Density", value: "16–19 MJ/kg" },
  { property: "Water Content", value: "15–30%" },
  { property: "pH", value: "2.0–3.5" },
  { property: "Density", value: "1.1–1.3 kg/L" },
  { property: "Oxygen Content", value: "35–40% by weight" },
];

const biocharProps = [
  { property: "Fixed Carbon", value: "70–90%" },
  { property: "BET Surface Area", value: "200–400 m²/g" },
  { property: "pH", value: "7.5–10" },
  { property: "H:Corg Ratio", value: "<0.7" },
  { property: "Ash Content", value: "Feedstock dependent" },
];

export default function FastPyrolysisSpecs() {
  return (
    <>
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Reactor Specifications &amp; Performance Data
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl leading-relaxed">
              Detailed engineering specs for iNBIO&apos;s modular fast pyrolysis systems.
              Factory-built, shipped to site, scalable from 5 to 75+ TPD.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/quote-oem" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors">
                Request a Quote
              </Link>
              <Link href="/our-technology" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors">
                Technology Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Specs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text">Process Parameters</h2>
          <p className="mt-4 text-text-light max-w-2xl">
            All iNBIO systems share the same core fast pyrolysis process parameters,
            regardless of capacity.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {commonSpecs.map((spec) => (
              <div key={spec.label} className="p-5 bg-surface rounded-lg border border-border">
                <p className="text-sm text-text-light">{spec.label}</p>
                <p className="mt-1 text-xl font-bold text-primary">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Sizes */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text">Available System Sizes</h2>
          <p className="mt-4 text-text-light max-w-2xl">
            Modular units from 5 to 75 metric tons per day. Multiple units combine for 200+ TPD throughput.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary-dark text-white">
                  <th className="px-4 py-3 text-left font-semibold">Capacity</th>
                  <th className="px-4 py-3 text-left font-semibold">Parasitic Load</th>
                  <th className="px-4 py-3 text-left font-semibold">Footprint</th>
                  <th className="px-4 py-3 text-left font-semibold">Capital Range</th>
                </tr>
              </thead>
              <tbody>
                {systemSizes.map((size, i) => (
                  <tr key={size.capacity} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-text">{size.capacity}</td>
                    <td className="px-4 py-3 text-text-light">{size.parasitic}</td>
                    <td className="px-4 py-3 text-text-light">{size.footprint}</td>
                    <td className="px-4 py-3 font-semibold text-primary">{size.capital}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product Specs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text">Product Specifications</h2>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-surface rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold text-text mb-4">Bio-Oil Properties</h3>
              <div className="space-y-3">
                {bioOilProps.map((p) => (
                  <div key={p.property} className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="text-sm text-text-light">{p.property}</span>
                    <span className="text-sm font-semibold text-text">{p.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold text-text mb-4">Biochar Properties</h3>
              <div className="space-y-3">
                {biocharProps.map((p) => (
                  <div key={p.property} className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="text-sm text-text-light">{p.property}</span>
                    <span className="text-sm font-semibold text-text">{p.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text">What&apos;s Included</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Reactor System", desc: "Bubbling fluidized bed reactor with sand media, nitrogen purge system, and temperature control" },
              { title: "Feedstock Preparation", desc: "Dryer, grinder, screens, and feed system sized to reactor capacity" },
              { title: "Condensation Train", desc: "Multi-stage quench and condenser system for rapid bio-oil recovery" },
              { title: "Biochar Handling", desc: "Cyclone separation, cooling, and collection systems with storage" },
              { title: "Bio-Oil Storage", desc: "Corrosion-resistant storage tanks with temperature management" },
              { title: "Process Controls", desc: "PLC-based control system with HMI, data logging, and remote monitoring" },
              { title: "Emissions Controls", desc: "Syngas combustion, particulate filtration, and flue gas treatment" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg border border-border p-5">
                <h3 className="font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Request a Custom System Quote
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Our engineering team will evaluate your feedstock and design a system sized to your throughput requirements.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote-oem" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors">
              Request Equipment Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors">
              Talk to Our Engineers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

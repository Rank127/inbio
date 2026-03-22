import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Modular Pyrolysis Systems | 5–75 TPD",
  description:
    "Factory-built modular fast pyrolysis systems from 5 to 75 TPD. Shipped to your site with installation support and operator training.",
};

const systems = [
  {
    capacity: "5 TPD",
    name: "Micro",
    idealFor: "Single sawmill, farm operation, or pilot facility",
    capital: "$2–5M",
    bioOil: "3–3.5 tons/day",
    biochar: "0.75–1.25 tons/day",
    footprint: "40 × 20 ft",
    staff: "2–3 operators",
  },
  {
    capacity: "10 TPD",
    name: "Small",
    idealFor: "Small commercial wood processing or agricultural operations",
    capital: "$3–7M",
    bioOil: "6–7 tons/day",
    biochar: "1.5–2.5 tons/day",
    footprint: "50 × 25 ft",
    staff: "3–4 operators",
  },
  {
    capacity: "25 TPD",
    name: "Mid-Scale",
    idealFor: "Commercial biomass processors, municipalities, cooperatives",
    capital: "$8–18M",
    bioOil: "15–18 tons/day",
    biochar: "3.75–6.25 tons/day",
    footprint: "60 × 30 ft",
    staff: "4–6 operators",
  },
  {
    capacity: "50 TPD",
    name: "Large",
    idealFor: "Large industrial operations, regional waste processors",
    capital: "$15–25M",
    bioOil: "30–35 tons/day",
    biochar: "7.5–12.5 tons/day",
    footprint: "80 × 40 ft",
    staff: "6–8 operators",
  },
  {
    capacity: "75 TPD",
    name: "Industrial",
    idealFor: "Major industrial scale, utility-grade operations",
    capital: "$20–30M",
    bioOil: "45–52 tons/day",
    biochar: "11–19 tons/day",
    footprint: "100 × 50 ft",
    staff: "8–10 operators",
  },
];

const timeline = [
  { phase: "Engineering & Design", duration: "2–3 months", desc: "Feedstock analysis, system sizing, site planning" },
  { phase: "Fabrication", duration: "4–6 months", desc: "Factory build, quality testing, pre-assembly" },
  { phase: "Shipping & Installation", duration: "2–3 months", desc: "Transport, site prep, mechanical installation" },
  { phase: "Commissioning", duration: "1–2 months", desc: "Startup, tuning, operator training, handoff" },
];

export default function ModularSystems() {
  return (
    <>
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Modular Pyrolysis Systems
            </h1>
            <p className="mt-6 text-lg text-white/85 leading-relaxed">
              Factory-built, shipped to your site, operational in 12–18 months. Start with one
              module, add capacity as your market grows. No multi-billion-dollar megaplant required.
            </p>
            <Link href="/quote-oem" className="inline-flex items-center justify-center mt-8 px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors">
              Request Equipment Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Modular */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text">Why Modular?</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Factory-Built Quality", desc: "Built under controlled conditions with rigorous QA — not a field-constructed project subject to weather and site constraints." },
              { title: "Faster Deployment", desc: "12–18 months from contract to operation vs. 5–7 years for a greenfield biorefinery. Start generating revenue sooner." },
              { title: "Lower Capital Risk", desc: "Start with one module at $2–5M instead of betting $50M+ on day one. Prove your feedstock and markets first." },
              { title: "Scale Incrementally", desc: "Add modules as demand grows. Multiple units combine to achieve 200+ TPD without redesigning the plant." },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-surface rounded-xl border border-border">
                <h3 className="font-bold text-text">{item.title}</h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Cards */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text">Available Configurations</h2>
          <div className="mt-8 space-y-6">
            {systems.map((sys) => (
              <div key={sys.capacity} className="bg-white rounded-xl border border-border p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary text-white font-bold text-lg">
                        {sys.capacity.split(" ")[0]}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-text">{sys.capacity} — {sys.name}</h3>
                        <p className="text-sm text-text-light">{sys.idealFor}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
                    <div>
                      <p className="text-xs text-text-lighter uppercase">Bio-Oil</p>
                      <p className="text-sm font-semibold text-text">{sys.bioOil}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-lighter uppercase">Biochar</p>
                      <p className="text-sm font-semibold text-text">{sys.biochar}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-lighter uppercase">Footprint</p>
                      <p className="text-sm font-semibold text-text">{sys.footprint}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-lighter uppercase">Capital</p>
                      <p className="text-sm font-bold text-primary">{sys.capital}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-bold text-primary">200+ TPD? Combine Multiple Units</h3>
            <p className="mt-2 text-sm text-text-light">
              Stack two or more modules for throughputs exceeding 200 metric tons per day. Each unit
              operates independently — so maintenance on one module doesn&apos;t shut down the whole plant.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text">Deployment Timeline</h2>
          <p className="mt-4 text-text-light">Typical project: 9–14 months from contract to operation.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((step, i) => (
              <div key={step.phase} className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-accent">{step.duration}</span>
                </div>
                <h3 className="font-bold text-text">{step.phase}</h3>
                <p className="mt-1 text-sm text-text-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Find the Right System for Your Operation
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Tell us about your feedstock and throughput requirements. We&apos;ll recommend the right
            configuration and walk you through the numbers.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote-oem" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors">
              Request Equipment Quote
            </Link>
            <Link href="/fast-pyrolysis-specs" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors">
              View Full Specs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

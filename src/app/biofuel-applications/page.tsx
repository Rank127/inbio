import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biofuel Applications: Heat, Power & Transport | iNBIO",
  description:
    "Explore how bio-oil powers industrial boilers, CHP systems, and transport fuel blends.",
};

const applications = [
  {
    id: "industrial-heat",
    title: "Industrial Heat & Steam",
    paragraphs: [
      "Bio-oil produced through fast pyrolysis is a direct replacement for heavy fuel oil (HFO) and natural gas in industrial boilers, kilns, and dryers. Facilities that depend on fossil fuels for process heat -- food processors, lumber kilns, pulp and paper mills, aggregate plants, and chemical manufacturers -- can switch to bio-oil with minimal burner modifications and immediately reduce their Scope 1 carbon emissions.",
      "iNBIO bio-oil has a typical heating value of 16-18 MJ/kg and can be fired in standard pressure-atomizing or rotary-cup burners. Because bio-oil is derived from biomass, combustion CO2 is considered biogenic under most regulatory frameworks, effectively zeroing out fuel-related greenhouse gas emissions. Many operations pair bio-oil combustion with biochar carbon removal credits to achieve net-negative energy production.",
    ],
    technicalDetails: [
      "Heating value: 16-18 MJ/kg (approximately 50% of HFO)",
      "Viscosity: 40-100 cP at 40 C (pump and atomize like HFO with preheating)",
      "Compatible with pressure-atomizing, rotary-cup, and twin-fluid burners",
      "Storage: stainless steel or HDPE-lined tanks at ambient temperature",
      "Combustion emissions: near-zero SOx, low NOx, biogenic CO2",
    ],
    benefits: [
      "Drop-in replacement for HFO and natural gas in existing boilers",
      "Eliminates Scope 1 fossil fuel emissions from process heat",
      "Lower fuel cost volatility compared to natural gas spot markets",
      "Produced from waste biomass -- no competition with food supply",
      "Qualifies for Renewable Energy Credits (RECs) in many states",
      "Can be blended with HFO during transition for phased adoption",
    ],
  },
  {
    id: "chp",
    title: "Combined Heat & Power (CHP)",
    paragraphs: [
      "Combined heat and power systems convert a single fuel into both electricity and useful thermal energy, achieving total efficiencies of 70-85% compared to the 35-40% efficiency of grid electricity alone. Bio-oil CHP systems let facilities generate their own renewable electricity while capturing waste heat for process use, space heating, or absorption cooling.",
      "Bio-oil-fueled CHP is particularly compelling for food processors, greenhouse operations, district heating networks, and remote industrial sites where grid power is expensive or unreliable. The economics improve further when the facility can sell surplus electricity back to the grid under net metering or feed-in tariff programs, and when biochar carbon credits are layered onto the overall pyrolysis revenue model.",
    ],
    technicalDetails: [
      "CHP total efficiency: 70-85% (electrical + thermal)",
      "Electrical output: typically 30-35% of fuel energy input",
      "Compatible with reciprocating engines, gas turbines, and ORC systems",
      "Heat recovery via exhaust gas economizers and jacket water exchangers",
      "Syngas from the pyrolysis process can supplement bio-oil in dual-fuel gensets",
    ],
    benefits: [
      "Generate renewable electricity and heat from a single fuel stream",
      "Reduce grid electricity purchases and demand charges",
      "Total system efficiency 70-85% vs. 35-40% for grid power alone",
      "Qualifies for CHP incentives, RECs, and ITC/PTC tax credits",
      "Revenue stacking: electricity, heat, carbon credits, and RINs",
      "Energy independence for remote or off-grid operations",
    ],
  },
  {
    id: "transportation",
    title: "Transportation Fuels (SAF, Marine, Diesel)",
    paragraphs: [
      "The hardest-to-decarbonize sectors in transportation -- aviation, marine shipping, and long-haul trucking -- cannot electrify at scale with current battery technology. Liquid biofuels derived from pyrolysis bio-oil offer a practical, near-term path to reducing carbon intensity in these sectors. Through catalytic upgrading and co-processing, bio-oil can be refined into sustainable aviation fuel (SAF), marine fuel oil, and renewable diesel that meet existing engine and infrastructure specifications.",
      "iNBIO bio-oil is suitable for co-processing in petroleum refineries at blends of 5-20%, leveraging existing hydrotreating and hydrocracking infrastructure. The resulting fuels qualify as advanced biofuels under the EPA Renewable Fuel Standard (RFS) and can generate D3 or D7 Renewable Identification Numbers (RINs). For SAF specifically, pyrolysis-derived fuels are on the ASTM D7566 approved pathways list, making them eligible for blending into jet fuel at up to 50%.",
    ],
    technicalDetails: [
      "SAF pathway: ASTM D7566 Annex A6 (Fischer-Tropsch from pyrolysis oil)",
      "Marine fuel: compliant with IMO 2020 low-sulfur requirements",
      "Renewable diesel: ASTM D975 specification, drop-in compatible",
      "Co-processing: 5-20% bio-oil blend in conventional refinery units",
      "RIN generation: D3 (cellulosic) or D7 (cellulosic diesel) codes",
      "Carbon intensity: 50-80% reduction vs. petroleum baseline (GREET model)",
    ],
    benefits: [
      "Decarbonizes aviation, shipping, and trucking without engine changes",
      "Generates high-value D3/D7 RINs under the Renewable Fuel Standard",
      "SAF qualifies for the Blender's Tax Credit and CORSIA offsets",
      "Co-processing leverages existing refinery infrastructure",
      "No new fueling infrastructure required -- drop-in compatible",
      "Meets ASTM specifications for jet, marine, and on-road diesel",
    ],
  },
  {
    id: "backup-power",
    title: "Backup Power & Microgrids",
    paragraphs: [
      "Critical facilities -- hospitals, data centers, military installations, water treatment plants, and remote communities -- require reliable backup power that can operate for extended periods without dependence on fuel supply chains. Bio-oil stored on-site provides a renewable alternative to diesel in standby generators, eliminating the carbon footprint of emergency power while maintaining the same energy density and storability advantages of liquid fuels.",
      "For microgrid applications, bio-oil gensets can serve as dispatchable generation alongside solar, wind, and battery storage. Unlike diesel, bio-oil is non-toxic and biodegradable, reducing environmental liability for on-site storage. Communities and facilities in hurricane-prone coastal zones, wildfire-risk areas, and island territories are particularly strong candidates for bio-oil backup power, where fuel supply disruptions during emergencies are a recurring concern.",
    ],
    technicalDetails: [
      "Storage stability: 12+ months in sealed, temperature-controlled tanks",
      "Energy density: ~20 MJ/L (compared to ~36 MJ/L for diesel)",
      "Compatible with modified compression-ignition and dual-fuel generators",
      "Non-toxic and biodegradable -- lower spill and storage risk than diesel",
      "Can be paired with syngas gensets for dual-fuel microgrid configurations",
    ],
    benefits: [
      "Renewable replacement for diesel in standby and emergency generators",
      "Extended on-site storage without fuel degradation concerns",
      "Reduces carbon footprint of backup power to near-zero",
      "Non-toxic and biodegradable -- lower environmental liability",
      "Ideal for islanded microgrids paired with solar and battery",
      "Maintains energy security during supply chain disruptions",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Materials (Asphalt Binder)",
    paragraphs: [
      "Bio-oil is finding a growing role as a partial replacement for petroleum-based asphalt binder in road construction. Pyrolysis bio-oil contains phenolic and aromatic compounds with chemical structures similar to those in conventional asphalt, making it a functional bio-binder that can replace 10-25% of petroleum asphalt in hot-mix and warm-mix applications.",
      "Field trials across North America and Europe have demonstrated that bio-oil-modified asphalt meets Superpave performance grade specifications and can improve low-temperature cracking resistance -- a common failure mode in cold climates. For state DOTs and municipalities under pressure to reduce the embodied carbon of infrastructure projects, bio-asphalt is a practical, scalable solution that uses existing paving equipment and QA/QC procedures.",
    ],
    technicalDetails: [
      "Replacement rate: 10-25% of petroleum asphalt binder by weight",
      "Meets Superpave PG grading specifications in field trials",
      "Improves low-temperature cracking resistance (better PG low-temp grade)",
      "Compatible with hot-mix (HMA) and warm-mix (WMA) production",
      "No modifications required to paving equipment or field procedures",
    ],
    benefits: [
      "Reduces petroleum content in asphalt by 10-25%",
      "Lowers embodied carbon of road construction projects",
      "Improves cold-weather pavement performance",
      "Uses existing paving equipment -- no new capital required",
      "Supports green procurement mandates for DOTs and municipalities",
      "Provides a high-volume market for pyrolysis bio-oil",
    ],
  },
];

export default function BiofuelApplicationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3">
              Biofuel Applications
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Bio-Oil for Heat, Power &amp;{" "}
              <span className="text-accent-light">Transport</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              Pyrolysis bio-oil is a versatile renewable fuel that replaces
              fossil fuels in boilers, generators, CHP systems, and
              transportation. Explore the applications reshaping how industry
              and infrastructure are powered.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote-products"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/biofuels"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors"
              >
                Our Biofuel Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-text-light mb-3 uppercase tracking-wider">
            Jump to Application
          </p>
          <div className="flex flex-wrap gap-2">
            {applications.map((app) => (
              <a
                key={app.id}
                href={`#${app.id}`}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-primary bg-white border border-border rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                {app.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Application Sections */}
      {applications.map((app, idx) => (
        <section
          key={app.id}
          id={app.id}
          className={`py-16 sm:py-20 ${idx % 2 === 0 ? "bg-white" : "bg-surface"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              {app.title}
            </h2>

            {/* Description Paragraphs */}
            {app.paragraphs.map((paragraph, pIdx) => (
              <p key={pIdx} className="mt-4 text-text-light leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Technical Details */}
              <div className="bg-surface-dark rounded-xl border border-border p-8">
                <h3 className="text-lg font-semibold text-text mb-5">
                  Technical Details
                </h3>
                <ul className="space-y-3">
                  {app.technicalDetails.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-accent shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm text-text-light">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-surface-dark rounded-xl border border-border p-8">
                <h3 className="text-lg font-semibold text-text mb-5">
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {app.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
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
                      <span className="text-sm text-text-light">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Switch to Renewable Fuel?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Whether you need bio-oil for your boiler, SAF for your fleet, or a
            CHP system for your facility, iNBIO can supply the fuel and the
            technology to make it happen.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/biofuels"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
            >
              Explore Our Biofuels
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

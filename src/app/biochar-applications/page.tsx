import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biochar Applications for Soil, Water & Construction | iNBIO",
  description:
    "Discover practical biochar applications across agriculture, stormwater filtration, composting, and concrete.",
};

const applications = [
  {
    id: "agriculture",
    title: "Agriculture & Soil Amendment",
    paragraphs: [
      "Biochar is one of the most effective long-term soil amendments available. When incorporated into agricultural soils, it increases cation exchange capacity (CEC), improves water-holding capacity by up to 20%, and creates a stable habitat for beneficial soil microorganisms. Unlike compost, which decomposes within a few seasons, biochar persists in soil for hundreds to thousands of years, delivering compounding benefits with every growing cycle.",
      "Farmers using biochar report measurable yield increases across row crops, specialty vegetables, orchards, and vineyards. The porous carbon structure adsorbs and slowly releases nutrients, reducing fertilizer runoff and lowering input costs over time. In degraded or sandy soils, biochar can transform unproductive land into viable cropland within a single season.",
      "iNBIO biochar is produced from clean, characterized feedstocks using a controlled fast pyrolysis process. Every batch is tested for pH, surface area, carbon content, and the absence of heavy metals or PAHs, so growers receive a consistent, safe product they can apply with confidence.",
    ],
    benefits: [
      "Increases water retention by 15-20% in sandy soils",
      "Boosts cation exchange capacity for better nutrient availability",
      "Reduces fertilizer requirements by 10-30% over time",
      "Supports microbial colonization and mycorrhizal networks",
      "Sequesters carbon for 500+ years per application",
      "Raises soil pH in acidic soils without excessive liming",
    ],
  },
  {
    id: "stormwater",
    title: "Stormwater Filtration",
    paragraphs: [
      "Urban and suburban stormwater carries pollutants -- heavy metals, hydrocarbons, excess nutrients, and sediment -- into waterways, degrading aquatic ecosystems and threatening drinking water supplies. Biochar-based filtration media can remove up to 90% of dissolved heavy metals and 80% of phosphorus from stormwater runoff in properly designed systems.",
      "Biochar performs well in bioretention cells, rain gardens, green roofs, and engineered filter cartridges. Its extremely high surface area (typically 200-400 m2/g) provides abundant adsorption sites, while its granular structure maintains hydraulic conductivity even under sustained flow. Many municipalities and stormwater utilities are now specifying biochar as part of their green infrastructure programs.",
    ],
    benefits: [
      "Removes 80-90% of dissolved heavy metals (Pb, Cu, Zn, Cd)",
      "Adsorbs phosphorus, nitrogen, and organic pollutants",
      "Maintains hydraulic conductivity under heavy rainfall",
      "Lasts 10-20 years before media replacement is needed",
      "Qualifies for stormwater credits in many jurisdictions",
      "Compatible with bioretention cells, rain gardens, and filter cartridges",
    ],
  },
  {
    id: "remediation",
    title: "Environmental Remediation",
    paragraphs: [
      "Contaminated soils and sediments present costly remediation challenges for site owners, developers, and government agencies. Biochar offers an in-situ stabilization approach that immobilizes contaminants -- including heavy metals, PAHs, pesticides, and petroleum hydrocarbons -- without the expense and disruption of excavation and off-site disposal.",
      "When blended into contaminated soil, biochar adsorbs organic pollutants onto its surface and locks heavy metals into stable complexes that resist leaching. Peer-reviewed studies show that biochar amendments can reduce bioavailable concentrations of lead, cadmium, and zinc by 40-90%, lowering risk to human health and ecosystems. It is increasingly accepted by state regulators as part of Remedial Action Plans.",
    ],
    benefits: [
      "Immobilizes heavy metals (Pb, Cd, Zn, As) in contaminated soils",
      "Adsorbs PAHs, pesticides, and petroleum hydrocarbons",
      "Reduces leachate concentrations by 40-90% in field studies",
      "Lower cost than excavation and landfill disposal",
      "Accepted by many state environmental agencies",
      "Can be combined with phytoremediation for enhanced results",
    ],
  },
  {
    id: "concrete",
    title: "Concrete & Asphalt",
    paragraphs: [
      "The construction industry is the largest single source of industrial CO2 emissions, with Portland cement alone accounting for roughly 8% of global emissions. Biochar is emerging as a functional additive in both concrete and asphalt that can reduce the carbon footprint of these materials while improving key performance properties.",
      "In concrete, biochar acts as an internal curing agent and micro-filler. Research shows that replacing 2-5% of cement by weight with biochar can maintain or even improve compressive strength, while reducing water permeability and shrinkage cracking. In asphalt, biochar modifies the binder to increase rutting resistance and extend pavement life. Early adopters in the road construction sector are using biochar-modified asphalt in pilot projects across North America and Europe.",
    ],
    benefits: [
      "Replaces 2-5% of cement by weight, reducing embodied carbon",
      "Maintains or improves compressive strength in concrete mixes",
      "Reduces water permeability and shrinkage cracking",
      "Increases rutting resistance and fatigue life in asphalt",
      "Contributes to green building certifications (LEED, Envision)",
      "Creates a durable carbon sink within the built environment",
    ],
  },
  {
    id: "composting",
    title: "Composting Enhancement",
    paragraphs: [
      "Adding biochar to compost accelerates the composting process and produces a higher-quality finished product. Biochar provides habitat for the thermophilic microorganisms that drive decomposition, maintains aerobic conditions through its porous structure, and adsorbs ammonia and other volatile compounds that would otherwise be lost as greenhouse gases.",
      "Compost producers who blend biochar into their feedstock at 5-15% by volume report faster temperature rise, shorter cycle times, and measurably lower odor emissions. The finished biochar-compost blend delivers the immediate nutrient value of compost together with the long-term soil structure and carbon storage benefits of biochar -- a combination that commands premium pricing in retail and wholesale markets.",
    ],
    benefits: [
      "Accelerates composting by providing microbial habitat",
      "Reduces ammonia and N2O emissions by 30-60%",
      "Lowers odor complaints at composting facilities",
      "Shortens composting cycle times",
      "Produces a premium-priced biochar-compost blend",
      "Retains nutrients in the finished product for slow release",
    ],
  },
  {
    id: "livestock",
    title: "Livestock Bedding",
    paragraphs: [
      "Biochar is gaining traction as a bedding additive and feed supplement in dairy, poultry, and swine operations. When used in animal bedding, biochar adsorbs ammonia and moisture, reducing odor and improving hoof and respiratory health. After use, the nutrient-charged bedding becomes an exceptional fertilizer -- the biochar has already captured nitrogen and phosphorus from manure, preventing nutrient loss when the material is field-applied.",
      "Some operations also add small quantities of biochar directly to animal feed. Preliminary research indicates improvements in feed conversion efficiency, gut health, and reduced enteric methane emissions in ruminants. While feed applications are still an emerging area, bedding use is well-established and adopted by farms across the US.",
    ],
    benefits: [
      "Adsorbs ammonia and moisture in barn environments",
      "Improves air quality and reduces respiratory issues",
      "Nutrient-charged bedding becomes a premium fertilizer",
      "Reduces manure odor during storage and field application",
      "May improve feed conversion and gut health when used as a supplement",
      "Creates a closed-loop nutrient cycle on the farm",
    ],
  },
  {
    id: "carbon-credits",
    title: "Carbon Removal Credits",
    paragraphs: [
      "Biochar is one of the few engineered carbon removal pathways with proven durability. Because pyrolysis converts labile biomass carbon into a highly stable aromatic form, biochar locks carbon out of the atmosphere for centuries. This permanence -- measured in hundreds to thousands of years -- makes biochar-based carbon removal credits among the most credible in the voluntary carbon market.",
      "iNBIO supports customers through the full carbon credit lifecycle: feedstock traceability, process data logging, biochar characterization, and registry submission under protocols such as Puro.earth, Verra, and the European Biochar Certificate (EBC). Current market prices for high-quality biochar carbon removal credits range from $100 to $200+ per tonne of CO2 equivalent, creating a significant revenue stream that can offset product costs or generate standalone income.",
    ],
    benefits: [
      "Sequesters carbon for 500-1,000+ years (proven durability)",
      "Credits priced at $100-$200+ per tonne CO2e in current markets",
      "Accepted by Puro.earth, Verra, and European Biochar Certificate",
      "iNBIO provides full documentation and registry support",
      "Stacks with product revenue for dual income streams",
      "Growing demand from corporate net-zero commitments",
    ],
  },
];

export default function BiocharApplicationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3">
              Biochar Applications
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Biochar for Soil, Water &amp;{" "}
              <span className="text-accent-light">Construction</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              From farm fields to city streets, biochar is solving real
              problems in agriculture, water management, remediation, and the
              built environment. Explore the applications driving demand for
              this versatile carbon material.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote-products"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/biochar"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors"
              >
                Our Biochar Products
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Description */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-text">
                  {app.title}
                </h2>
                {app.paragraphs.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="mt-4 text-text-light leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
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
            Ready to Put Biochar to Work?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Whether you need a truckload for your farm, filter media for a
            stormwater project, or carbon credits for your sustainability
            program, we can help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/biochar"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
            >
              Explore Our Biochar
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biochar for Stormwater Management & Filtration | iNBIO",
  description:
    "How biochar filters heavy metals, nutrients, and hydrocarbons from stormwater runoff — practical guidance from a biochar producer working with stormwater engineers.",
};

export default function BiocharStormwaterPost() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-dark text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors mb-8"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Biochar
            </span>
            <span className="inline-block bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Water Management
            </span>
            <span className="inline-block bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Environmental Solutions
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Biochar for Stormwater Management: A Supplier&apos;s Practical Guide
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
            <span>By Raj Kathuria</span>
            <span className="hidden sm:inline">|</span>
            <span>March 2026</span>
            <span className="hidden sm:inline">|</span>
            <span>12 min read</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg text-text leading-relaxed">
            <p>
              Stormwater engineers have been calling us more in the past two years
              than in the previous five combined. The question is almost always the
              same: &ldquo;Can your biochar meet spec for a stormwater filter
              installation?&rdquo; The answer is yes — but the conversation that
              follows is usually more nuanced than they expect.
            </p>

            <p>
              <Link
                href="/biochar"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                Biochar
              </Link>{" "}
              is proving itself as a stormwater filter medium in projects across
              the country, from parking lot bioretention cells to highway median
              filters. But getting it right requires understanding what makes
              biochar work in this application, which pollutants it handles best,
              and how to spec it properly. We&apos;ve shipped biochar into enough of
              these projects to have opinions on all of the above.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              The Problem Biochar Is Solving
            </h2>

            <p>
              Rain hits a parking lot and picks up copper from brake dust, zinc
              from tire wear, phosphorus from landscaping fertilizer, and petroleum
              from every car that&apos;s ever dripped a little oil. That runoff goes
              into a storm drain and, in most municipalities, straight into a creek
              or river. No treatment.
            </p>

            <p>
              This isn&apos;t a minor issue. Stormwater is now the leading source of
              water quality impairment in urban waterways across the U.S. And
              regulations are tightening. MS4 permits are getting stricter. TMDLs
              for nutrients and metals are driving municipalities to retrofit
              infrastructure that was designed to move water fast, not clean it.
            </p>

            <p>
              Traditional stormwater systems — detention ponds, concrete channels,
              pipe networks — manage volume. They weren&apos;t built to remove
              dissolved pollutants. That&apos;s the gap biochar fills.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              What Makes Biochar So Effective at Filtering Water
            </h2>

            <p>
              We produce biochar through fast pyrolysis at 450–550&deg;C. At those
              temperatures, the woody feedstock&apos;s cellular structure carbonizes
              and becomes extraordinarily porous. A single gram of our biochar has
              200–400 square meters of internal surface area. That&apos;s roughly the
              floor space of a two-bedroom apartment packed into something smaller
              than a pencil eraser.
            </p>

            <p>
              All that surface area does useful work in four distinct ways.
            </p>

            <p>
              <strong>Chemical adsorption</strong> is the big one. Biochar surfaces
              carry functional groups — carboxyl, hydroxyl, phenolic — that grab
              dissolved pollutants through cation exchange and electrostatic
              attraction. Heavy metal ions like Cu<sup>2+</sup>, Zn<sup>2+</sup>,
              Pb<sup>2+</sup>, and Cd<sup>2+</sup> bind directly to these sites.
              This is why biochar consistently outperforms plain sand for dissolved
              metals removal — sand has no chemical affinity for dissolved ions.
            </p>

            <p>
              <strong>Physical filtration</strong> traps suspended sediment and
              particulate-bound pollutants in biochar&apos;s pore network. Think of it
              as a sponge with an extremely complex internal geometry.
            </p>

            <p>
              <strong>Hydrocarbon capture</strong> works because biochar&apos;s carbon
              surface has a natural affinity for nonpolar organic compounds. Oil,
              grease, PAHs — they stick to biochar the way they stick to activated
              carbon, because biochar essentially is a form of activated carbon,
              just produced differently.
            </p>

            <p>
              <strong>Biological colonization</strong> is the slow-burn advantage.
              Over months, microbial communities colonize biochar&apos;s pores and
              start actively degrading organic pollutants and transforming nitrogen
              compounds through nitrification and denitrification. A biochar filter
              that&apos;s been in the ground for a year actually performs better for
              nitrogen removal than the day it was installed. That&apos;s unusual for a
              filter medium.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              Pollutant Removal: What the Data Shows
            </h2>

            <p>
              We get asked for removal numbers constantly, so here&apos;s what
              published research and field monitoring consistently report:
            </p>

            <p>
              <strong>Heavy metals</strong> — 70–95% removal of dissolved copper,
              zinc, and lead at concentrations typical of urban runoff. This is
              biochar&apos;s strongest suit. We&apos;ve seen lab results from partner
              projects that hit 90%+ for copper, which is the metal most
              stormwater permits target in our region.
            </p>

            <p>
              <strong>Phosphorus</strong> — 40–80% reduction in total phosphorus.
              Dissolved phosphate adsorbs onto biochar surfaces, though removal
              rates vary with biochar chemistry. Some manufacturers amend their
              biochar with iron or aluminum to boost phosphorus capture. We
              haven&apos;t gone that route yet — our standard product performs well
              enough for most stormwater specs without additives.
            </p>

            <p>
              <strong>Nitrogen</strong> — 50–80% removal of ammonium via cation
              exchange. Nitrate is trickier. Biochar doesn&apos;t adsorb nitrate well
              on its own, but those microbial communities that colonize the pores
              over time handle it through denitrification. If nitrate is your
              primary target, design for longer contact time and deeper media beds.
            </p>

            <p>
              <strong>Petroleum hydrocarbons</strong> — typically 80%+ removal.
              Biochar&apos;s carbon surface is naturally hydrophobic enough to capture
              oils and PAHs effectively.
            </p>

            <p>
              <strong>Total suspended solids</strong> — above 85% removal in
              properly designed systems, which usually exceeds regulatory
              benchmarks.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              Where We See the Most Demand
            </h2>

            <p>
              Not all biochar stormwater applications are equally mature. Some are
              well-proven with years of field data. Others are promising but still
              early. We see the distinction clearly in our order patterns.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-text mt-10 mb-3">
              Parking Lot Bioretention — The Workhorse
            </h3>

            <p>
              This is where most of our stormwater biochar goes. Parking lots are
              among the dirtiest impervious surfaces — brake dust, tire rubber,
              motor oil, deicing salt. Bioretention cells with biochar-sand filter
              media handle that pollutant mix better than conventional soil-based
              bioretention, particularly for dissolved metals and phosphorus that
              pass right through regular soil.
            </p>

            <p>
              Commercial developers like this application because it often lets
              them meet enhanced stormwater requirements without increasing the
              footprint of their treatment area. The biochar does more work per
              square foot than standard media.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-text mt-10 mb-3">
              Urban Green Infrastructure Retrofits
            </h3>

            <p>
              Cities adding rain gardens, tree box filters, and stormwater planters
              to existing neighborhoods are specifying biochar-amended media more
              often. The reason is simple: space is tight in urban retrofits, and
              biochar&apos;s high removal efficiency per unit volume means you can
              treat more runoff in a smaller footprint. We&apos;ve been getting
              inquiries from Mid-Atlantic municipalities dealing with Chesapeake
              Bay nutrient TMDL compliance — they need phosphorus removal in
              constrained spaces, and biochar delivers.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-text mt-10 mb-3">
              Highway and Roadway Filters
            </h3>

            <p>
              Linear biochar filter strips in highway medians and roadside swales
              are a growing application. Roadway runoff carries a particularly
              nasty mix — metals, hydrocarbons, and deicing chemicals — and DOT
              engineers are looking for filter media that can handle all three.
              Still, this application is newer, and long-term field performance
              data is thinner than for bioretention cells.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-text mt-10 mb-3">
              Construction Site Controls
            </h3>

            <p>
              Biochar filter socks placed around drain inlets and along site
              perimeters capture sediment and dissolved phosphorus that conventional
              silt fences miss entirely. This is a niche application but one where
              we&apos;ve seen genuinely enthusiastic adoption from contractors who are
              tired of getting violation notices for turbidity and nutrient
              exceedances.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-text mt-10 mb-3">
              Agricultural Drainage Filters
            </h3>

            <p>
              Biochar media at tile drain outlets intercepting nutrient-rich
              agricultural runoff — this is where the science is compelling but
              field adoption is still early. Highly relevant in Chesapeake Bay and
              Gulf of Mexico watersheds with nutrient reduction targets. We think
              this will be a significant market within a few years, but right now
              it&apos;s mostly pilot projects and research installations.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              Biochar-Sand Blends: What We Tell Engineers
            </h2>

            <p>
              When we work with stormwater engineers on filter media design,
              here&apos;s what we walk them through.
            </p>

            <p>
              Biochar is almost never used alone in a stormwater filter. It&apos;s
              blended with sand — usually ASTM C33 concrete sand — at ratios of
              5–15% biochar by volume. The sand provides structural stability and
              hydraulic conductivity. The biochar provides the pollutant removal.
            </p>

            <p>
              Getting the ratio right matters. Too much biochar and you slow down
              the flow rate, risking surface ponding during heavy rain. Too little
              and you&apos;re not getting meaningful pollutant removal. For most
              projects, we recommend starting at 10% biochar by volume and
              adjusting based on pilot testing results.
            </p>

            <p>
              A few practical specifications we&apos;ve found make or break a project:
            </p>

            <ul className="list-disc pl-8 space-y-3 text-text">
              <li>
                <strong>Particle size:</strong> Biochar particles need to be graded
                to match the sand fraction. If the biochar is too fine, it washes
                out or clogs pore spaces. Too coarse and it creates preferential
                flow paths. We typically supply material screened to 0.5–4mm for
                stormwater blends.
              </li>
              <li>
                <strong>Hydraulic conductivity:</strong> A properly blended
                biochar-sand mix should flow at 5–25 inches per hour. That&apos;s fast
                enough to handle peak storm events without bypass, slow enough for
                meaningful contact time with the biochar surfaces.
              </li>
              <li>
                <strong>Media depth:</strong> Most designs call for 18–24 inches of
                filter media. Deeper beds give you more contact time and more
                adsorption capacity, but they also cost more and require deeper
                excavation. For typical parking lot bioretention, 18 inches works.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              Specifying the Right Biochar
            </h2>

            <p>
              This is the part most engineers get wrong on their first stormwater
              biochar project.
            </p>

            <p>
              Not all biochar is equivalent for water filtration. Biochar made from
              woody feedstocks at pyrolysis temperatures of 450–600&deg;C generally
              offers the best combination of surface area, cation exchange
              capacity, and structural durability for stormwater use. Biochar
              produced at lower temperatures has more functional groups but less
              stable carbon structure. Biochar produced at higher temperatures has
              greater surface area but fewer active binding sites. The sweet spot
              is in the middle, which is where our process operates.
            </p>

            <p>
              When you&apos;re evaluating biochar for a stormwater project, request
              these lab results from your supplier:
            </p>

            <ul className="list-disc pl-8 space-y-3 text-text">
              <li>BET surface area (look for 200+ m&sup2;/g)</li>
              <li>Cation exchange capacity</li>
              <li>pH (most woody biochars run 7–9)</li>
              <li>Ash content (lower is generally better for filtration)</li>
              <li>Particle size distribution matching your sand gradation</li>
              <li>
                Heavy metal content in the biochar itself (you don&apos;t want to add
                pollutants while trying to remove them)
              </li>
            </ul>

            <p>
              We provide all of these with every shipment. Not every supplier does.
              Ask.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              How Long Does It Last?
            </h2>

            <p>
              Biochar stormwater media has a functional lifespan of 5–15 years,
              depending on pollutant loading. As adsorption sites fill up, removal
              efficiency gradually declines. Heavy metal binding sites saturate
              first. Organic pollutant removal tends to hold up longer because of
              the ongoing biological activity in the pores.
            </p>

            <p>
              Plan for media replacement or regeneration as part of your long-term
              maintenance budget. The good news: spent biochar from a stormwater
              filter can often be beneficially reused as a soil amendment, as long
              as the accumulated pollutant concentrations fall within land
              application limits. It doesn&apos;t just go to landfill.
            </p>

            <p>
              For large or high-stakes installations, we strongly recommend column
              testing with actual site stormwater before committing to full-scale
              construction. A 3–6 month pilot test with monitoring gives you real
              breakthrough curves specific to your pollutant mix and flow rates. We
              can help set that up.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              Regulatory Notes
            </h2>

            <p>
              Most stormwater jurisdictions have either approved biochar-amended
              media as an accepted BMP or are in the process of doing so. Some
              jurisdictions — particularly in the Pacific Northwest and
              Mid-Atlantic — offer enhanced pollutant removal credits for biochar
              filter systems, which can reduce the required treatment volume and
              lower overall project costs.
            </p>

            <p>
              Coordinate with your local MS4 authority or state stormwater program
              early in design. We&apos;ve seen projects delayed because the engineer
              designed a biochar system without checking whether the local
              jurisdiction had an approval pathway for it. That&apos;s an avoidable
              headache.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              The Carbon Bonus
            </h2>

            <p>
              Every ton of biochar placed in a stormwater filter represents roughly
              700–800 kilograms of carbon locked in a stable form for centuries.
              That carbon came from biomass that pulled CO<sub>2</sub> from the
              atmosphere while growing. By sequestering it in biochar instead of
              letting the biomass decompose or burn, you&apos;re achieving genuine
              carbon removal.
            </p>

            <p>
              Some of our stormwater customers are using this angle in their
              sustainability reporting. A few are exploring whether the biochar in
              their stormwater systems qualifies for carbon removal credits. The
              market for that is still developing, but the science is solid.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              Working with iNBIO on Stormwater Projects
            </h2>

            <p>
              We produce biochar through fast pyrolysis of sustainably sourced
              woody biomass, with consistent specs suited to stormwater filtration.
              We&apos;ve supplied material for bioretention cells, green infrastructure
              retrofits, and pilot filter projects, and we work directly with
              engineers on media specifications.
            </p>

            <p>
              If you&apos;re designing a stormwater system and considering biochar,
              reach out before you finalize your spec. We can review your water
              quality targets, recommend a biochar-sand blend ratio, provide lab
              data on our current production, and ship samples for bench testing.
              Visit our{" "}
              <Link
                href="/biochar"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                biochar product page
              </Link>{" "}
              for current specifications, or explore the full range of{" "}
              <Link
                href="/biochar-applications"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                biochar applications
              </Link>{" "}
              we support.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text mb-8">Related Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/blog/biochar-vs-compost"
              className="block bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Biochar
              </span>
              <h3 className="text-lg font-bold text-text">
                Biochar vs. Compost
              </h3>
              <p className="mt-2 text-sm text-text-light">
                How biochar and compost compare as soil amendments, and why the
                best results come from using both together.
              </p>
            </Link>
            <Link
              href="/blog/biochar-carbon-credits"
              className="block bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Carbon Credits
              </span>
              <h3 className="text-lg font-bold text-text">
                Biochar Carbon Credits
              </h3>
              <p className="mt-2 text-sm text-text-light">
                How biochar qualifies for carbon removal credits, which
                registries to work with, and what the credits are worth.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need Biochar for a Stormwater Project?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            We work directly with engineers on media specifications, provide lab
            data, and ship samples for bench testing. Let&apos;s discuss your
            project.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

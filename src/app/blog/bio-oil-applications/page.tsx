import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "5 Industrial Applications of Bio-Oil You Should Know | iNBIO",
  description:
    "iNBIO's Raj Kathuria shares which bio-oil applications are commercially ready today, which are emerging, and what the real economics look like for each — from process heat to SAF.",
};

export default function BioOilApplicationsPost() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors mb-6"
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
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white">
                Biofuels
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              5 Industrial Applications of Bio-Oil You Should Know
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
              <span className="font-medium text-white/90">Raj Kathuria</span>
              <span>&middot;</span>
              <time dateTime="2026-03-12">March 12, 2026</time>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured image */}
          <div className="mb-10 rounded-xl overflow-hidden">
            <Image
              src="/images/20230810_123159.jpg"
              alt="Bio-oil produced by iNBIO through fast pyrolysis of biomass"
              width={1200}
              height={630}
              className="w-full h-auto object-cover rounded-xl"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-text-light leading-relaxed">
              A food processing plant in the mid-Atlantic was spending $380,000
              a year on No. 2 fuel oil for process steam. They also had a pile
              of organic waste they were paying to haul away. When they asked us
              whether pyrolysis could solve both problems at once, that&apos;s
              the kind of conversation that gets us out of bed in the morning.
              The answer was yes — and bio-oil was the product that made the
              economics work.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              We run into a version of this scenario regularly. An operations
              manager or sustainability director has a fossil fuel dependency
              they need to reduce, a waste stream they need to manage, or both.
              Bio-oil — the liquid product of fast pyrolysis — keeps showing up
              as the answer, and not just for heating. The range of industrial
              applications is broader than most people realize, and several of
              them are commercially proven right now.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Here are the five we see the most traction on, along with our
              honest assessment of where each one actually stands.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              A Quick Primer on Bio-Oil
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              Bio-oil (you&apos;ll also hear it called pyrolysis oil, pyrolysis
              liquid, or bio-crude) is what you get when you heat biomass to
              400&deg;C to 550&deg;C in an oxygen-free reactor for 1 to 2
              seconds, then rapidly condense the vapors. Fast pyrolysis
              typically yields 60% to 75% bio-oil by weight, with biochar and
              syngas as the other products.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              It&apos;s not a drop-in replacement for petroleum in most
              applications — we&apos;re upfront about that. It has
              characteristics that require equipment consideration: an energy
              density of 16 to 19 MJ/kg (roughly 40% to 45% of No. 2 fuel
              oil), it&apos;s denser than water at 1.1 to 1.3 kg/L, it carries
              15% to 30% water content, and it&apos;s acidic at pH 2.0 to 3.5,
              which means your storage and handling materials matter. The 35% to
              40% oxygen content by weight is what drives the lower heating
              value compared to hydrocarbons.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              None of these are dealbreakers. They&apos;re engineering problems
              with known solutions. For a closer look at how we produce it,
              visit our{" "}
              <Link
                href="/biofuels"
                className="text-primary hover:text-primary-dark font-medium underline underline-offset-2"
              >
                biofuels page
              </Link>
              .
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              1. Industrial Boilers and Process Heat
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              This is the application we recommend most often for clients who
              are new to bio-oil. It&apos;s the most commercially mature, the
              technology is well understood, and in many cases the economics
              work without any subsidies.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              The setup is straightforward. Bio-oil gets atomized and combusted
              in modified boiler burners to produce steam or hot water. The
              modifications are real but not exotic: upgraded atomization nozzles
              to handle bio-oil&apos;s higher viscosity, corrosion-resistant
              fuel lines and storage tanks (stainless steel or HDPE for the
              acidity), and adjusted combustion parameters for the water content
              and different heating value.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              We see the strongest fit for food processing plants that need
              process steam, lumber and paper mills that are already generating
              biomass waste on-site, district heating systems in regions with
              carbon reduction mandates, and greenhouse operations looking for
              renewable heat. That&apos;s not an exhaustive list, but those are
              the conversations we have most often.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              The performance data from commercial installations backs this up.
              Combustion efficiencies run 85% to 92%, which is comparable to
              fuel oil systems. SO<sub>x</sub> emissions are essentially zero
              because biomass contains negligible sulfur. Particulate emissions
              are manageable with standard flue gas treatment. And the CO
              <sub>2</sub> is biogenic — the carbon was pulled from the
              atmosphere by the source biomass recently, so it&apos;s considered
              carbon neutral.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              From what we&apos;ve seen, this is the lowest-risk entry point. If
              you&apos;re evaluating bio-oil for the first time, start here.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              2. Combined Heat and Power (CHP)
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              CHP takes the process heat application a step further: you
              generate electricity and capture the waste heat, pushing overall
              energy efficiency to 70% to 85%. That&apos;s significantly better
              than producing heat and power separately.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Bio-oil fuels a combustion engine, gas turbine, or Stirling engine
              driving an electrical generator. The waste heat from power
              generation gets captured for space heating, process heat, or hot
              water. Some installations run dual-fuel configurations, blending
              bio-oil with natural gas or diesel for combustion stability.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Here&apos;s where we give a candid warning: CHP on bio-oil demands
              more attention to fuel quality than simple boiler combustion.
              Variations in water content, viscosity, and particulate levels can
              affect engine performance and maintenance intervals.
              Pre-filtration, fuel blending, and temperature management are
              standard practices, but they add operational complexity. Current
              installations range from 100 kW to 5 MW electrical output —
              suitable for industrial facilities, agricultural operations, and
              community-scale energy systems.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              The economic case is strong when it works:
            </p>

            <ul className="mt-4 space-y-3 text-text-light">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  Revenue from electricity sales (or avoided purchases) plus
                  heat utilization
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  Renewable energy credits or feed-in tariff payments, depending
                  on your jurisdiction
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  Reduced grid dependence and less exposure to energy price
                  swings
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  Carbon reduction credits for displacing fossil-fueled heat and
                  power
                </span>
              </li>
            </ul>

            <p className="mt-6 text-text-light leading-relaxed">
              We believe CHP will be a growth area for bio-oil, but it requires
              more operational sophistication than boiler applications. It&apos;s
              a good fit for facilities that already have engineering staff
              managing energy systems.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              3. Sustainable Aviation Fuel (SAF) Feedstock
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              This is the application that gets the most headlines, and for good
              reason. Aviation accounts for about 2.5% of global CO<sub>2</sub>{" "}
              emissions, and unlike cars and trucks, planes can&apos;t run on
              batteries. They&apos;re too heavy. SAF is the primary
              decarbonization pathway for aviation for at least the next two to
              three decades, and bio-oil from fast pyrolysis is emerging as a
              key feedstock.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              The technical pathway: bio-oil undergoes catalytic upgrading
              (hydrodeoxygenation) to strip out the oxygen, reduce water
              content, and boost energy density. The upgraded bio-oil then gets
              co-processed or refined in conventional petroleum refinery
              infrastructure to produce jet fuel meeting ASTM D7566
              specifications. The co-processing route has been approved under
              ASTM&apos;s provisions, allowing refineries to blend up to 5%
              upgraded bio-oil into their existing crude feedstock. Standalone
              refining pathways are also in development.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              The regulatory push behind SAF is intense. The EU&apos;s ReFuelEU
              mandate requires 2% SAF blending by 2025, rising to 6% by 2030
              and 70% by 2050. The U.S. SAF Grand Challenge targets 3 billion
              gallons annually by 2030. CORSIA (the International Civil Aviation
              Organization&apos;s reduction scheme) creates global demand. Major
              airlines have signed multi-billion-dollar offtake agreements.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Bio-oil from fast pyrolysis achieves lifecycle greenhouse gas
              reductions of 50% to 85% versus conventional jet fuel, meeting SAF
              sustainability thresholds comfortably.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Our honest take: SAF represents a massive market opportunity for
              bio-oil producers, but the upgrading and refining steps are
              capital-intensive and require partnerships with refineries. This
              isn&apos;t something a standalone pyrolysis operator will do alone.
              We see it as a feedstock supply play — produce high-quality bio-oil
              and sell it into the SAF supply chain. The demand is there and
              growing fast.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              4. Marine Fuel Blending
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              Maritime shipping burns roughly 300 million tons of fuel a year,
              and the International Maritime Organization has set targets to cut
              greenhouse gas intensity by 40% by 2030 with net-zero by around
              2050. That&apos;s a staggering amount of fuel that needs to get
              cleaner.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Bio-oil can be blended with heavy fuel oil (HFO) or marine gas oil
              (MGO) at 5% to 20% ratios with relatively minor modifications to
              existing ship fuel systems. The blended fuel reduces fossil carbon
              intensity while leveraging existing bunkering infrastructure.
              Higher blend ratios need more significant upgrades — upgraded fuel
              pumps, heated storage (bio-oil&apos;s viscosity climbs at lower
              temperatures), and corrosion-resistant piping.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Three regulatory drivers make this interesting right now. The IMO
              2020 sulfur cap (0.50%) — bio-oil&apos;s near-zero sulfur content
              helps operators comply without expensive scrubber systems. The EU
              ETS for shipping, which started pricing maritime emissions in
              European waters in 2024. And the FuelEU Maritime regulation
              mandating progressive reductions in marine fuel greenhouse gas
              intensity.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              One technical detail that works in bio-oil&apos;s favor here: its
              high density (1.1 to 1.3 kg/L) actually carries more energy per
              unit volume than lighter alternatives like LNG or methanol. For
              ships where tank space is at a premium, that matters.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              We see marine fuel as an emerging application with real momentum.
              The regulatory pressure is only going to increase. But it&apos;s
              still early — most activity is in pilot programs and blending
              trials rather than large-scale commercial procurement. We&apos;re
              watching this space closely.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              5. Asphalt Binder Modification
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              This one surprises people. It surprised us, too, when we first
              started getting inquiries from road construction companies.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Bio-oil contains phenolic compounds, oligomeric lignin fragments,
              and other complex organic molecules with chemical similarities to
              components in petroleum asphalt. Researchers and DOTs have found
              that adding 5% to 25% bio-oil to conventional asphalt binder can
              improve low-temperature cracking resistance (extending pavement
              life in cold climates), reduce binder viscosity so you can mix and
              compact at lower temperatures (warm-mix asphalt, saving energy
              during construction), partially replace petroleum-derived binder,
              and act as a rejuvenator for reclaimed asphalt pavement (RAP),
              restoring aged binder properties and enabling higher recycling
              rates.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              The research backing is solid. Iowa State University demonstrated
              that bio-oil modified binders met Superpave performance specs
              while cutting petroleum binder use by up to 25%. Field trials
              across several U.S. states have shown comparable or improved
              rutting resistance and moisture damage performance. The National
              Center for Asphalt Technology (NCAT) has included bio-oil modified
              sections in its test track program.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              The market potential is huge on paper. The U.S. consumes
              approximately 20 million tons of asphalt binder annually. Even 10%
              market penetration for bio-oil modification would mean 2 million
              tons of bio-oil demand per year. State and federal infrastructure
              programs are increasingly including sustainability requirements
              that favor bio-based materials.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Where does this actually stand? We&apos;d call it a late-stage
              emerging application. The science is proven. The field trials look
              good. But widespread commercial adoption is still ramping up. We
              expect this to grow significantly over the next five years,
              especially as state DOTs build bio-oil into their specifications.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              For more on how bio-oil fits into renewable fuel and material
              supply chains, explore our{" "}
              <Link
                href="/biofuel-applications"
                className="text-primary hover:text-primary-dark font-medium underline underline-offset-2"
              >
                biofuel applications page
              </Link>
              .
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              What Bio-Oil Actually Costs
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              Production costs currently run $0.50 to $1.50 per gallon,
              depending on feedstock cost, plant scale, and technology. Compared
              to the alternatives:
            </p>

            <ul className="mt-4 space-y-3 text-text-light">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  No. 2 fuel oil: $2.50 to $4.00 per gallon (and you&apos;re
                  riding the crude oil rollercoaster)
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  Natural gas equivalent: $0.80 to $2.00 per gallon equivalent
                  (varies heavily by region)
                </span>
              </li>
            </ul>

            <p className="mt-6 text-text-light leading-relaxed">
              On pure energy cost per BTU, bio-oil doesn&apos;t always win
              against fossil fuels. We&apos;re straightforward about that. But
              energy cost is only one line item. When you add carbon credit
              revenue, renewable fuel incentives (RINs, LCFS credits), avoided
              waste disposal costs for the feedstock, and price stability —
              biomass prices don&apos;t spike when there&apos;s a crisis in the
              Middle East — the total economic picture shifts, often
              dramatically. For organizations already facing carbon cost exposure
              or sustainability mandates, bio-oil frequently comes out ahead on
              a fully loaded basis.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              Where We See This Heading
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              We&apos;ve been producing bio-oil from biomass waste at iNBIO long
              enough to have watched the market shift from &quot;interesting
              concept&quot; to &quot;active procurement.&quot; The trajectory is
              clear, but it&apos;s not uniform across all five applications.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Process heat is ready now. CHP is ready for operators with the
              technical sophistication to manage it. SAF feedstock demand is
              scaling fast and will likely be the highest-volume market within a
              decade. Marine fuel is real but still early. Asphalt modification
              has strong science behind it and is waiting for the procurement
              infrastructure to catch up.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Our systems are built for feedstock flexibility and consistent
              product quality because we knew early on that bio-oil would need
              to meet different specs for different end uses. That&apos;s not an
              afterthought — it&apos;s core to how we designed the technology.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              If you&apos;re evaluating bio-oil for a specific application,
              we&apos;re happy to talk specifics. Visit our{" "}
              <Link
                href="/biofuels"
                className="text-primary hover:text-primary-dark font-medium underline underline-offset-2"
              >
                biofuels page
              </Link>{" "}
              for details on our production capabilities, or check our{" "}
              <Link
                href="/biofuel-applications"
                className="text-primary hover:text-primary-dark font-medium underline underline-offset-2"
              >
                biofuel applications page
              </Link>{" "}
              to see how the use cases map to different industries. The practical
              question is usually not whether bio-oil works for your application
              — it&apos;s which application delivers the best return for your
              particular situation.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text">
            Related Posts
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/blog/what-is-fast-pyrolysis"
              className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow group"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-3">
                Technology
              </span>
              <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                What Is Fast Pyrolysis? How We Actually Turn Biomass into Fuel
              </h3>
              <p className="mt-2 text-sm text-text-light">
                How our pyrolysis process works from the inside.
              </p>
            </Link>
            <Link
              href="/blog/biochar-vs-compost"
              className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow group"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 mb-3">
                Agriculture
              </span>
              <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                Biochar vs. Compost: What We&apos;ve Learned Producing One and
                Recommending Both
              </h3>
              <p className="mt-2 text-sm text-text-light">
                An honest comparison from a biochar producer.
              </p>
            </Link>
            <Link
              href="/blog/biochar-carbon-credits"
              className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow group"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800 mb-3">
                Carbon Markets
              </span>
              <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                How Biochar Carbon Credits Work: A Guide for Landowners and
                Producers
              </h3>
              <p className="mt-2 text-sm text-text-light">
                The path from production to carbon credit revenue, explained.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Evaluating Bio-Oil for Your Operation?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            We can help you determine which application delivers the best return
            for your specific situation and waste stream.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sustainable Aviation Fuel from Biomass Pyrolysis | iNBIO",
  description:
    "How fast pyrolysis bio-oil feeds the sustainable aviation fuel supply chain — from biomass waste to jet-ready fuel. A practitioner's view from iNBIO.",
};

export default function SustainableAviationFuelPost() {
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
              Biofuels
            </span>
            <span className="inline-block bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Sustainable Aviation
            </span>
            <span className="inline-block bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Clean Energy
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Sustainable Aviation Fuel from Biomass Pyrolysis: Where iNBIO Fits In
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
            <span>By Raj Kathuria</span>
            <span className="hidden sm:inline">|</span>
            <span>March 2026</span>
            <span className="hidden sm:inline">|</span>
            <span>10 min read</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured image */}
          <div className="mb-10 rounded-xl overflow-hidden">
            <Image
              src="/images/iStock-1345835865-1-scaled.jpg"
              alt="Sustainable aviation fuel from biomass pyrolysis bio-oil"
              width={1200}
              height={630}
              className="w-full h-auto object-cover rounded-xl"
              priority
            />
          </div>

          <div className="space-y-6 text-lg text-text leading-relaxed">
            <p>
              When people ask us what bio-oil is actually used for, sustainable
              aviation fuel is the answer that surprises them most. They expect us
              to say heating oil or industrial boiler fuel. But the highest-value
              pathway for pyrolysis bio-oil — and the one drawing the most
              investment right now — is upgrading it into drop-in jet fuel.
            </p>

            <p>
              We&apos;re a pyrolysis company, not an airline or a refinery. But our
              position in the SAF supply chain matters more than most people
              realize. The bottleneck for aviation decarbonization isn&apos;t refining
              technology. It&apos;s feedstock. Specifically, it&apos;s getting enough
              biomass-derived intermediates to the refineries that can turn them
              into jet fuel. That&apos;s exactly what we do at{" "}
              <Link
                href="/our-technology"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                iNBIO
              </Link>
              .
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              Why Aviation Can&apos;t Just Go Electric
            </h2>

            <p>
              A fully loaded 787 burns through about 5,400 gallons of jet fuel per
              hour. The energy density of kerosene is roughly 50 times that of the
              best lithium-ion batteries by weight. You can electrify a delivery
              van. You cannot electrify a transatlantic flight. Not with current
              physics.
            </p>

            <p>That&apos;s not pessimism. That&apos;s thermodynamics.</p>

            <p>
              Hydrogen has theoretical promise, but it requires completely new
              aircraft designs, new fueling infrastructure at every airport, and new
              safety protocols. Realistically, we&apos;re talking 2045 or later for any
              meaningful hydrogen-powered commercial aviation. The industry knows
              this. That&apos;s why every major airline decarbonization strategy centers
              on SAF — sustainable aviation fuel that works in today&apos;s engines,
              today&apos;s fuel trucks, and today&apos;s airport infrastructure.
            </p>

            <p>
              The numbers tell the story of how far behind production is: global SAF
              output covers less than 0.2% of jet fuel demand. Airlines have
              committed to net-zero by 2050. The EU is mandating 2% SAF blending
              starting in 2025, rising to 70% by 2050. ICAO&apos;s CORSIA program
              requires airlines to offset emissions on international routes, and SAF
              use counts directly toward compliance. U.S. federal tax credits under
              the Inflation Reduction Act offered $1.25–$1.75 per gallon for SAF
              production.
            </p>

            <p>
              The demand signal is massive and growing. The supply isn&apos;t there yet.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              What SAF Actually Is
            </h2>

            <p>
              SAF is jet fuel made from renewable or waste-derived feedstocks
              instead of crude oil. The critical word is &ldquo;drop-in&rdquo; — it meets the
              same ASTM D7566 specification as petroleum Jet A/A-1. No engine
              modifications. No infrastructure changes. Pilots don&apos;t even know the
              difference.
            </p>

            <p>
              Lifecycle greenhouse gas reductions range from 50–80% compared to
              fossil jet fuel, depending on the feedstock and production pathway.
              The carbon in SAF came from biomass that recently pulled CO
              <sub>2</sub> from the atmosphere, so burning it doesn&apos;t add net carbon
              the way burning 100-million-year-old petroleum does.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              From Woodchips to Jet Fuel: The Four-Step Pathway
            </h2>

            <p>
              There are seven ASTM-approved routes to SAF. The one most relevant to
              our work is the hydrotreated pyrolysis oil pathway, which takes
              bio-oil produced by fast pyrolysis and upgrades it into
              specification-grade jet fuel. We operate in Steps 1 and 2. Steps 3
              and 4 happen at specialized upgrading refineries.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-text mt-10 mb-3">
              Step 1: Fast Pyrolysis — Turning Biomass into Bio-Oil
            </h3>

            <p>
              Wood residues, forestry slash, agricultural waste — we take these
              feedstocks and process them in our fast pyrolysis reactors at
              450–550&deg;C in an oxygen-free environment. The biomass thermally
              decomposes in under 2 seconds. The vapors are rapidly condensed into
              bio-oil, with biochar and syngas as co-products.
            </p>

            <p>
              Bio-oil captures 40–70% of the energy in the original biomass and
              concentrates it into a pumpable liquid. One truckload of bio-oil
              carries the energy equivalent of roughly 15–20 truckloads of raw
              woodchips. That ratio is everything in this supply chain.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-text mt-10 mb-3">
              Step 2: Stabilization and Transport
            </h3>

            <p>
              Raw bio-oil needs stabilization before it ships. It&apos;s acidic and
              reactive — if you leave it sitting at high temperature, it
              polymerizes and thickens over time. We&apos;ve learned through our own
              operations that proper quenching and storage protocols make the
              difference between bio-oil that arrives at the refinery ready to
              process and bio-oil that&apos;s turned into a headache.
            </p>

            <p>
              Once stabilized, bio-oil moves by standard tanker truck, rail car, or
              barge. This is the step where distributed pyrolysis earns its keep: we
              can ship a dense liquid hundreds of miles economically, something that
              is completely impractical with bulky raw biomass.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-text mt-10 mb-3">
              Step 3: Catalytic Upgrading
            </h3>

            <p>
              At the refinery, bio-oil goes through catalytic hydrotreating.
              Hydrogen is added under high pressure and temperature with specialized
              catalysts. This strips the oxygen out of the bio-oil molecules, cracks
              larger chains, and converts the oxygenated organics into conventional
              hydrocarbons — diesel-range, gasoline-range, and kerosene-range
              molecules.
            </p>

            <p>
              We don&apos;t do this step ourselves. Upgrading requires refinery-scale
              capital, on the order of hundreds of millions of dollars. But we talk
              regularly with the companies building these facilities, and the
              question they ask us most often is simple: &ldquo;Can you guarantee
              feedstock supply?&rdquo; The answer to that question is what makes or
              breaks a refinery project&apos;s financing.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-text mt-10 mb-3">
              Step 4: Fractionation and Blending
            </h3>

            <p>
              The upgraded hydrocarbon stream gets distilled to separate the jet
              fuel fraction from diesel and gasoline cuts. The SAF fraction is
              tested against ASTM D7566, blended with conventional jet fuel
              (currently approved up to 50% blend ratios for most pathways),
              certified, and delivered to airports through the same fuel trucks and
              hydrant systems already in use.
            </p>

            <p>
              Nobody at the gate knows the plane is running on partially renewable
              fuel. That&apos;s the whole point.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              Why Distributed Pyrolysis Is the Missing Piece
            </h2>

            <p>
              The SAF supply chain has a fundamental mismatch: biomass is scattered
              across the landscape in low-density piles, but upgrading refineries
              need massive, concentrated volumes of feedstock to justify their
              capital costs. You can&apos;t profitably truck woodchips 200 miles to a
              refinery. The math doesn&apos;t work.
            </p>

            <p>
              We&apos;ve run the transport economics ourselves. Hauling raw wood chips
              costs $15–$30 per ton, and beyond about 50–75 miles, freight costs eat
              up whatever margin the biomass had. Bio-oil transport, on the other
              hand, is 15–20 times more cost-effective per unit of energy moved. A
              single tanker truck of bio-oil replaces a convoy of chip trucks.
            </p>

            <p>
              This is iNBIO&apos;s thesis: put small pyrolysis plants — our systems
              handle 5–75 tons per day — at the points where biomass waste is
              generated. Sawmills. Lumber yards. Agricultural processors. Each plant
              converts local waste into bio-oil, and that bio-oil feeds into a
              regional upgrading refinery. No 300-mile chip hauls. No
              multi-billion-dollar integrated biorefinery that has to source all its
              feedstock from a single region.
            </p>

            <p>
              The distributed model also reduces supply chain risk. A refinery
              depending on one giant biomass source is vulnerable to drought,
              wildfire, or a single supplier&apos;s business problems. A network of 10
              or 15 smaller pyrolysis plants, each drawing on different local
              feedstocks, is far more resilient.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              The Co-Product Advantage
            </h2>

            <p>
              One thing that makes the pyrolysis-to-SAF pathway economically
              interesting compared to other SAF routes: it produces biochar
              alongside the bio-oil.
            </p>

            <p>
              Biochar has its own revenue streams — soil amendment sales, carbon
              credit generation,{" "}
              <Link
                href="/biochar"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                industrial applications
              </Link>
              . When we run the economics on a pyrolysis plant, the biochar and
              syngas co-products can cover 30–40% of operating costs. That makes
              the bio-oil cheaper to produce than it would be from a system that
              only makes liquid fuel.
            </p>

            <p>
              There&apos;s a carbon sequestration angle too. When biochar goes into
              soil, that carbon stays locked up for hundreds to thousands of years.
              A pyrolysis-plus-SAF pathway where the biochar is sequestered can
              actually achieve net-negative lifecycle emissions. Not just
              carbon-neutral. Carbon-negative. That&apos;s a rare claim in the energy
              sector, and the carbon credit market is starting to price it
              accordingly.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              How Big Is This Market?
            </h2>

            <p>
              Global aviation burns roughly 350 billion liters of jet fuel per year.
              SAF currently supplies less than a billion liters of that. Industry
              roadmaps call for SAF to reach 10% of supply by 2030 — roughly a 50x
              increase from current production. IATA&apos;s net-zero pathway envisions
              SAF at 65% of total jet fuel by 2050, a market worth over $200
              billion annually.
            </p>

            <p>
              Major oil companies, airlines, and private equity firms have committed
              tens of billions to SAF production facilities. Those facilities will
              need feedstock. Bio-oil from distributed pyrolysis is one of the few
              intermediate products that can scale fast enough to fill the gap,
              because our plants can be deployed in 12–18 months, not 5–7 years
              like a greenfield refinery.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              What iNBIO Is Doing About It
            </h2>

            <p>
              We&apos;re not waiting for the SAF market to mature before positioning
              ourselves. We&apos;re actively working with{" "}
              <Link
                href="/our-technology"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                our modular pyrolysis systems
              </Link>{" "}
              to produce bio-oil that meets the specifications upgrading refineries
              require. We&apos;re in conversations with refinery developers about
              long-term offtake agreements. And we&apos;re scouting locations for
              distributed pyrolysis deployments near concentrated biomass sources on
              the Eastern Seaboard, where our proximity to both forestry resources
              and refining infrastructure gives us a logistics advantage.
            </p>

            <p>
              For sawmill operators, agricultural processors, and forestry managers
              sitting on piles of biomass waste, this represents something new: a
              buyer for material you&apos;re currently paying to get rid of. The SAF
              market turns that cost center into a revenue stream.
            </p>

            <p>
              If you&apos;re generating biomass waste and want to understand what it&apos;s
              worth as SAF feedstock, talk to us. Explore our{" "}
              <Link
                href="/biofuels"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                biofuels portfolio
              </Link>{" "}
              or take a look at{" "}
              <Link
                href="/our-technology"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                how our pyrolysis technology works
              </Link>
              . We&apos;ll run the numbers with you.
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
              href="/blog/what-is-fast-pyrolysis"
              className="block bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Technology
              </span>
              <h3 className="text-lg font-bold text-text">
                What Is Fast Pyrolysis?
              </h3>
              <p className="mt-2 text-sm text-text-light">
                The fundamentals of fast pyrolysis technology and how iNBIO uses
                it to convert biomass into valuable products.
              </p>
            </Link>
            <Link
              href="/blog/bio-oil-applications"
              className="block bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Biofuels
              </span>
              <h3 className="text-lg font-bold text-text">
                Bio-Oil Applications
              </h3>
              <p className="mt-2 text-sm text-text-light">
                Where bio-oil from fast pyrolysis is used today and the markets
                driving demand for this renewable liquid fuel.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Interested in the SAF Supply Chain?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            If you&apos;re generating biomass waste or exploring sustainable fuel
            opportunities, let&apos;s talk about how pyrolysis bio-oil fits into the
            picture.
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

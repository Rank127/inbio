import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Biochar in Concrete: How Buildings Became Carbon Sinks | iNBIO",
  description:
    "Holcim just poured net-zero concrete at Canary Wharf using biochar from coffee grounds. Here's what this means for biochar producers and the construction industry.",
};

export default function BiocharConcretePost() {
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
              Construction
            </span>
            <span className="inline-block bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Carbon Markets
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Holcim Just Proved Biochar Concrete Works at Scale &mdash; Here&apos;s What It Means
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
            <span>By Raj Kathuria</span>
            <span className="hidden sm:inline">|</span>
            <span>April 2026</span>
            <span className="hidden sm:inline">|</span>
            <span>9 min read</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured image */}
          <div className="mb-10 rounded-xl overflow-hidden">
            <Image
              src="/images/iStock-1185246772-768x512.jpg"
              alt="Modular industrial facility representing biochar production for construction applications"
              width={1200}
              height={630}
              className="w-full h-auto object-cover rounded-xl"
              priority
            />
          </div>

          <div className="space-y-6 text-lg text-text leading-relaxed">
            <p>
              Negative fourteen kilograms of CO<sub>2</sub> per cubic meter. That&apos;s
              the number Holcim UK posted from their Canary Wharf concrete pours
              &mdash; not low-carbon concrete, not reduced-carbon concrete, but
              concrete that stores more carbon than it emits. They did it by
              embedding biochar made from coffee grounds and coppiced wood directly
              into the mix.
            </p>

            <p>
              We&apos;ve been talking about{" "}
              <Link
                href="/biochar-applications#concrete"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                biochar in concrete
              </Link>{" "}
              for a while now. But there&apos;s a difference between lab results
              and full-scale construction pours on one of London&apos;s most
              prominent developments. That difference matters.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              What Holcim Actually Did
            </h2>

            <p>
              The project happened in three stages. First, a proof-of-concept pour
              for a public art installation &mdash; underwater counterweights for a
              10-meter sculpture called &ldquo;Whale on the Wharf.&rdquo; When
              that worked, they moved to a full-scale test slab beneath a new
              theatre venue at Wood Wharf in April 2025. Then came the real test:
              two-metre-deep raft slabs on Canary Wharf Group&apos;s Bank Street
              site in September 2025.
            </p>

            <p>
              The initial mix achieved 69 kgCO<sub>2</sub>e/m&sup3; &mdash; an 80%
              reduction compared to conventional Portland cement mixes. Further
              optimization pushed the net Global Warming Potential to -14
              kgCO<sub>2</sub>e/m&sup3;. The negative number comes from biogenic
              carbon stored in the biochar exceeding the fossil emissions from
              cement production and transport.
            </p>

            <p>
              The biochar itself came from waste streams collected on-site: spent
              coffee grounds from Canary Wharf&apos;s retailers and wood from
              coppicing operations. That&apos;s a feedstock story that resonates
              with developers who are already managing waste and looking for
              sustainability wins.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              Why 2&ndash;5% Replacement Is the Sweet Spot
            </h2>

            <p>
              Biochar doesn&apos;t replace cement one-for-one. Research shows that
              replacing 2&ndash;5% of cement by weight with biochar maintains or
              even improves compressive strength, while reducing water permeability
              and shrinkage cracking. Go above 5% without careful mix design and
              you start losing workability.
            </p>

            <p>
              At 2&ndash;5% replacement, the biochar acts as a micro-filler and
              internal curing agent. Its porous structure holds water that slowly
              releases during hydration, improving the cement cure. The result is
              denser, less permeable concrete with fewer micro-cracks &mdash; which
              is why some mixes actually test stronger than the control.
            </p>

            <p>
              Portland cement accounts for roughly 8% of global CO<sub>2</sub>{" "}
              emissions. Even a 2% replacement rate across a fraction of global
              concrete production would create enormous biochar demand. And unlike
              other cement alternatives, biochar doesn&apos;t just reduce emissions
              &mdash; it actively sequesters carbon inside the structure for the
              life of the building.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              What Concrete Producers Need from Biochar Suppliers
            </h2>

            <p>
              We&apos;ve had conversations with concrete batch plants, and their
              requirements are specific. They need:
            </p>

            <ul className="list-disc pl-8 space-y-3 text-text">
              <li>
                <strong>Consistent particle size distribution</strong> &mdash;
                biochar particles need to be milled and graded to match the fines
                fraction in their mix design. Too coarse and you get weak spots.
                Too fine and it absorbs too much mix water.
              </li>
              <li>
                <strong>Low ash content</strong> &mdash; high-ash biochar can
                interfere with cement chemistry. Woody feedstocks processed at
                450&ndash;550&deg;C produce biochar with the right balance of carbon
                content and low ash, which is exactly where our{" "}
                <Link
                  href="/our-technology"
                  className="text-primary hover:text-primary-dark underline transition-colors"
                >
                  fast pyrolysis process
                </Link>{" "}
                operates.
              </li>
              <li>
                <strong>Verified carbon content</strong> &mdash; for the carbon
                accounting to work, the biochar&apos;s fixed carbon content needs
                to be tested and documented. Buyers doing embodied carbon
                calculations need real numbers, not estimates.
              </li>
              <li>
                <strong>Supply reliability</strong> &mdash; a batch plant running
                300 yards a day can&apos;t have its biochar supplier run out. This
                is where{" "}
                <Link
                  href="/oem-equipment"
                  className="text-primary hover:text-primary-dark underline transition-colors"
                >
                  modular pyrolysis systems
                </Link>{" "}
                in the 25&ndash;75 TPD range become relevant. Consistent
                production, consistent supply.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              The Double Revenue Angle That Most People Miss
            </h2>

            <p>
              Here&apos;s where it gets interesting for biochar producers. Biochar
              embedded in concrete is permanently sequestered &mdash; it&apos;s not
              going anywhere for the life of the structure, which is typically
              50&ndash;100 years. That permanence qualifies for{" "}
              <Link
                href="/carbon-credits"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                carbon removal credits
              </Link>
              .
            </p>

            <p>
              So the math works like this: you sell the biochar to a concrete
              producer at a product margin, and you generate carbon credits from
              the sequestration. Two revenue streams from the same ton of biochar.
              With ICVCM now approving three biochar credit methodologies (CAR,
              Isometric, and Verra VM0044) and credits averaging $164/ton
              CO<sub>2</sub>, the economics are compelling.
            </p>

            <p>
              A 25 TPD pyrolysis system producing 6&ndash;10 tons of biochar per
              day, with even half going into concrete applications, could generate
              $200,000&ndash;$400,000 annually in carbon credit revenue on top of
              the product sales. That changes the ROI calculation for anyone
              evaluating a{" "}
              <Link
                href="/build-operate-plant"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                pyrolysis plant investment
              </Link>
              .
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              What&apos;s Holding It Back &mdash; And What Isn&apos;t
            </h2>

            <p>
              The honest assessment: biochar concrete is real but early in the U.S.
              market. Holcim&apos;s Canary Wharf project is in London. SCG Cement
              has poured 2,500+ cubic meters of biochar concrete in Thailand. But
              domestic adoption is still mostly pilot-scale.
            </p>

            <p>
              The barriers aren&apos;t technical. The concrete works. The barriers
              are:
            </p>

            <ul className="list-disc pl-8 space-y-3 text-text">
              <li>
                <strong>Specification inertia</strong> &mdash; structural engineers
                spec what they know. Getting biochar into ACI or ASTM standards
                takes time and data.
              </li>
              <li>
                <strong>Supply chain immaturity</strong> &mdash; most concrete
                batch plants don&apos;t have a biochar supplier yet. The logistics
                of getting biochar to batch plants at consistent quality and
                volume haven&apos;t been fully worked out.
              </li>
              <li>
                <strong>Cost perception</strong> &mdash; biochar adds cost to the
                mix. But when you factor in carbon credit revenue, green building
                certification benefits (LEED, Envision), and the premium some
                developers pay for low-carbon materials, the net cost is often
                zero or negative.
              </li>
            </ul>

            <p>
              None of these are permanent obstacles. They&apos;re the kind of
              friction that disappears once a few large projects prove the model
              &mdash; which is exactly what Holcim just did.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              Where This Goes Next
            </h2>

            <p>
              Holcim is one of the largest cement companies in the world. When they
              put biochar concrete on their &ldquo;5 construction innovations to
              watch in 2026&rdquo; list, that&apos;s a signal to the entire
              industry. Expect to see biochar show up in more green building
              specifications, more DOT pilot programs, and more developer RFPs over
              the next 12&ndash;18 months.
            </p>

            <p>
              For biochar producers, the question isn&apos;t whether this market
              will materialize &mdash; it&apos;s whether you&apos;ll have the
              production capacity and product consistency to serve it when it does.
              The concrete industry doesn&apos;t buy in small batches.
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
              href="/blog/biochar-carbon-credits"
              className="block bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Carbon Markets
              </span>
              <h3 className="text-lg font-bold text-text">
                Biochar Carbon Credits
              </h3>
              <p className="mt-2 text-sm text-text-light">
                How biochar qualifies for carbon removal credits, which
                registries to work with, and what the credits are worth.
              </p>
            </Link>
            <Link
              href="/blog/economics-pyrolysis"
              className="block bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Business
              </span>
              <h3 className="text-lg font-bold text-text">
                The Economics of Small-Scale Pyrolysis Plants
              </h3>
              <p className="mt-2 text-sm text-text-light">
                Real capital costs, revenue breakdowns, and ROI timelines for
                modular pyrolysis systems in the 5&ndash;75 TPD range.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need Biochar for Concrete Applications?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            We produce engineered biochar with consistent particle size, low ash
            content, and verified carbon content &mdash; spec&apos;d for
            construction use. Let&apos;s discuss your project.
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

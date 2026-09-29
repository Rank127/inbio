import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Biochar-as-a-Service: The Model Behind 2026's Newest Funding Rounds | iNBIO",
  description:
    "September 2026's biochar funding rounds — BIG's $1.5M pre-seed and PyroCCS's growth raise — share one idea: put the pyrolysis plant where the biomass already is. Here's why co-located, modular production is winning.",
};

export default function BlogPostBiocharAsAService() {
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
              Business
            </span>
            <span className="inline-block bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Market Trends
            </span>
            <span className="inline-block bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Technology
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Biochar-as-a-Service: The Model Behind 2026&apos;s Newest Funding
            Rounds
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
            <span>By Raj Kathuria</span>
            <span className="hidden sm:inline">|</span>
            <span>September 2026</span>
            <span className="hidden sm:inline">|</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured image */}
          <div className="mb-10 rounded-xl overflow-hidden">
            <Image
              src="/images/iStock-1185246772-scaled.jpg"
              alt="Modular containerized pyrolysis system deployed at a processing site"
              width={1200}
              height={630}
              className="w-full h-auto object-cover rounded-xl"
              priority
            />
          </div>

          <div className="space-y-6 text-lg text-text leading-relaxed">
            <p>
              Two biochar funding rounds closed within days of each other this
              September, and on the surface they look unrelated: a $1.5 million
              pre-seed for an Africa-focused startup, and a growth round for a
              German pyrolysis firm expanding across the Global South. Look
              closer and they&apos;re making the same bet &mdash; that the winning
              way to produce biochar is to put the plant where the biomass
              already is, and to run it as a service rather than a standalone
              facility.
            </p>

            <p>
              It&apos;s a quiet shift in how these projects get built, and
              it&apos;s worth understanding because it changes the math for anyone
              sitting on a waste stream.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              The Hidden Tax Nobody Talks About: Moving Biomass
            </h2>

            <p>
              Biomass is a terrible thing to transport. It&apos;s bulky, often
              wet, low in energy density, and it degrades. Haul crop residue or
              food-processing waste any real distance and the fuel, labor, and
              handling can quietly eat the margin before a single tonne of
              biochar is made. This is the reason a lot of promising pyrolysis
              projects pencil out on a spreadsheet and then stall in reality:
              the feedstock logistics were an afterthought.
            </p>

            <p>
              The two new rounds attack that problem head-on. Biochar Industrial
              Group (BIG) raised its{" "}
              <a
                href="https://biochartoday.com/news/biochar-industrial-group-secures-1-5m-pre-seed-funding-to-expand-factory-integrated-carbon-removal-in-sub-saharan-africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                $1.5 million pre-seed
              </a>{" "}
              to embed biochar units <em>inside</em> food-processing plants,
              turning the residue on-site into biochar and carbon-removal
              credits. Germany&apos;s{" "}
              <a
                href="https://biochartoday.com/news/pyroccs-secures-growth-funding-to-scale-pyrolysis-infrastructure-and-industrial-bioproduct-offtake-globally/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                PyroCCS
              </a>{" "}
              raised its first external round to manufacture modular units
              designed for rapid assembly right next to the feedstock. Different
              geographies, same insight: don&apos;t move the biomass to the
              plant &mdash; move the plant to the biomass.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              What &ldquo;Biochar-as-a-Service&rdquo; Actually Means
            </h2>

            <p>
              The service framing is more than branding. In the classic model, a
              producer buys feedstock, makes biochar, and sells it. In the
              service model, the party that <em>has</em> the waste &mdash; a food
              processor, a mill, a farm co-op &mdash; keeps doing its core
              business, and a pyrolysis operator handles the conversion on their
              site. The waste generator gets rid of a disposal headache; the
              operator gets a free, continuous, co-located feedstock supply and
              the carbon credits that come with permanent sequestration.
            </p>

            <p>
              That&apos;s a genuinely different risk profile. Feedstock is the
              single biggest variable in any pyrolysis project &mdash; it&apos;s
              why we spend so much time on{" "}
              <Link
                href="/blog/choosing-feedstock-pyrolysis"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                scoring a feedstock
              </Link>{" "}
              before anyone sizes a reactor. Co-location doesn&apos;t just cut
              transport cost; it removes the uncertainty of whether the biomass
              shows up at all. The waste is generated on the same footprint where
              it&apos;s converted.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              Modular Is the Thing That Makes It Possible
            </h2>

            <p>
              You can&apos;t drop a two-year, stick-built plant into a working
              factory yard. The service model only works if the production unit
              is small enough, standardized enough, and fast enough to install
              where the feedstock is. That&apos;s exactly why PyroCCS is putting
              its money into modular units built for field assembly &mdash; and
              it&apos;s the same reason{" "}
              <Link
                href="/blog/modular-pyrolysis-systems"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                we build our systems in shipping containers
              </Link>
              .
            </p>

            <p>
              A containerized plant ships as a unit, commissions in a fraction of
              the time of a bespoke build, and can be added in stages as feedstock
              and offtake grow. When supply is the market&apos;s bottleneck
              &mdash; and right now it is &mdash; speed to first production is a
              real competitive advantage. Our{" "}
              <Link
                href="/modular-systems"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                modular pyrolysis systems
              </Link>{" "}
              in the 5 to 75 TPD range are built for precisely this: capacity you
              can place next to the waste and scale on your own timeline.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              Why This Maps Onto How We Already Work
            </h2>

            <p>
              We&apos;ve been building toward this model because it&apos;s how the
              economics actually close. There are three ways a company can plug
              in, depending on how much of the operation it wants to own:
            </p>

            <ul className="list-disc pl-8 space-y-3 text-text">
              <li>
                <strong>Let us build and run it on your site.</strong> If you
                generate the waste but don&apos;t want to become a pyrolysis
                operator, our{" "}
                <Link
                  href="/build-operate-plant"
                  className="text-primary hover:text-primary-dark underline transition-colors"
                >
                  Build + Operate program
                </Link>{" "}
                develops, builds, and operates a plant matched to your feedstock
                and offtake &mdash; the service model in its purest form.
              </li>
              <li>
                <strong>Deploy modular capacity you control.</strong> If you want
                to own production, our{" "}
                <Link
                  href="/modular-systems"
                  className="text-primary hover:text-primary-dark underline transition-colors"
                >
                  modular systems
                </Link>{" "}
                let you add certifiable capacity in stages rather than betting
                everything on one large build.
              </li>
              <li>
                <strong>Buy the equipment outright.</strong> For operators who
                already have the site and the team, our{" "}
                <Link
                  href="/oem-equipment"
                  className="text-primary hover:text-primary-dark underline transition-colors"
                >
                  OEM equipment
                </Link>{" "}
                is engineered for the stable, documented operation that carbon
                registries reward.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              Two Revenue Lines From One Tonne
            </h2>

            <p>
              The reason investors are funding this model is that co-located
              production earns twice on the same material. The{" "}
              <Link
                href="/biochar"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                biochar
              </Link>{" "}
              itself sells as a soil amendment, a filtration medium, or a
              construction additive, and the{" "}
              <Link
                href="/biofuels"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                bio-oil
              </Link>{" "}
              coming off the same reactor is its own product. On top of that,
              permanently locking carbon into the biochar generates a{" "}
              <Link
                href="/carbon-credits"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                carbon-removal credit
              </Link>{" "}
              &mdash; and durable removal has been trading around $150 a tonne,
              with high-integrity credits earning a premium. When your feedstock
              is free and co-located, both of those revenue lines land on a much
              lower cost base.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              If You Have a Waste Stream, You Have Options
            </h2>

            <p>
              The takeaway from September&apos;s funding rounds isn&apos;t about
              two specific companies. It&apos;s that the smart money is backing a
              model that turns an on-site waste problem into on-site production
              &mdash; and that model is reachable for any operation with a steady
              biomass stream, not just venture-backed startups.
            </p>

            <p>
              If you run a food-processing plant, a mill, a farm operation, or a
              municipality with a green-waste stream, the question is no longer
              whether biochar production is viable at your scale. It&apos;s
              whether you want us to build and run it for you, deploy modular
              units you own, or supply the equipment. We&apos;re happy to look at
              your feedstock and tell you honestly which one fits.
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
              href="/blog/modular-pyrolysis-systems"
              className="block bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Technology
              </span>
              <h3 className="text-lg font-bold text-text">
                Why We Build Plants in Shipping Containers
              </h3>
              <p className="mt-2 text-sm text-text-light">
                How containerized, modular systems come online fast and scale in
                stages next to your feedstock.
              </p>
            </Link>
            <Link
              href="/blog/how-biochar-plants-get-financed"
              className="block bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Business
              </span>
              <h3 className="text-lg font-bold text-text">
                How Biochar Plants Get Financed in 2026
              </h3>
              <p className="mt-2 text-sm text-text-light">
                The offtake-first playbook that underwrites plant construction
                with long-term carbon-removal contracts.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Have a Waste Stream Worth Converting?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            We build and operate plants on your site, deploy modular systems you
            own, and supply OEM equipment &mdash; then help monetize both the
            biochar and the carbon. Let&apos;s look at your feedstock.
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

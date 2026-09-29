import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Durable Carbon Removal Just Found a Price Floor — What It Means for New Producers | iNBIO",
  description:
    "Durable CDR prices have stabilized near $150/tonne while 500,000-tonne biochar offtakes land through 2028. A firmer floor plus multi-year demand is exactly what makes new plant construction bankable. Here's the read for producers.",
};

export default function BlogPostDurableCdrPriceFloor() {
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
              Carbon Markets
            </span>
            <span className="inline-block bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Business
            </span>
            <span className="inline-block bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Market Trends
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Durable Carbon Removal Just Found a Price Floor &mdash; What It Means
            for New Producers
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
            <span>By Raj Kathuria</span>
            <span className="hidden sm:inline">|</span>
            <span>September 2026</span>
            <span className="hidden sm:inline">|</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured image */}
          <div className="mb-10 rounded-xl overflow-hidden">
            <Image
              src="/images/iStock-1312764772-1-scaled.jpg"
              alt="Durable carbon removal market pricing and demand trends in 2026"
              width={1200}
              height={630}
              className="w-full h-auto object-cover rounded-xl"
              priority
            />
          </div>

          <div className="space-y-6 text-lg text-text leading-relaxed">
            <p>
              For years, the honest objection to building a carbon-removal
              business was the price. Nobody quite knew what a tonne of durable
              removal was worth next year, let alone in 2028 &mdash; and you
              can&apos;t finance a plant against a number that swings. In 2026
              that objection got a lot weaker. Durable CDR pricing has settled
              near{" "}
              <a
                href="https://carboncredits.com/the-ultimate-guide-to-biochar-the-black-gold-fueling-durable-carbon-removal-market/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                $150 per tonne
              </a>
              , and the gap between what buyers will pay and what sellers ask has
              been{" "}
              <a
                href="https://www.reccessary.com/en/news/cdr-credit-prices-defy-expectations-market-gap-narrows"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                slowly closing
              </a>
              .
            </p>

            <p>
              A price that holds is worth more to a producer than a price that
              occasionally spikes. Here&apos;s why a floor &mdash; combined with
              the mega-deals landing alongside it &mdash; is the real green light
              for new capacity.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              A Floor, Not Just a Headline Number
            </h2>

            <p>
              &ldquo;Around $150 a tonne&rdquo; matters less as a figure than as
              a behavior. Prices for high-integrity, permanent removal have
              stopped whipsawing and started holding, with the best credits still
              earning a premium above the average. That stability is what a floor
              is: not a promise the price only goes up, but confidence it
              won&apos;t collapse under you mid-contract. For anyone modeling a
              plant, a defensible floor is the difference between a spreadsheet
              and a financeable plan.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              The Mega-Offtakes Are the Louder Signal
            </h2>

            <p>
              Prices tell you the level; contracts tell you the conviction. In
              2026 the contracts got big and long. Bolivia&apos;s Exomad Green
              and London&apos;s Supercritical signed a three-year deal for{" "}
              <a
                href="https://www.esgtoday.com/exomad-green-supercritical-sign-500000-ton-biochar-carbon-removal-agreement/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                up to 500,000 tonnes
              </a>{" "}
              of biochar removal, securing the rest of Exomad&apos;s 2026
              inventory and forward allocations through 2028. Boeing bought a{" "}
              <a
                href="https://www.esgtoday.com/boeing-buys-20000-ton-portfolio-of-biochar-erw-carbon-removals/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                20,000-tonne portfolio
              </a>{" "}
              across six suppliers after screening more than 200 projects. These
              are buyers locking in supply for the 2026&ndash;2030 window because
              they&apos;re worried there won&apos;t be enough of it.
            </p>

            <p>
              That&apos;s the tell. When large corporate buyers sign multi-year
              volumes years ahead of delivery, they&apos;re not speculating
              &mdash; they&apos;re hedging against a shortage. Supply, not demand,
              is the binding constraint in this market.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              Why a Floor Plus a Contract Changes Financing
            </h2>

            <p>
              Put the two together and you get something a lender or investor can
              actually underwrite. A multi-year offtake at a stable price is a
              revenue line with a known shape &mdash; and that&apos;s exactly how
              modern biochar plants get built. As we&apos;ve written about the{" "}
              <Link
                href="/blog/how-biochar-plants-get-financed"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                offtake-first playbook
              </Link>
              , the contract comes first and the construction follows, because
              the contract is what makes the construction bankable.
            </p>

            <p>
              A collapsing or unknowable price breaks that chain; a floor plus a
              signed volume restores it. This is precisely the moment our{" "}
              <Link
                href="/build-operate-plant"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                Build + Operate program
              </Link>{" "}
              is designed for &mdash; sizing and structuring a plant against real
              contracted demand rather than a hopeful forecast.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              The Catch: Integrity Is the Price of the Premium
            </h2>

            <p>
              A floor doesn&apos;t mean every credit clears at the same value.
              The market is separating high-integrity removal from the rest, and
              the premium goes to credits that are permanent, measurable, and
              cleanly documented. That&apos;s a production problem as much as a
              paperwork one: registries like Puro.earth, Isometric, and Verra
              reward consistent, well-instrumented operation.
            </p>

            <p>
              It&apos;s why we treat certification as an engineering requirement,
              not an afterthought. Our{" "}
              <Link
                href="/oem-equipment"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                equipment
              </Link>{" "}
              is built for the stable operating conditions that make credits
              defensible, and our{" "}
              <Link
                href="/carbon-credits"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                carbon-credit guidance
              </Link>{" "}
              walks producers through the pathways that turn sequestration into a
              buyer-accepted credit. If you want the mechanics, our guide to{" "}
              <Link
                href="/blog/biochar-carbon-credits"
                className="text-primary hover:text-primary-dark underline transition-colors"
              >
                how biochar carbon credits work
              </Link>{" "}
              lays out the path from production to revenue.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-text mt-12 mb-4">
              What a New Producer Should Take From This
            </h2>

            <p>
              The read is straightforward. Durable removal has a working price,
              buyers are contracting years ahead, and there isn&apos;t enough
              certified supply to meet them. The producers who build{" "}
              <em>certifiable</em> capacity now &mdash; and pair it with a signed
              offtake &mdash; are the ones positioned to capture both the product
              revenue and the carbon premium.
            </p>

            <p>
              If you have a feedstock stream and you&apos;ve been waiting for the
              market to prove itself before committing, this is roughly what that
              proof looks like. We can help you size the plant, choose the
              equipment, and line up the offtake so the numbers hold. The window
              is open while supply is short; it won&apos;t stay that way forever.
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
                The offtake-first playbook: how a long-term carbon-removal
                contract underwrites plant construction.
              </p>
            </Link>
            <Link
              href="/blog/biochar-carbon-credits"
              className="block bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Carbon Markets
              </span>
              <h3 className="text-lg font-bold text-text">
                How Biochar Carbon Credits Work
              </h3>
              <p className="mt-2 text-sm text-text-light">
                From production to revenue &mdash; registries, certification, and
                what the credits are actually worth.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Build Against Real Demand?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            We help companies size and build plants, choose certifiable
            equipment, and structure offtake so both the biochar and the carbon
            earn their keep. Let&apos;s talk about your feedstock and your market.
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

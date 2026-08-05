import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why We Build Pyrolysis Plants in Shipping Containers | iNBIO",
  description:
    "Modular, containerized fast pyrolysis systems cut deployment time and de-risk projects. Raj Kathuria explains why iNBIO builds in 40-foot modules and where it pays off.",
};

export default function BlogPostModularPyrolysisSystems() {
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
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                Technology
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Why We Build Pyrolysis Plants in Shipping Containers
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
              <span className="font-medium text-white/90">Raj Kathuria</span>
              <span>&middot;</span>
              <time dateTime="2026-08-03">August 3, 2026</time>
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
              src="/images/iStock-1185246772-scaled.jpg"
              alt="Modular containerized fast pyrolysis system in a 40-foot shipping container"
              width={1200}
              height={630}
              className="w-full h-auto object-cover rounded-xl"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">

            <p className="mt-6 text-text-light leading-relaxed">
              A stick-built pyrolysis plant takes two to three years to go from a signed contract to a running reactor. Our containerized systems ship in a fraction of that time, and the reactor arrives already commissioned. That single difference &mdash; where the plant gets built &mdash; changes the economics of almost every project we touch.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              We build our fast pyrolysis systems inside 40-foot shipping container modules, assembled and tested in a factory before they ever reach a customer&apos;s site. It&apos;s not a gimmick or a marketing angle. After years of designing, operating, and selling these systems, we&apos;re convinced modular is the right way to deploy pyrolysis for the 5&ndash;75 TPD range where most real projects live. Here&apos;s the reasoning.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              The Problem With Building on Site
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              A conventional pyrolysis facility is a construction project first and a chemical process second. You&apos;re pouring foundations, running structural steel, coordinating a dozen trades, and doing precision welding and instrumentation work in a field &mdash; often in a rural location where skilled fabrication labor is scarce and the weather doesn&apos;t cooperate. Every one of those steps is a place where the schedule slips and the budget grows.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              The bubbling fluidized bed reactor at the heart of our process runs at 450&ndash;550&deg;C with a reaction time under two seconds. Getting reliable bio-oil, biochar, and syngas yields out of that depends on tight control over heat transfer, vapor residence time, and particle handling. Those are exactly the tolerances that are hard to hold when the reactor is being welded together outdoors by a crew that has never built one before. Field quality is inconsistent by nature, and pyrolysis punishes inconsistency.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              What a Factory Floor Actually Buys You
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              When we build a system in our shop, the same team assembles module after module in a controlled environment. Fixtures are reused. Welds are inspected the same way every time. The reactor, the feed system, the char collection, the condensation train, and the controls are integrated and functionally tested before the module is loaded onto a truck. By the time it ships, we already know it runs.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              That repeatability is worth more than it sounds. It means the fifth system we build is measurably better than the first, because the lessons carry forward into a fixed production process instead of evaporating at the end of a one-off construction job. It means when a customer calls with an issue, we&apos;re troubleshooting a configuration we know intimately, not a bespoke plant someone assembled to their own interpretation of a drawing set. And it means our lead times are getting shorter as our fabrication process matures, not longer.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              The 40-foot container form factor is deliberate. It&apos;s the most standardized shipping unit on earth. It moves on any truck, rail line, or ship without special permitting for width or height in most jurisdictions. It arrives, gets set on a prepared pad, and connects to utilities and feedstock handling. Site work drops from &ldquo;build a plant&rdquo; to &ldquo;prepare a foundation and make connections.&rdquo;
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              Modularity Is How You Scale Without Betting the Company
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              Here&apos;s the part that matters most for anyone weighing a project. A modular design lets you scale in increments instead of one terrifying leap. Our path runs from a 6 TPD demonstration unit &mdash; we have one under construction in Salisbury, Maryland right now &mdash; up to a 75 TPD commercial reactor, and then to 300 TPD by running four 75 TPD lines in parallel.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              You don&apos;t have to commit to 300 TPD on day one. You prove the economics with feedstock you actually have, at a scale you can actually finance, and then you add modules as your feedstock supply and offtake agreements firm up. If demand grows faster than expected, you add a line. If your feedstock supply is seasonal or lumpy, you can idle a module without stranding the capital in an oversized single reactor that has to run flat-out to pay for itself. Try doing that with a monolithic plant built for one throughput number.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              This is also why the parallel-line approach beats simply building one enormous reactor. Four 75 TPD lines give you redundancy &mdash; maintenance on one line doesn&apos;t take the whole facility offline &mdash; and they let you match capacity to feedstock in steps that a lender can underwrite.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              Where Modular Isn&apos;t the Answer
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              I&apos;d be misleading you if I claimed containerized systems win every time. There&apos;s a real ceiling. Somewhere above a few hundred TPD at a single site, the economics start to favor purpose-built, stick-constructed plants with larger single reactors and integrated infrastructure. If you have one massive, consolidated feedstock source &mdash; a large sawmill complex, say &mdash; and the capital and time to build for it, a custom facility can beat a stack of modules on cost per ton.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              There&apos;s also a footprint consideration. Parallel modules take more total real estate than a single equivalent reactor, and each connection point is another interface to maintain. For most of the projects we see &mdash; distributed feedstock, staged financing, operators who want to be running this year rather than in 2028 &mdash; those tradeoffs are easy to accept. But they are real, and we say so on every project call.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              How This Shapes the Way We Work With Customers
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              Because the systems are modular, our commercial models can be too. Some customers buy the equipment outright and run it themselves &mdash; that&apos;s our <Link href="/oem-equipment" className="text-primary hover:text-primary-dark font-medium">OEM equipment</Link> line. Others want us to design, build, and operate the plant for them, or to build and train their team before handing it over. Those options live under <Link href="/build-operate-plant" className="text-primary hover:text-primary-dark font-medium">build and operate a plant</Link>, and the modular architecture is what makes the build-train-transfer model practical: we can bring a module online, run it with your people alongside ours, and transfer operations once the process is stable.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              If you want the technical detail on the reactor itself, the temperatures, residence times, and yield ranges are laid out on our <Link href="/fast-pyrolysis-specs" className="text-primary hover:text-primary-dark font-medium">fast pyrolysis specifications</Link> page, and the broader system design sits under <Link href="/modular-systems" className="text-primary hover:text-primary-dark font-medium">modular systems</Link> and <Link href="/our-technology" className="text-primary hover:text-primary-dark font-medium">our technology</Link>. The output is the same regardless of configuration: bio-oil at 40&ndash;70% yield, <Link href="/biochar" className="text-primary hover:text-primary-dark font-medium">biochar</Link> at 15&ndash;40%, and syngas that we recycle to heat the reactor, which is what makes the process thermally self-sufficient once it&apos;s running.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              The reason we keep coming back to modular is simple. Most of the people who call us don&apos;t have three years and a general contractor. They have a waste stream, a rough sense of the market, and a need to see the process work before they scale it. Building in containers is how we get them from a conversation to a running reactor without asking them to bet everything on a single pour of concrete.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text">Related Posts</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/blog/economics-pyrolysis"
              className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow group"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 mb-3">
                Business
              </span>
              <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                The Economics of Small-Scale Pyrolysis Plants
              </h3>
            </Link>
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
            </Link>
            <Link
              href="/blog/biochar-market-growth-2026"
              className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow group"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 mb-3">
                Business
              </span>
              <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                Biochar Market Growth in 2026: What the Numbers Actually Mean
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Thinking About a Pyrolysis Project?</h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">Tell us about your feedstock and your timeline, and we&apos;ll help you figure out whether a modular system fits &mdash; honestly, even if the answer is no. Reach out to the iNBIO team in Salisbury.</p>
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Choose a Feedstock for Your Pyrolysis Plant | iNBIO",
  description:
    "Feedstock makes or breaks a pyrolysis project. Raj Kathuria walks through moisture, particle size, ash, contamination, and supply reliability — and how each one changes your yields and economics.",
};

export default function BlogPostChoosingFeedstockPyrolysis() {
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
              How to Choose a Feedstock for Your Pyrolysis Plant
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
              <span className="font-medium text-white/90">Raj Kathuria</span>
              <span>&middot;</span>
              <time dateTime="2026-08-04">August 4, 2026</time>
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
              src="/images/photo-1553621070-ef4cd7347074-scaled.jpg"
              alt="Biomass feedstock being prepared for fast pyrolysis conversion"
              width={1200}
              height={630}
              className="w-full h-auto object-cover rounded-xl"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">

            <p className="mt-6 text-text-light leading-relaxed">
              Almost every failed pyrolysis project I&apos;ve seen up close failed for the same reason: the feedstock. Not the reactor, not the market, not the financing. Someone signed a contract based on a feedstock that looked abundant on paper and turned out to be too wet, too variable, or too far away to run economically. Feedstock is the single decision that constrains everything downstream, and it&apos;s the one people spend the least time on.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              So before you size a reactor or model your revenue, get honest about what you&apos;re going to feed it. Here&apos;s how we walk customers through it.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              Moisture Is the Number That Moves Everything
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              Our fast pyrolysis process runs at 450&ndash;550&deg;C with a sub-two-second reaction time, and to hit those conditions the feedstock needs to come in dry &mdash; typically below 10% moisture at the reactor. Green wood chips straight off a forestry operation can be 45&ndash;55% moisture. Every point of water you don&apos;t remove is energy you burn evaporating it instead of converting biomass, and it directly cuts into your bio-oil yield.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              This doesn&apos;t disqualify wet feedstock &mdash; most of what we process starts wet. But it means drying is part of your plant, not an afterthought, and it&apos;s a real line item in both capital and operating cost. When someone tells me they have &ldquo;free&rdquo; green waste, my first question is what it costs to get it to 10% moisture. Sometimes that answer changes the whole project.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              Particle Size and Consistency
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              A bubbling fluidized bed reactor transfers heat into each particle extremely fast, and that only works if the particles are small and reasonably uniform &mdash; generally in the 2&ndash;6 mm range for good conversion. Large chunks don&apos;t heat through in two seconds, so they char on the outside and stay raw in the middle, dragging down yield and consistency.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              That means grinding and screening are usually part of the feed system. The relevant question for a given feedstock isn&apos;t just &ldquo;can it be sized?&rdquo; but &ldquo;how hard is it to size?&rdquo; Clean wood grinds predictably. Stringy, fibrous, or wet material can bind up a grinder and become a maintenance headache. Consistency matters as much as the target size &mdash; a feed that swings from sawdust to fist-sized pieces makes stable operation much harder than one that arrives uniform.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              Ash Content Decides What Your Biochar Is Worth
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              Ash is the inorganic fraction left after the organic material converts, and it varies enormously by feedstock. Clean woody biomass might be 1&ndash;3% ash. Agricultural residues like rice hulls or straw can run 10&ndash;20% or more. High ash affects two things: it lowers bio-oil quality and yield, and it changes what your <Link href="/biochar" className="text-primary hover:text-primary-dark font-medium">biochar</Link> can be sold as.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              For some applications that&apos;s fine or even useful &mdash; silica-rich rice hull biochar has real value in filtration and specialty soil products. For a premium agricultural or certified carbon product, you want to know your ash and mineral profile up front, because it drives which certifications and which buyers are open to you. We test this early rather than discovering it after a system is running.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              Contamination Is the Silent Project-Killer
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              This is where I get most cautious. Painted or treated wood, construction debris, plastics mixed into a waste stream, biosolids with heavy metals &mdash; these can change your project from a straightforward permit into an 18-to-24-month regulatory exercise, and they can push the resulting biochar out of agricultural use entirely on heavy-metal grounds.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Contaminated feedstocks often come with the highest tip fees, which is exactly why they&apos;re tempting. Sometimes the economics genuinely work. But I&apos;d never let a first-time operator lead with them. Prove the process on a clean, predictable feed, then expand into the harder, higher-fee streams once your team and your permits can handle them.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              Supply Reliability Beats Supply Volume
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              A plant is a fixed asset that wants to run continuously. A feedstock that&apos;s abundant six months a year and scarce the other six will strand your capital during the lean months. I&apos;d take a smaller, year-round, contracted supply over a larger seasonal one almost every time.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              The best projects usually sit right at the source of a continuous waste stream &mdash; a sawmill producing fines every shift, a lumber yard, a food processor, an agricultural cooperative. When the feedstock is a byproduct the host is already paying to dispose of, you get supply reliability and favorable economics in the same package. That&apos;s the profile we look for. This is also why the modular approach fits so well: you can size the plant to the feedstock you can actually secure rather than betting on a volume you hope will materialize. I wrote more about that in <Link href="/blog/modular-pyrolysis-systems" className="text-primary hover:text-primary-dark font-medium">why we build in shipping containers</Link>.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              Putting It Together
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              When we evaluate a feedstock with a customer, we&apos;re really scoring it across all six of these at once: moisture, particle size and consistency, ash, contamination, supply reliability, and delivered cost. A feedstock rarely wins on every axis. Clean wood scores beautifully on quality but you may have to pay for it. A high-tip-fee waste stream pays you to take it but costs you on permitting and product flexibility. The job is to find the combination where the numbers close.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              That&apos;s a conversation worth having before you commit to a system size. The reactor specifications and yield ranges are laid out on our <Link href="/fast-pyrolysis-specs" className="text-primary hover:text-primary-dark font-medium">fast pyrolysis specifications</Link> page, and how the system is configured and delivered sits under <Link href="/modular-systems" className="text-primary hover:text-primary-dark font-medium">modular systems</Link> and <Link href="/our-technology" className="text-primary hover:text-primary-dark font-medium">our technology</Link>. Whether you&apos;re buying equipment to run yourself through our <Link href="/oem-equipment" className="text-primary hover:text-primary-dark font-medium">OEM equipment</Link> line or having us design and run the plant under <Link href="/build-operate-plant" className="text-primary hover:text-primary-dark font-medium">build and operate</Link>, the feedstock analysis is where we start &mdash; because everything else depends on it.
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
              href="/blog/modular-pyrolysis-systems"
              className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow group"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-3">
                Technology
              </span>
              <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                Why We Build Pyrolysis Plants in Shipping Containers
              </h3>
            </Link>
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Have a Feedstock You Want Evaluated?</h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">Send us what you&apos;ve got &mdash; the material, the moisture, the volume, and where it comes from &mdash; and we&apos;ll tell you honestly whether it makes a viable pyrolysis project. Reach out to the iNBIO team in Salisbury.</p>
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

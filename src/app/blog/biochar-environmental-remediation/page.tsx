import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biochar for Environmental Remediation: What Actually Works | iNBIO",
  description:
    "Biochar immobilizes heavy metals and filters contaminants — but it isn't a cure-all. Raj Kathuria on where biochar remediation genuinely works, where it doesn't, and how to spec it.",
};

export default function BlogPostBiocharEnvironmentalRemediation() {
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
              Biochar for Environmental Remediation: What Actually Works
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
          <div className="mb-10 rounded-xl bg-surface-dark border border-border h-64 sm:h-80 flex items-center justify-center">
            <p className="text-text-lighter text-sm">Featured image: Biochar used for soil and water remediation</p>
          </div>

          <div className="prose prose-lg max-w-none">

            <p className="mt-6 text-text-light leading-relaxed">
              Biochar doesn&apos;t destroy contaminants. It&apos;s important to say that plainly, because a lot of the marketing around remediation implies otherwise. What biochar does is bind and hold certain contaminants in place so they stop moving through soil and water. That distinction &mdash; immobilization, not destruction &mdash; is the whole key to using it well, and to knowing when it&apos;s the wrong tool.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              We get asked about remediation applications regularly, and the honest answer is always the same: it depends entirely on what you&apos;re trying to clean up. Here&apos;s how we think about it.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              Where Biochar Genuinely Earns Its Keep: Heavy Metals
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              The strongest case for biochar remediation is heavy-metal-contaminated soil &mdash; lead, cadmium, copper, zinc, and similar. Biochar&apos;s high surface area, its porous structure, and the functional groups on its surface let it adsorb and complex these metals, and its typically alkaline pH raises soil pH in a way that further reduces metal solubility. The net effect is that the metals are still physically present, but far less bioavailable &mdash; they don&apos;t leach into groundwater or get taken up by plants as readily.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              That&apos;s a real, measurable benefit for the right site: former industrial land, mine tailings, shooting ranges, urban gardens on legacy-contaminated lots. It&apos;s cheaper and far less disruptive than digging out and hauling away thousands of tons of soil. The tradeoff you have to be honest about with a regulator and a landowner is that immobilization is a management strategy, not a permanent removal &mdash; if soil conditions change enough, some of that binding can reverse. For many sites that&apos;s an acceptable, well-understood approach. For others it isn&apos;t. Know which one you have.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              Water: Filtration Is the Sweet Spot
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              In water treatment, biochar behaves like a lower-cost cousin of activated carbon. It filters organic contaminants, some hydrocarbons, excess nutrients like phosphorus, and a range of dissolved metals. It won&apos;t match the performance of high-grade activated carbon on every contaminant, but it costs a fraction as much, and for a lot of applications &mdash; agricultural runoff, mine-influenced water, constructed treatment wetlands &mdash; the price-to-performance ratio is what wins.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              This overlaps heavily with stormwater work, which is its own large and growing application. If your interest is filtering runoff rather than remediating a contaminated site, the stormwater angle is worth reading separately &mdash; I went deep on the engineering and the numbers in <Link href="/blog/biochar-stormwater" className="text-primary hover:text-primary-dark font-medium">our stormwater guide</Link>.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              Where I Tell People to Be Skeptical
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              Two areas draw a lot of hype and deserve a cold eye. The first is organic pollutants that need to be broken down rather than held &mdash; certain pesticides, some petroleum fractions. Biochar can adsorb these and, in some cases, support the microbial communities that degrade them, but it isn&apos;t doing the destroying itself, and results vary widely by compound and site. Don&apos;t assume; test.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              The second is PFAS, the &ldquo;forever chemicals.&rdquo; There&apos;s genuine research interest in biochar as a lower-cost sorbent for PFAS in water, and some results are promising. But this is an active research area, not a solved problem, and the performance depends heavily on the specific PFAS compounds, the biochar&apos;s properties, and water chemistry. Anyone selling biochar as a proven PFAS fix today is getting ahead of the science. We&apos;d rather tell you that than oversell it.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              The Part Most People Skip: Not All Biochar Is the Same
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              Here&apos;s the point that matters most and gets ignored most often. &ldquo;Biochar&rdquo; is not one material. A biochar&apos;s surface area, pore structure, pH, and surface chemistry depend on the feedstock it&apos;s made from and the exact pyrolysis conditions. A biochar optimized for soil carbon is not the same as one optimized for adsorbing lead or filtering phosphorus. Buying generic biochar for a remediation job is like buying &ldquo;metal&rdquo; when you needed a specific alloy.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              This is exactly where controlled production matters. Because we run <Link href="/fast-pyrolysis-specs" className="text-primary hover:text-primary-dark font-medium">fast pyrolysis</Link> with characterized feedstocks and defined process conditions, we can produce biochar with consistent, documented properties &mdash; and target those properties to the contaminant you&apos;re dealing with. That consistency is what lets an environmental engineer actually spec a material and defend it, rather than hoping a variable product performs. It&apos;s the difference between a science project and an engineered solution.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              How to Approach a Remediation Project
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              Start with the contaminant, not the material. Characterize what&apos;s actually on your site &mdash; which metals, which organics, what concentrations, in soil or in water. From there, the question is whether immobilization or filtration is a fit, and if so, what biochar properties the job requires. Then you run bench or pilot testing on your actual site material before scaling. Skipping that step is where remediation projects go wrong.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              That&apos;s the work we do with customers on the <Link href="/biochar-applications#remediation" className="text-primary hover:text-primary-dark font-medium">remediation applications</Link> side &mdash; matching a characterized <Link href="/biochar" className="text-primary hover:text-primary-dark font-medium">biochar</Link> to a specific contaminant problem, and being straight about the cases where biochar isn&apos;t the right answer. If you&apos;re evaluating biochar for a contaminated site or a water treatment challenge, the useful first step is a conversation about what you&apos;re actually dealing with &mdash; not a pitch.
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
              href="/blog/biochar-stormwater"
              className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow group"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 mb-3">
                Water Management
              </span>
              <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                Biochar for Stormwater Management: A Supplier&apos;s Practical Guide
              </h3>
            </Link>
            <Link
              href="/blog/biochar-vs-compost"
              className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow group"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 mb-3">
                Agriculture
              </span>
              <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                Biochar vs. Compost: What We&apos;ve Learned Producing One and Recommending Both
              </h3>
            </Link>
            <Link
              href="/blog/choosing-feedstock-pyrolysis"
              className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow group"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-3">
                Technology
              </span>
              <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                How to Choose a Feedstock for Your Pyrolysis Plant
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Dealing With a Contaminated Site or Water Problem?</h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">Tell us the contaminant and the setting, and we&apos;ll give you a straight assessment of whether biochar fits &mdash; and what properties it would need if it does. Reach out to the iNBIO team in Salisbury.</p>
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

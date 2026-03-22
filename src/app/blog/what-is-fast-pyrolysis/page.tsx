import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "What Is Fast Pyrolysis? How We Turn Biomass into Bio-Oil, Biochar & Syngas | iNBIO",
  description:
    "iNBIO's founder explains how fast pyrolysis works from the inside — reactor conditions, product yields, and why this technology beats incineration and gasification for biomass conversion.",
};

export default function WhatIsFastPyrolysisPost() {
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
                Technology
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              What Is Fast Pyrolysis? How We Actually Turn Biomass into Fuel
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
              <span className="font-medium text-white/90">Raj Kathuria</span>
              <span>&middot;</span>
              <time dateTime="2026-03-15">March 15, 2026</time>
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
              alt="Biomass being converted to biochar through traditional charcoal production"
              width={1200}
              height={630}
              className="w-full h-auto object-cover rounded-xl"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-text-light leading-relaxed">
              The question we hear most often when someone visits our facility
              for the first time is some version of: &quot;Wait, you&apos;re not
              burning it?&quot; They watch biomass go into the reactor. They see
              bio-oil come out. And the idea that you can get a liquid fuel from
              wood chips <em>without</em> combustion genuinely surprises people.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Fast pyrolysis is counterintuitive until you see it run. You take
              organic waste — forestry residues, crop stalks, nut shells,
              sawdust — heat it extremely fast in a zero-oxygen environment, and
              in under two seconds it breaks apart into a liquid fuel, a solid
              carbon product, and a combustible gas. No flame. No combustion.
              Just thermal decomposition at speed.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              We have spent years engineering systems around this process, and
              what follows is how it actually works — not the textbook version,
              but what matters when you&apos;re running it at scale.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              What Happens Inside the Reactor
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              The Greek roots of &quot;pyrolysis&quot; translate to
              &quot;breaking apart with fire,&quot; which is a bit misleading.
              There&apos;s heat, yes, but no fire. The whole point is keeping
              oxygen out.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Three parameters define fast pyrolysis and separate it from slower
              thermal processes:
            </p>

            <ul className="mt-4 space-y-3 text-text-light">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  <strong className="text-text">Heating rate:</strong> Above
                  1,000&deg;C per second. The biomass has to go from ambient to
                  reaction temperature almost instantly.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  <strong className="text-text">Residence time:</strong> Under 2
                  seconds. In our reactors, we target less than 1.5 seconds. Any
                  longer, and secondary cracking reactions start chewing into
                  your bio-oil yield.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  <strong className="text-text">Temperature window:</strong>{" "}
                  450&deg;C to 550&deg;C. We&apos;ve run extensive trials across
                  this range, and where you sit within it depends on your
                  feedstock and which product you&apos;re optimizing for.
                </span>
              </li>
            </ul>

            <p className="mt-6 text-text-light leading-relaxed">
              That temperature window matters more than most people realize. Push
              above 550&deg;C and you start converting more mass to gas instead
              of liquid. Drop below 450&deg;C and you get more char but less
              bio-oil. For our customers who want maximum liquid fuel output, we
              typically hold around 500&deg;C.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              From Raw Feedstock to Finished Products
            </h2>

            <h3 className="mt-8 text-xl font-bold text-text">
              Feedstock Prep Is Where Problems Start (or Don&apos;t)
            </h3>

            <p className="mt-4 text-text-light leading-relaxed">
              Before anything touches the reactor, the biomass has to be dried
              and sized. We target moisture content below 10% and particle sizes
              of 2 to 3 millimeters. These numbers aren&apos;t arbitrary.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              We&apos;ve found that feedstock moisture above 12% starts to
              noticeably impact bio-oil quality — you end up with more water in
              the product and lower energy density. And oversized particles
              don&apos;t heat uniformly, which means incomplete conversion and
              inconsistent product ratios. On our 5 to 75 TPD systems, feedstock
              prep is often where we spend the most time during commissioning,
              because getting it right here makes everything downstream
              predictable.
            </p>

            <h3 className="mt-8 text-xl font-bold text-text">The Reaction</h3>

            <p className="mt-4 text-text-light leading-relaxed">
              Prepared biomass enters the reactor and hits the target temperature
              almost immediately. In our fluidized bed design, hot sand
              particles transfer heat to the biomass on contact. No oxygen is
              present. Instead of burning, the biomass thermally fractures into
              vapors, aerosols, and solid char.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              The char gets separated out. The hot vapors move to quenching.
            </p>

            <h3 className="mt-8 text-xl font-bold text-text">
              Quenching and Condensation
            </h3>

            <p className="mt-4 text-text-light leading-relaxed">
              This stage is time-critical. Those vapors need to be cooled and
              condensed fast — within about a second — before secondary reactions
              degrade the bio-oil. We&apos;ve invested heavily in our
              condensation train for exactly this reason. A slow quench
              doesn&apos;t just reduce yield; it changes the chemical composition
              of the oil in ways that make downstream upgrading harder.
            </p>

            <h3 className="mt-8 text-xl font-bold text-text">
              What Comes Out
            </h3>

            <p className="mt-4 text-text-light leading-relaxed">
              A well-tuned fast pyrolysis system produces roughly:
            </p>

            <ul className="mt-4 space-y-3 text-text-light">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  <strong className="text-text">Bio-oil:</strong> 60% to 75% of
                  feedstock weight
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  <strong className="text-text">Biochar:</strong> 15% to 25%
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  <strong className="text-text">Syngas:</strong> 10% to 20%
                </span>
              </li>
            </ul>

            <p className="mt-6 text-text-light leading-relaxed">
              The syngas gets recirculated to heat the reactor. This is a detail
              that surprises people: once the system reaches operating
              temperature, it largely runs on its own gas output. External energy
              input drops dramatically. Our systems are designed to be energy
              self-sufficient at steady state.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              For the full engineering details, our{" "}
              <Link
                href="/our-technology"
                className="text-primary hover:text-primary-dark font-medium underline underline-offset-2"
              >
                technology overview
              </Link>{" "}
              and specifications pages go deeper into reactor design and
              throughput numbers.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              The Three Products and What They&apos;re Worth
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              <strong className="text-text">Bio-oil</strong> is the primary
              target for most of our customers. It&apos;s a dark, dense liquid
              with an energy content of 16 to 19 MJ/kg — roughly half of
              diesel&apos;s 42 MJ/kg, but that gap closes with upgrading. It can
              be burned directly in industrial boilers, co-fired in power plants,
              or refined into transportation fuels. The sustainable aviation fuel
              (SAF) pathway is drawing the most commercial interest right now,
              and bio-oil is one of the leading feedstocks for SAF production.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              One thing to know: bio-oil has high oxygen content (35% to 40%)
              and typically 15% to 30% water. It&apos;s not a drop-in petroleum
              replacement without further processing. But as a renewable
              intermediate or direct industrial fuel, it works.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              <strong className="text-text">Biochar</strong> is the solid carbon
              left behind. Stable for centuries in soil, it&apos;s used as a
              soil amendment, a water filtration medium, a concrete additive, and
              increasingly as a verified carbon removal credit. Each ton of
              biochar sequesters roughly 2.5 to 3.0 tons of CO
              <sub>2</sub> equivalent. For some of our customers, the biochar
              revenue stream is as important as the bio-oil.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              <strong className="text-text">Syngas</strong> — a mix of carbon
              monoxide, hydrogen, and methane — powers the process itself. In
              larger installations, excess syngas can generate electricity. But
              for most deployments, its primary job is keeping the reactor
              running without external fuel.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              How Fast Pyrolysis Compares to Other Conversion Technologies
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              We get asked constantly how this stacks up against other ways to
              handle biomass. Here&apos;s an honest comparison based on what
              we&apos;ve seen in the field:
            </p>

            <div className="mt-8 overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-dark">
                    <th className="text-left p-3 font-semibold text-text border border-border">
                      Method
                    </th>
                    <th className="text-left p-3 font-semibold text-text border border-border">
                      Temperature Range
                    </th>
                    <th className="text-left p-3 font-semibold text-text border border-border">
                      Primary Output
                    </th>
                    <th className="text-left p-3 font-semibold text-text border border-border">
                      Key Tradeoff
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-primary/5">
                    <td className="p-3 border border-border font-semibold text-text">
                      Fast Pyrolysis
                    </td>
                    <td className="p-3 border border-border text-text-light">
                      450&ndash;550&deg;C
                    </td>
                    <td className="p-3 border border-border text-text-light">
                      Bio-oil (60&ndash;75%)
                    </td>
                    <td className="p-3 border border-border text-text-light">
                      Best liquid yield; requires dry feedstock
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border font-semibold text-text">
                      Slow Pyrolysis
                    </td>
                    <td className="p-3 border border-border text-text-light">
                      300&ndash;500&deg;C (slow ramp)
                    </td>
                    <td className="p-3 border border-border text-text-light">
                      Biochar (30&ndash;40%)
                    </td>
                    <td className="p-3 border border-border text-text-light">
                      More char, much less oil (20&ndash;30%); hours-long process
                    </td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="p-3 border border-border font-semibold text-text">
                      Gasification
                    </td>
                    <td className="p-3 border border-border text-text-light">
                      700&ndash;1,200&deg;C
                    </td>
                    <td className="p-3 border border-border text-text-light">
                      Syngas
                    </td>
                    <td className="p-3 border border-border text-text-light">
                      No liquid output; complex gas cleanup; better for
                      large-scale power
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border font-semibold text-text">
                      Incineration
                    </td>
                    <td className="p-3 border border-border text-text-light">
                      800&ndash;1,100&deg;C (with oxygen)
                    </td>
                    <td className="p-3 border border-border text-text-light">
                      Heat + ash
                    </td>
                    <td className="p-3 border border-border text-text-light">
                      Releases all carbon as CO<sub>2</sub>; minimal product
                      value
                    </td>
                  </tr>
                  <tr className="bg-surface">
                    <td className="p-3 border border-border font-semibold text-text">
                      Anaerobic Digestion
                    </td>
                    <td className="p-3 border border-border text-text-light">
                      35&ndash;55&deg;C (biological)
                    </td>
                    <td className="p-3 border border-border text-text-light">
                      Biogas (methane)
                    </td>
                    <td className="p-3 border border-border text-text-light">
                      Needs wet feedstock; can&apos;t handle
                      woody/lignocellulosic material well
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-8 text-text-light leading-relaxed">
              A few things worth calling out from this table. Incineration is
              the most common &quot;disposal&quot; method for biomass waste, and
              it destroys all the carbon value. You get heat and ash. Fast
              pyrolysis captures that carbon in bio-oil and biochar, which is why
              the economics and the environmental math look so different.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Anaerobic digestion isn&apos;t really a competitor — it&apos;s
              complementary. It handles wet waste (food scraps, manure, sewage).
              We handle dry, woody, lignocellulosic material. Different
              feedstocks, different sweet spots.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              The gasification comparison is the one that comes up most in
              technical conversations. Gasification converts nearly everything to
              gas, which is great if you want syngas for power generation or
              chemical synthesis. But it doesn&apos;t produce bio-oil, and the
              gas cleanup requirements are significantly more demanding. We
              believe fast pyrolysis gives you more flexibility — three product
              streams instead of one — and works at smaller, modular scales that
              make sense for regional operators.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              The Environmental Case
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              We&apos;re biased, but the numbers back us up:
            </p>

            <ul className="mt-4 space-y-3 text-text-light">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  <strong className="text-text">Carbon removal:</strong> Biochar
                  locks carbon into a stable solid for centuries. This isn&apos;t
                  carbon-neutral; it&apos;s carbon-negative. The carbon that
                  would have decomposed and returned to the atmosphere as CO
                  <sub>2</sub> gets locked away.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  <strong className="text-text">
                    Fossil fuel displacement:
                  </strong>{" "}
                  Bio-oil replaces petroleum in industrial heating and can be
                  upgraded to SAF and other transport fuels. Lifecycle emissions
                  drop 70% to 90% compared to fossil alternatives.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  <strong className="text-text">
                    Open burning elimination:
                  </strong>{" "}
                  Crop residue burning is a massive air quality problem globally.
                  Fast pyrolysis gives farmers an alternative that actually pays
                  them for their waste instead of creating smog.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  <strong className="text-text">Landfill diversion:</strong>{" "}
                  Organic waste in landfills generates methane — a greenhouse gas
                  80 times more potent than CO<sub>2</sub> over 20 years.
                  Converting that waste through pyrolysis sidesteps the methane
                  problem entirely.
                </span>
              </li>
            </ul>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              Where the Industry Is Heading
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              Commercial fast pyrolysis plants are running across North America,
              Europe, and Asia. The market is growing at a CAGR above 8% through
              2030, and the drivers are real: tightening emissions regulations,
              corporate net-zero pledges, and carbon credit markets that now put
              a measurable dollar value on biochar-based carbon removal.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              The applications keep expanding. Agriculture buys biochar for soil
              health. Energy companies buy bio-oil for heating. Airlines are
              eyeing upgraded bio-oil as SAF feedstock. Construction firms are
              testing biochar in concrete. Water treatment facilities use it for
              filtration.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              At iNBIO, we&apos;re building our systems for this moment —
              modular fast pyrolysis platforms in the 5 to 75 TPD range that
              process diverse biomass waste streams and produce all three product
              categories. We designed for feedstock flexibility because no two
              regions have the same waste profile, and we designed for modularity
              because not every operator needs a 200-ton-per-day megaplant.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Explore our{" "}
              <Link
                href="/our-technology"
                className="text-primary hover:text-primary-dark font-medium underline underline-offset-2"
              >
                technology platform
              </Link>{" "}
              for system details.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              The Practical Bottom Line
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              Fast pyrolysis isn&apos;t theoretical. It&apos;s running. The
              science has been proven for decades; the engineering has caught up;
              and the economics are starting to work — especially as carbon
              markets mature and waste disposal costs keep climbing.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              If you&apos;re sitting on a biomass waste stream and paying to
              landfill it, haul it, or watching it get burned in the open, the
              math on pyrolysis is worth running. We&apos;ve done it for dozens
              of operators across different feedstocks and scales, and we&apos;re
              happy to walk through the numbers for your specific situation.
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
                Biochar and compost do fundamentally different things in soil.
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
            <Link
              href="/blog/bio-oil-applications"
              className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow group"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent mb-3">
                Biofuels
              </span>
              <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                5 Industrial Applications of Bio-Oil You Should Know
              </h3>
              <p className="mt-2 text-sm text-text-light">
                The five applications with the most commercial traction.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Explore Pyrolysis for Your Operation?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            We&apos;ve helped dozens of operators run the numbers on their
            specific feedstock and scale. Let&apos;s talk about yours.
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

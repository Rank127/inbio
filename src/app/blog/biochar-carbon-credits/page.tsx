import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "How Biochar Carbon Credits Work: A Guide for Landowners and Producers | iNBIO",
  description:
    "iNBIO's Raj Kathuria breaks down how biochar carbon removal credits actually work — registries, verification costs, revenue math, and what producers need to know before jumping in.",
};

export default function BiocharCarbonCreditsPost() {
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
                Carbon Markets
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              How Biochar Carbon Credits Work: A Guide for Landowners and
              Producers
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
              <span className="font-medium text-white/90">Raj Kathuria</span>
              <span>&middot;</span>
              <time dateTime="2026-03-13">March 13, 2026</time>
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
              src="/images/iStock-1312764772-1-1024x533.jpg"
              alt="Sustainable plant growth representing biochar carbon sequestration"
              width={1200}
              height={630}
              className="w-full h-auto object-cover rounded-xl"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-text-light leading-relaxed">
              &quot;Can I really make money from carbon credits with
              biochar?&quot; We get some version of that question on almost
              every call with a new client. The short answer is yes — a mid-size
              pyrolysis operation producing around 500 tons of biochar a year
              could realistically generate $180,000 to $210,000 in annual carbon
              credit revenue, on top of whatever the biochar itself sells for.
              But the longer answer matters more, because the path from
              &quot;making biochar&quot; to &quot;selling verified carbon
              removal credits&quot; has steps that trip people up.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              We&apos;ve walked enough clients through this process at iNBIO
              that we know where the real questions are. Here&apos;s what we
              tell them.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              The Carbon Logic — Why Biochar Counts as Removal
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              Here&apos;s how we explain it to our clients who aren&apos;t
              carbon-market people:
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              A tree pulls CO<sub>2</sub> out of the air and stores that carbon
              in its wood, leaves, and roots. When the tree dies and rots, the
              carbon goes right back up. Pyrolysis short-circuits that cycle. We
              take the biomass and cook it in an oxygen-free environment,
              converting it into biochar — a carbon-dense solid that doesn&apos;t
              break down. Peer-reviewed radiocarbon studies put biochar&apos;s
              persistence at 100 to 1,000+ years depending on production
              conditions and the soil it ends up in.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              That&apos;s genuine carbon dioxide removal. Not avoidance. Not
              offsetting something that might have happened. Actual carbon
              pulled from the atmosphere and locked into a stable form. That
              distinction matters a lot in today&apos;s credit markets.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              A good biochar — the kind our systems produce — contains 70% to
              90% fixed carbon by weight. You can measure that with standard lab
              methods (elemental analysis, proximate analysis), which gives you a
              precise number for how much CO<sub>2</sub> each ton represents.
              Buyers love that. Compare it to forest credits, where a wildfire
              can reverse a decade of sequestration overnight.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              Why Buyers Pay a Premium for Biochar Credits
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              Corporate carbon buyers have gotten sharper. The days of buying
              cheap avoidance offsets and calling it a climate strategy are
              winding down. Companies like Microsoft, Stripe, and Shopify are
              specifically purchasing durable carbon removal — and they&apos;re
              willing to pay for it.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Biochar hits the four criteria these buyers care about:
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              <strong className="text-text">Permanence.</strong> This is
              biochar&apos;s trump card. A hundred-year minimum is what most
              methodologies require. Biochar blows past that. Forest credits?
              One bad fire season and you&apos;re looking at reversal. Soil
              carbon from cover cropping? It disappears if the farmer changes
              practices. Biochar just sits there.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              <strong className="text-text">Measurability.</strong> You weigh
              the biochar, you test the carbon content, you do the math.
              It&apos;s not modeling. It&apos;s not estimation. The
              quantification is straightforward and auditable.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              <strong className="text-text">Additionality.</strong> Nobody
              builds a pyrolysis plant by accident. The capital investment, the
              feedstock logistics, the operational expertise — none of this
              happens without deliberate effort. That makes additionality an
              easy case to make. Without the credit revenue, the biomass would
              have decomposed or been burned, releasing its carbon back to the
              atmosphere.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              <strong className="text-text">No leakage.</strong> We&apos;re
              converting waste biomass — agricultural residues, forestry slash,
              food processing waste. We&apos;re not displacing food crops or
              causing land-use change. If anything, we&apos;re solving a
              disposal problem that would have generated emissions on its own.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              Registries: Which Ones and What We&apos;ve Seen
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              You can&apos;t just produce biochar and declare you&apos;ve
              created carbon credits. You need a recognized registry with an
              approved methodology. Here&apos;s our take on the landscape, based
              on what we&apos;ve actually worked with and what our clients ask
              about.
            </p>

            <h3 className="mt-8 text-xl font-bold text-text">Puro.earth</h3>

            <p className="mt-4 text-text-light leading-relaxed">
              This is the one we point most clients toward. Puro.earth is the
              leading registry for engineered carbon removal, and biochar is one
              of their core methodologies. Their CO Removal Certificates (CORCs)
              have become the benchmark. The requirements are specific and
              achievable for a well-run operation: minimum 50% organic carbon
              content (dry weight), waste or residue feedstock, H:C
              <sub>org</sub> molar ratio below 0.7, full lifecycle emissions
              accounting, and third-party verification.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              CORCs for biochar have been trading at $100 to $250 per ton of CO
              <sub>2</sub> removed. Projects with thorough documentation and
              clear co-benefits tend to land on the higher end.
            </p>

            <h3 className="mt-8 text-xl font-bold text-text">
              Verra (Verified Carbon Standard)
            </h3>

            <p className="mt-4 text-text-light leading-relaxed">
              Verra carries enormous name recognition — they&apos;re one of the
              biggest voluntary market registries globally. They&apos;ve
              developed biochar methodology with robust lifecycle assessment and
              monitoring requirements. If your buyers are large corporations
              with existing Verra relationships, this might be the easier sell.
              The market recognition is strong.
            </p>

            <h3 className="mt-8 text-xl font-bold text-text">
              European Biochar Certificate (EBC)
            </h3>

            <p className="mt-4 text-text-light leading-relaxed">
              Not a credit registry per se, but if you&apos;re looking at
              European markets, EBC certification is often the gateway. They
              define quality grades — basic, premium, and feed-grade — based on
              carbon content, contaminant limits, and production standards. Think
              of it as a prerequisite for accessing European carbon credit
              programs.
            </p>

            <h3 className="mt-8 text-xl font-bold text-text">Gold Standard</h3>

            <p className="mt-4 text-text-light leading-relaxed">
              Gold Standard has the strongest reputation for environmental and
              social safeguards. Their certification process is more involved,
              but credits from Gold Standard projects command premium pricing
              because buyers trust the rigor behind them.
            </p>

            <h3 className="mt-8 text-xl font-bold text-text">
              Other Platforms
            </h3>

            <p className="mt-4 text-text-light leading-relaxed">
              Carbon Future (now Carbonfuture) specializes in biochar CDR credits
              and acts as both a marketplace and a tracking platform. Various
              national programs are also emerging. Frankly, the landscape is
              shifting fast enough that what&apos;s available today may look
              different in 18 months. We keep a close eye on this for our
              clients.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              The Path from Production to Revenue
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              We&apos;ve broken this down into five steps based on what
              we&apos;ve seen work. Fair warning: the process is doable, but
              it&apos;s not fast, and there are a couple of spots where costs
              and timelines catch people off guard.
            </p>

            <h3 className="mt-8 text-xl font-bold text-text">
              Step 1: Audit Your Production Against Registry Requirements
            </h3>

            <p className="mt-4 text-text-light leading-relaxed">
              Before you register anywhere, take an honest look at where your
              operation stands. Registries want to see documented feedstock
              sourcing, consistent production temperatures, lab-verified biochar
              quality (carbon content, H:C ratio, contaminant levels), and
              meaningful production volume. If you&apos;re producing a few tons
              a year in a backyard kiln, the economics of verification won&apos;t
              pencil out. Most registries effectively require enough annual
              volume to justify the cost of third-party auditing.
            </p>

            <h3 className="mt-8 text-xl font-bold text-text">
              Step 2: Pick Your Registry
            </h3>

            <p className="mt-4 text-text-light leading-relaxed">
              Match the registry to your situation. Puro.earth is currently the
              most active for biochar CDR. But consider where your likely buyers
              are, what the registration and verification fees look like, how
              long credit issuance takes, and whether the platform has actual
              liquidity. We generally recommend Puro.earth for North American
              producers unless there&apos;s a specific reason to go elsewhere.
            </p>

            <h3 className="mt-8 text-xl font-bold text-text">
              Step 3: Build Your Project Design Document
            </h3>

            <p className="mt-4 text-text-light leading-relaxed">
              This is where you formalize everything: feedstock sourcing,
              production process details, quality control procedures, lifecycle
              emissions calculations, and your monitoring plan. The PDD is what
              the registry reviews to approve your project. It&apos;s detailed
              work, and getting it right the first time saves you a painful
              back-and-forth. We&apos;ve seen projects lose months to incomplete
              documentation.
            </p>

            <h3 className="mt-8 text-xl font-bold text-text">
              Step 4: Third-Party Verification
            </h3>

            <p className="mt-4 text-text-light leading-relaxed">
              This is where most projects stall, because verification costs
              surprise people. An accredited auditor reviews your documentation,
              inspects your facility, checks your biochar lab data, and confirms
              your carbon removal claims. Expect to pay $5,000 to $25,000
              depending on project complexity, and that&apos;s an annual cost —
              not a one-time fee. For a smaller operation, that number can feel
              steep until you see the credit revenue on the other side. Budget
              for it from day one.
            </p>

            <h3 className="mt-8 text-xl font-bold text-text">
              Step 5: Credit Issuance and Sales
            </h3>

            <p className="mt-4 text-text-light leading-relaxed">
              Once verified, the registry issues credits to your account. Now
              you need buyers. Options include direct sales to corporations
              (often the best margins), working through brokers, or listing on
              carbon credit marketplaces. The smartest move we&apos;ve seen
              producers make is locking in multi-year offtake agreements with
              corporate buyers who need guaranteed carbon removal for their
              net-zero commitments. That gives you predictable revenue instead
              of chasing spot-market prices.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              What the Revenue Actually Looks Like
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              Let&apos;s run real numbers instead of ranges.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Take a pyrolysis operation producing 500 tons of biochar per year
              at 80% carbon content. After lifecycle emissions deductions
              (feedstock transport, processing energy, etc.), you&apos;re looking
              at roughly 1,200 to 1,400 carbon removal credits annually.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              At current prices:
            </p>

            <ul className="mt-4 space-y-3 text-text-light">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  <strong className="text-text">
                    Conservative case ($100/credit):
                  </strong>{" "}
                  $120,000 to $140,000 per year
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  <strong className="text-text">
                    Mid-range ($150/credit):
                  </strong>{" "}
                  $180,000 to $210,000 per year
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0" />
                <span>
                  <strong className="text-text">
                    Premium credits with strong documentation ($200+/credit):
                  </strong>{" "}
                  $240,000 to $280,000+ per year
                </span>
              </li>
            </ul>

            <p className="mt-6 text-text-light leading-relaxed">
              Subtract $10,000 to $25,000 for annual verification and registry
              fees, and you&apos;re still looking at a significant revenue
              stream — one that stacks on top of biochar product sales.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              For context: average forest carbon offsets trade at $5 to $15 per
              ton. Direct air capture credits run $400 to $1,000+. Biochar sits
              in a sweet spot — more permanent than nature-based solutions, far
              more affordable than engineered alternatives.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Forward contracts (multi-year offtake agreements) are currently
              pricing at $80 to $180 per ton. You give up some upside, but you
              get revenue certainty. For most producers we work with, that
              tradeoff makes sense, at least for a portion of their credits.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              A Note for Landowners
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              You don&apos;t have to run a pyrolysis plant to participate in
              this market. We talk to landowners and farmers regularly who want
              in but don&apos;t want to build a facility. A few paths forward:
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Sell your agricultural residues or forestry waste to a biochar
              producer and negotiate a share of the carbon credit revenue. That
              feedstock has value now in a way it didn&apos;t five years ago.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Apply certified biochar to your fields and work with producers or
              aggregators to document the sequestration and claim credits. The
              paperwork is more involved than just spreading biochar, but the
              revenue potential is real.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Stack biochar application with other soil carbon practices —
              cover cropping, reduced tillage — for combined environmental and
              financial benefits. Some programs allow credit stacking, though
              the rules vary.
            </p>

            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              An Honest Look at Where This Market Stands
            </h2>

            <p className="mt-6 text-text-light leading-relaxed">
              We&apos;re bullish on biochar carbon credits, but we&apos;re not
              going to pretend the market is mature. A few things to keep your
              eyes open about:
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Verification costs eat into margins for smaller producers. If
              you&apos;re below a few hundred tons a year, the math gets tight.
              Aggregation — pooling credits from multiple small producers — is
              one solution, but the infrastructure for that is still being
              built.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Credit prices will fluctuate. We&apos;ve seen strong demand
              growth, driven by corporate net-zero pledges and regulatory
              frameworks like the EU Carbon Removal Certification Framework. But
              voluntary markets have had price swings before, and biochar
              credits aren&apos;t immune.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Supply is still constrained, which supports current pricing.
              Global biochar production capacity falls well short of buyer
              demand. That&apos;s good for existing producers, but it also means
              the market is small enough that a few large entrants could shift
              dynamics.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              From what we&apos;ve seen, the producers who are building
              documentation habits, investing in consistent quality, and
              establishing registry relationships now are going to be
              well-positioned as this market scales. The early movers aren&apos;t
              guaranteed to win, but they&apos;ll have relationships and track
              records that newcomers won&apos;t.
            </p>

            <p className="mt-6 text-text-light leading-relaxed">
              Our{" "}
              <Link
                href="/biochar"
                className="text-primary hover:text-primary-dark font-medium underline underline-offset-2"
              >
                biochar systems
              </Link>{" "}
              are engineered to meet the quality thresholds that leading
              registries require — because we knew from the start that carbon
              credit eligibility would be a defining factor in the economics of
              biochar production. If you want to talk through what this could
              look like for your specific operation,{" "}
              <Link
                href="/contact"
                className="text-primary hover:text-primary-dark font-medium underline underline-offset-2"
              >
                reach out to our team
              </Link>
              . We&apos;ve had this conversation enough times that we can
              usually tell you pretty quickly whether the numbers work.
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
            Ready to Explore Carbon Credit Revenue?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            We can walk you through the numbers for your specific operation and
            help you determine whether carbon credits pencil out.
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

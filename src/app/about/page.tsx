import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About iNBIO | Biomass-to-Energy Company, Salisbury MD",
  description:
    "Meet the team behind International BioRefineries. Learn about our mission to convert biomass waste into clean energy.",
};

const approachItems = [
  {
    title: "Engineering-First Solutions",
    description:
      "We do not sell a one-size-fits-all box. Every feedstock is different, and every client's goals are unique. iNBIO designs custom pyrolysis systems tailored to your specific biomass inputs, throughput requirements, and end-product targets. Our engineering-first approach means you get a solution built around your operation -- not the other way around.",
  },
  {
    title: "Full Lifecycle Support",
    description:
      "We partner with our clients from the earliest stages of feedstock assessment and feasibility analysis through system design, commissioning, operator training, and ongoing optimization. We also assist with carbon credit documentation and sustainability reporting, so you can capture the full environmental and financial value of your biorefinery operation.",
  },
  {
    title: "Sustainability as a Core Value",
    description:
      "For iNBIO, sustainability is not a marketing buzzword -- it is the foundation of everything we build. Our systems are designed to maximize energy recovery, minimize emissions, and produce biochar that actively sequesters carbon when applied to soils. We measure our success not only by system performance but by the positive environmental impact we help our clients achieve.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              International{" "}
              <span className="text-accent-light">BioRefineries</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              Converting agricultural residues, forestry byproducts, and organic
              waste streams into valuable energy products and carbon-negative
              materials -- building a cleaner, more sustainable economy.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Our Mission
            </h2>
            <div className="mt-8 mb-8 relative w-full aspect-[2/1] overflow-hidden rounded-xl">
              <Image
                src="/images/iStock-1312764772-1-768x400.jpg"
                alt="Sustainable biotech and clean energy vision at iNBIO International BioRefineries"
                width={768}
                height={400}
                className="rounded-xl object-cover w-full"
              />
            </div>
            <p className="mt-6 text-text-light leading-relaxed">
              At International BioRefineries (iNBIO), we believe that waste
              biomass is not a problem to manage -- it is a resource waiting to
              be unlocked. Our mission is to convert agricultural residues,
              forestry byproducts, and other organic waste streams into valuable
              energy products and carbon-negative materials that help build a
              cleaner, more sustainable economy.
            </p>
            <p className="mt-4 text-text-light leading-relaxed">
              Through advanced fast pyrolysis technology, we transform what would
              otherwise end up in landfills or open burns into bio-oil, biochar,
              and syngas -- products that displace fossil fuels, enrich soils,
              and sequester carbon for decades. Every ton of biomass we process
              means less waste, more clean energy, and measurable progress
              toward a carbon-negative future.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text">
                Who We Are
              </h2>
              <p className="mt-4 text-text-light leading-relaxed">
                iNBIO is a biorefinery engineering and technology company
                headquartered in Salisbury, Maryland, on the Eastern Shore of
                the Delmarva Peninsula. We specialize in designing, building,
                and operating fast pyrolysis systems that serve a broad range of
                industries -- from agriculture and forestry to construction,
                energy production, and environmental remediation.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                Our team combines deep engineering expertise with hands-on
                operational experience to deliver biomass-to-energy solutions
                that work in the real world, not just on paper.
              </p>
            </div>

            <div className="bg-surface-dark rounded-xl border border-border p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">BFB</p>
                  <p className="mt-1 text-sm text-text-light">
                    Reactor Technology
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">5--75</p>
                  <p className="mt-1 text-sm text-text-light">TPD Capacity</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">3</p>
                  <p className="mt-1 text-sm text-text-light">
                    Product Streams
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">Net &minus;</p>
                  <p className="mt-1 text-sm text-text-light">
                    Carbon Footprint
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
            Our Approach
          </h2>
          <p className="mt-4 text-lg text-text-light text-center max-w-2xl mx-auto">
            We bring engineering rigor, lifecycle partnership, and a genuine
            commitment to sustainability to every project we undertake.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {approachItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col bg-surface rounded-xl border border-border p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-text-light leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text text-center">
            Leadership
          </h2>

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl border border-border p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Headshot placeholder */}
                <div className="shrink-0 w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">RK</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text">
                    Raj Kathuria
                  </h3>
                  <p className="text-sm font-semibold text-primary mt-1">
                    Founder &amp; CEO
                  </p>
                  <p className="mt-4 text-sm text-text-light leading-relaxed">
                    Raj Kathuria founded International BioRefineries with a
                    clear vision: to make biomass pyrolysis technology practical,
                    accessible, and economically viable for industries that
                    generate organic waste. His passion for clean technology and
                    sustainable energy drives the company&apos;s commitment to
                    engineering excellence and real-world results.
                  </p>
                  <p className="mt-3 text-sm text-text-light leading-relaxed">
                    Under Raj&apos;s leadership, iNBIO has grown from a concept
                    into an operational biorefinery company delivering measurable
                    environmental and economic value to clients across the
                    Mid-Atlantic region and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text">
                Our Location
              </h2>
              <p className="mt-4 text-text-light leading-relaxed">
                iNBIO is based in Salisbury, Maryland, in the heart of the
                Delmarva Peninsula. Our location places us at the center of one
                of the most productive agricultural regions on the East Coast,
                with direct access to abundant biomass feedstock from poultry
                operations, grain farming, forestry, and food processing.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                This proximity to feedstock sources reduces transportation costs
                and carbon footprint while enabling us to serve clients
                throughout the Mid-Atlantic and beyond.
              </p>
            </div>

            <div className="bg-surface-dark rounded-xl border border-border p-8">
              <h3 className="text-lg font-semibold text-text mb-4">
                Visit Us
              </h3>
              <address className="not-italic text-sm text-text-light leading-relaxed space-y-2">
                <p className="font-semibold text-text">
                  International BioRefineries (iNBIO)
                </p>
                <p>31901 Tri-County Way, Suite 102B</p>
                <p>Salisbury, MD 21804</p>
              </address>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Get directions &amp; contact info
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let&apos;s Talk About Your Project
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Whether you are exploring biomass-to-energy for the first time or
            looking to optimize an existing operation, we would welcome the
            conversation.
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

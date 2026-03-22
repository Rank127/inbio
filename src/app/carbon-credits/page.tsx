import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biochar Carbon Credits & Carbon Removal",
  description:
    "iNBIO helps biochar producers and landowners generate verified carbon removal credits. Learn about Puro.earth, Verra, and BCR credit programs.",
};

const registries = [
  {
    name: "Puro.earth",
    desc: "Leading carbon removal marketplace with a dedicated biochar methodology. CORCs trade at $100–250/ton CO₂. Strong corporate buyer pool including Microsoft and Shopify.",
    best: "Best for: North American producers seeking premium pricing",
  },
  {
    name: "Verra (VCS)",
    desc: "One of the largest voluntary carbon market registries globally. Biochar methodology VM0044 covers both sequestration and avoided emissions. Strong name recognition with corporate buyers.",
    best: "Best for: Producers with corporate buyers already using Verra",
  },
  {
    name: "Gold Standard",
    desc: "Strongest reputation for environmental and social safeguards. More involved certification, but credits command premium pricing due to buyer trust in the rigor.",
    best: "Best for: Projects with strong co-benefit narratives",
  },
  {
    name: "European Biochar Certificate (EBC)",
    desc: "Defines quality grades — basic, premium, and feed-grade — based on carbon content and contaminant limits. Gateway to European carbon credit programs.",
    best: "Best for: Producers targeting European markets",
  },
];

export default function CarbonCredits() {
  return (
    <>
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Biochar Carbon Credits
            </h1>
            <p className="mt-6 text-lg text-white/85 leading-relaxed">
              Biochar locks carbon underground for centuries — generating verified carbon
              removal credits worth $100–250+ per ton of CO₂. We help producers and landowners
              navigate the path from production to revenue.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center mt-8 px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors">
              Discuss Carbon Credit Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Why Biochar Credits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text">Why Buyers Pay a Premium for Biochar Credits</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Permanence", desc: "100–1,000+ years. Biochar doesn't decompose. Forest credits can burn. Soil carbon disappears when farming practices change. Biochar stays." },
              { title: "Measurability", desc: "Weigh it, test the carbon content, do the math. No modeling, no estimation. The quantification is straightforward and auditable." },
              { title: "Additionality", desc: "Nobody builds a pyrolysis plant by accident. The capital investment and expertise make the additionality case straightforward." },
              { title: "No Leakage", desc: "We convert waste biomass — not food crops. No land-use change, no displacement. If anything, we solve a disposal problem." },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-surface rounded-xl border border-border">
                <h3 className="font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text">How It Works</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Produce Biochar", desc: "Convert biomass waste into high-carbon biochar via fast pyrolysis. Our systems produce biochar with 70–90% fixed carbon — well above registry thresholds." },
              { step: "2", title: "Document & Verify", desc: "We help you build the project design document, track chain-of-custody, and navigate third-party verification with accredited auditors." },
              { step: "3", title: "Earn Verified Credits", desc: "Once verified, the registry issues credits to your account. Sell direct to corporations, through brokers, or lock in multi-year offtake agreements." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-text">{item.title}</h3>
                <p className="mt-3 text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Potential */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text">Revenue Potential</h2>
          <p className="mt-4 text-text-light max-w-2xl">
            Based on a mid-size operation producing 500 tons of biochar per year at 80% carbon content,
            yielding ~1,200–1,400 carbon removal credits annually:
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-surface rounded-xl border border-border text-center">
              <p className="text-sm text-text-lighter uppercase font-semibold">Conservative</p>
              <p className="text-sm text-text-light mt-1">$100/credit</p>
              <p className="mt-2 text-3xl font-bold text-text">$120K–140K</p>
              <p className="text-sm text-text-light">per year</p>
            </div>
            <div className="p-6 bg-primary/5 rounded-xl border-2 border-primary text-center">
              <p className="text-sm text-primary uppercase font-semibold">Mid-Range</p>
              <p className="text-sm text-text-light mt-1">$150/credit</p>
              <p className="mt-2 text-3xl font-bold text-primary">$180K–210K</p>
              <p className="text-sm text-text-light">per year</p>
            </div>
            <div className="p-6 bg-surface rounded-xl border border-border text-center">
              <p className="text-sm text-text-lighter uppercase font-semibold">Premium</p>
              <p className="text-sm text-text-light mt-1">$200+/credit</p>
              <p className="mt-2 text-3xl font-bold text-text">$240K–280K+</p>
              <p className="text-sm text-text-light">per year</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-text-lighter">
            Revenue is on top of biochar product sales. Subtract $10K–25K for annual verification and registry fees.
          </p>
        </div>
      </section>

      {/* Registries */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text">Registries We Work With</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {registries.map((reg) => (
              <div key={reg.name} className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold text-text">{reg.name}</h3>
                <p className="mt-3 text-sm text-text-light leading-relaxed">{reg.desc}</p>
                <p className="mt-3 text-sm font-semibold text-primary">{reg.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Landowners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text">For Landowners &amp; Farmers</h2>
          <p className="mt-4 text-text-light max-w-2xl">
            You don&apos;t need to run a pyrolysis plant to participate in biochar carbon markets.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-surface rounded-xl border border-border">
              <h3 className="font-bold text-text">Sell Your Feedstock</h3>
              <p className="mt-2 text-sm text-text-light">
                Agricultural residues and forestry waste have real value now. Sell to a biochar
                producer and negotiate a share of carbon credit revenue.
              </p>
            </div>
            <div className="p-6 bg-surface rounded-xl border border-border">
              <h3 className="font-bold text-text">Apply Certified Biochar</h3>
              <p className="mt-2 text-sm text-text-light">
                Apply certified biochar to your fields and work with producers or aggregators
                to document the sequestration and claim credits.
              </p>
            </div>
            <div className="p-6 bg-surface rounded-xl border border-border">
              <h3 className="font-bold text-text">Stack Practices</h3>
              <p className="mt-2 text-sm text-text-light">
                Combine biochar with cover cropping and reduced tillage for combined
                environmental and financial benefits. Some programs allow credit stacking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Monetize Your Carbon Removal?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Whether you&apos;re producing biochar or considering it, we can tell you quickly
            whether the carbon credit numbers work for your operation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors">
              Contact Us
            </Link>
            <Link href="/quote-epc" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors">
              Request a Plant Proposal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

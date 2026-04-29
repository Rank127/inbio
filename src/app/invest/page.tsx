import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InvestEmailForm from "@/components/InvestEmailForm";
import InvestFAQ from "@/components/InvestFAQ";

export const metadata: Metadata = {
  title: "Invest in iNBIO — $25/ton Waste to $615/ton Revenue",
  description:
    "iNBIO converts a ton of biomass waste into 103 gal of bio-oil + 400 lbs of biochar + federal 45Z credits + carbon credits — $615 in revenue per ton. Patented fast pyrolysis. Pilot commissioning Q4 2026. Raising $3M under Reg D 506(c).",
};

const whyInvestCards = [
  {
    title: "Unit Economics That Stand Up",
    description:
      "One ton of biomass ($25 feedstock) yields 103 gal of bio-oil ($412) + 400 lbs of biochar ($70) + 45Z federal credits ($103) + carbon credits ($30) = $615 of revenue per ton — a 24× input-to-output ratio before operating costs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Patented Fast Pyrolysis",
    description:
      "U.S. Patent 9,121,644 and Canadian Patent 2,832,550 cover our moving-bed thermal reactor. A U.S. utility application (18/672,256) is pending on the full fast pyrolysis system.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Customers Already in Place",
    description:
      "Signed supply agreement with a Baltimore fuel distributor for municipal boiler use. Confidential LOI from a carbon-credit buyer using bio-oil to plug depleted oil wells. Feedstock supply contracted.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "150+ Years of Plant Execution",
    description:
      "CEO Raj Kathuria and CTO Phil Badger — inventor of the patented reactor — lead iNBIO, supported by an eight-person engineering services team across process, mechanical, electrical, instrumentation, piping, civil, and rotary disciplines.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Request an Invitation",
    description:
      "Sign up below or contact us to receive an invitation to our private investment round on WeFunder.",
  },
  {
    number: "02",
    title: "Review the Offering",
    description:
      "Access our offering details, financials, and use-of-funds plan. Ask questions directly with our team.",
  },
  {
    number: "03",
    title: "Invest Directly",
    description:
      "Complete your investment through WeFunder and become part of the clean energy transition. Receive regular updates as we grow.",
  },
];

const stats = [
  { value: "$3M", label: "Raising Now" },
  { value: "24×", label: "Revenue-to-Feedstock Ratio" },
  { value: "Q4 2026", label: "Pilot Commissioning" },
  { value: "75 TPD", label: "Commercial Plant Engineered" },
];

export default function InvestPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3">
              Private Investment Round
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              $25 of Waste.
              <br />
              <span className="text-accent-light">$615 of Revenue per Ton.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              iNBIO is raising $3M via convertible note under Regulation D 506(c) to install
              our patented fast-pyrolysis pilot plant (commissioning Q4 2026) and complete
              engineering on our 75 TPD commercial unit. Equipment is already purchased.
              First customer agreement and LOI are already in hand.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#updates"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
              >
                Request Investment Details
              </a>
              <a
                href="#pitch-deck"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors"
              >
                View Pitch Deck
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Deck */}
      <section id="pitch-deck" className="py-16 sm:py-20 bg-surface scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Investor Materials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Investor Pitch Deck
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              Twelve slides covering our patented fast pyrolysis technology, 24× input-to-output
              economics, $3.25M+ in non-dilutive grants secured, signed customer agreements,
              and modeled investor returns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <a
                href="/docs/pitch-deck.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow"
                aria-label="Open the iNBIO investor pitch deck in a new tab"
              >
                <Image
                  src="/images/pitch-cover.png"
                  alt="iNBIO investor pitch deck cover slide"
                  width={2560}
                  height={1440}
                  className="w-full h-auto"
                  priority={false}
                />
                <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-primary-dark px-6 py-3 rounded-lg font-semibold shadow-lg">
                    Open Deck →
                  </span>
                </div>
              </a>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <a
                href="/docs/pitch-deck.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-6 py-4 bg-primary-dark hover:bg-primary text-white rounded-lg transition-colors"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 3h7v7m0-7L10 14m-3 7h-2a2 2 0 01-2-2V5a2 2 0 012-2h2" />
                  </svg>
                  <span className="font-semibold">View Online</span>
                </span>
                <span className="text-sm text-white/70">Full deck</span>
              </a>

              <a
                href="/docs/pitch-deck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-6 py-4 bg-white hover:bg-surface border border-border hover:border-primary text-text rounded-lg transition-colors"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="font-semibold">Download PDF</span>
                </span>
                <span className="text-sm text-text-light">~255 KB</span>
              </a>

              <a
                href="/docs/pitch-deck.pptx"
                className="flex items-center justify-between w-full px-6 py-4 bg-white hover:bg-surface border border-border hover:border-primary text-text rounded-lg transition-colors"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="font-semibold">Download PowerPoint</span>
                </span>
                <span className="text-sm text-text-light">2.6 MB</span>
              </a>

              <p className="text-xs text-text-lighter pt-3 leading-relaxed">
                Reg D 506(c) · Accredited investors only. Forward-looking statements
                in this deck are subject to risks and uncertainties. See full offering
                documents before making any investment decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Why Invest in iNBIO?
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              We are not selling the future. Equipment is bought. Patents are issued.
              First customer is signed. This round finishes the plant.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {whyInvestCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col p-8 bg-surface rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-200"
              >
                <div className="text-primary mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-text">{card.title}</h3>
                <p className="mt-3 text-sm text-text-light leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-accent-light">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              How to Invest
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              Investing in iNBIO is straightforward. Here&apos;s how it works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-accent-light">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#updates"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section id="updates" className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Stay Updated on Our Raise
          </h2>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto mb-10">
            Get campaign updates, company news, and key milestones delivered to your inbox.
            Be the first to know when we hit our funding goals.
          </p>
          <InvestEmailForm />
        </div>
      </section>

      {/* Deal Terms */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Deal Terms
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              $3M convertible note to install the pilot plant, fund first operations,
              complete engineering on the 75 TPD commercial unit, and retire existing debt.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-surface rounded-xl border border-border">
                <p className="text-sm text-text-lighter uppercase tracking-wider font-semibold">Instrument</p>
                <p className="mt-1 text-lg font-bold text-text">Convertible Note</p>
              </div>
              <div className="p-6 bg-surface rounded-xl border border-border">
                <p className="text-sm text-text-lighter uppercase tracking-wider font-semibold">Raise Amount</p>
                <p className="mt-1 text-lg font-bold text-text">$3,000,000</p>
              </div>
              <div className="p-6 bg-surface rounded-xl border border-border">
                <p className="text-sm text-text-lighter uppercase tracking-wider font-semibold">Interest Rate</p>
                <p className="mt-1 text-lg font-bold text-text">7% per annum</p>
              </div>
              <div className="p-6 bg-surface rounded-xl border border-border">
                <p className="text-sm text-text-lighter uppercase tracking-wider font-semibold">Maturity</p>
                <p className="mt-1 text-lg font-bold text-text">2 years</p>
              </div>
              <div className="p-6 bg-surface rounded-xl border border-border sm:col-span-2">
                <p className="text-sm text-text-lighter uppercase tracking-wider font-semibold">Conversion Discount</p>
                <p className="mt-1 text-lg font-bold text-text">20% discount to next qualified financing round</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-primary-dark/5 rounded-xl border border-primary/20">
              <p className="text-sm font-semibold text-primary mb-3">Use of Funds</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex justify-between"><span>Repay existing bank note</span><span className="font-semibold text-text">$1,400,000</span></li>
                <li className="flex justify-between"><span>Complete 6 TPD demonstration plant</span><span className="font-semibold text-text">$1,100,000</span></li>
                <li className="flex justify-between"><span>Commissioning &amp; first production runs</span><span className="font-semibold text-text">$250,000</span></li>
                <li className="flex justify-between"><span>Working capital</span><span className="font-semibold text-text">$250,000</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              Common questions about investing in iNBIO.
            </p>
          </div>
          <InvestFAQ />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Equipment Bought. Customer Signed. Patents Issued.
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            $3M closes the gap between a warehoused pilot and a revenue-generating plant.
            Accredited investors welcome.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#updates"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
            >
              Request Investment Details
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-8 text-xs text-white/50 max-w-2xl mx-auto leading-relaxed">
            This page is for informational purposes only and does not constitute an offer to sell
            or a solicitation of an offer to buy any securities. Any such offer will only be made
            through official offering documents. This offering is made under Regulation D Rule 506(c)
            and is available only to accredited investors as defined by the SEC. Investing in
            early-stage companies involves significant risk, including the potential loss of your
            entire investment.
          </p>
        </div>
      </section>
    </>
  );
}

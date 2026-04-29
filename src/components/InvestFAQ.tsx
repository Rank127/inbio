"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What type of offering is this?",
    a: "iNBIO is raising capital through a Regulation D Rule 506(c) private round via WeFunder. This allows us to accept direct investments from accredited investors under a verified-accreditation process.",
  },
  {
    q: "Who can invest?",
    a: "Accredited investors only, as defined by the SEC. Generally: individuals with a net worth exceeding $1 million (excluding primary residence) or annual income exceeding $200,000 ($300,000 with a spouse) for the past two years. Accreditation is verified as part of the investment process.",
  },
  {
    q: "What stage is the plant in?",
    a: "95% of the pilot-plant equipment has been purchased and is warehoused. Commissioning is targeted for Q4 2026 on the Eastern Shore of Maryland. Prior continuous-run pilots have validated the 45% bio-oil / 20% biochar yield on woody biomass feedstock.",
  },
  {
    q: "What are the unit economics?",
    a: "Per ton of biomass feedstock ($25 input, conservative assumptions): 103 gallons of bio-oil at $4.00/gal = $412; 400 lbs of biochar at $350/ton = $70; federal 45Z clean-fuel tax credit at $1.00/gal of bio-oil = $103; biochar carbon credits at $150/ton = $30. Total: $615 of revenue per ton of feedstock — a 24× input-to-output ratio before operating costs.",
  },
  {
    q: "Who are your customers?",
    a: "A Baltimore fuel distributor has signed an agreement for municipal boiler supply. A carbon-credit buyer plugging depleted oil wells with renewable oil has issued a confidential Letter of Intent. Discussions with Class I rail wholesalers are underway. Feedstock supply is already contracted.",
  },
  {
    q: "Is bio-oil the same as biodiesel?",
    a: "No. Bio-oil is the liquid product of fast pyrolysis, used as an industrial boiler fuel, as a feedstock for upgraded renewable fuels, and as a durable carbon-removal mechanism when injected into depleted oil wells. Biodiesel is a chemically distinct transesterification product of vegetable oils — unrelated to our process.",
  },
  {
    q: "What is the proprietary technology?",
    a: "U.S. Patent 9,121,644 and Canadian Patent 2,832,550 cover our moving-bed thermal treatment reactor and moving-bed filter. A U.S. utility patent application (Serial No. 18/672,256, Docket INBIO-001) is pending on the full Fast Pyrolysis System.",
  },
  {
    q: "What will iNBIO use the funds for?",
    a: "The $3M use of funds is: $1.4M to retire the existing bank note, $1.1M to complete the 6 TPD pilot plant, $250K for commissioning and first production runs, and $250K for working capital. Detailed use-of-funds breakdowns are available in the offering documents.",
  },
  {
    q: "What are the risks?",
    a: "Investing in early-stage companies carries significant risk, including the possible loss of your entire investment. Forward-looking statements about commissioning dates, commercial plant timelines, and customer agreements are subject to risks and uncertainties. iNBIO's previous Salisbury, MD site is the subject of neighborhood litigation, which is why we are relocating to the Eastern Shore. You should only invest money you can afford to lose. Read the full offering documents before making any investment decision.",
  },
  {
    q: "When will I see returns?",
    a: "Returns are not guaranteed and the timeline is uncertain. Equity in private companies is illiquid — there is no public market to sell your shares. Returns may come through a future acquisition, IPO, or dividend distribution, but none of these outcomes is assured.",
  },
  {
    q: "How does the investment process work?",
    a: "Request access below, receive an invitation to our private round on WeFunder, review offering documents, complete accreditation verification, and invest directly through the platform.",
  },
];

export default function InvestFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-border">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left"
          >
            <span className="text-base font-semibold text-text pr-4">
              {faq.q}
            </span>
            <svg
              className={`w-5 h-5 text-text-lighter shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === i && (
            <div className="pb-5 text-sm text-text-light leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

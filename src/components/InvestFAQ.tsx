"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What type of offering is this?",
    a: "iNBIO is raising capital through a Regulation D Rule 506(c) private round. This allows us to accept direct investments from accredited investors while we prepare for a broader public offering. The round is facilitated through WeFunder's private investment platform.",
  },
  {
    q: "Who can invest?",
    a: "This offering is currently open to accredited investors as defined by the SEC. Generally, this means individuals with a net worth exceeding $1 million (excluding primary residence) or annual income exceeding $200,000 ($300,000 with a spouse) for the past two years. Accreditation will be verified as part of the investment process.",
  },
  {
    q: "What are the risks?",
    a: "Investing in early-stage companies carries significant risk, including the possible loss of your entire investment. iNBIO is a growth-stage company and there is no guarantee of returns or liquidity. You should only invest money you can afford to lose. We encourage you to read the full offering documents before making any investment decision.",
  },
  {
    q: "When will I see returns?",
    a: "Returns are not guaranteed and the timeline is uncertain. Equity in private companies is illiquid — there is no public market to sell your shares. Returns may come through a future acquisition, IPO, or dividend distribution, but none of these outcomes are assured.",
  },
  {
    q: "How does the investment process work?",
    a: "After requesting access, you will receive an invitation to our private round on WeFunder. There you can review offering details, financials, and use-of-funds plan. Once you complete the accreditation verification, you can invest directly through the platform.",
  },
  {
    q: "What will iNBIO use the funds for?",
    a: "Funds raised will be used to scale our fast pyrolysis operations, including equipment procurement, facility buildout, feedstock supply chain development, and go-to-market activities for our biochar and biofuel product lines. Detailed use-of-funds breakdowns are available in our offering documents.",
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

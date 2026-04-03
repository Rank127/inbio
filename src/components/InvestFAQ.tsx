"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Regulation Crowdfunding (Reg CF)?",
    a: "Reg CF is a provision under the JOBS Act that allows everyday investors — not just accredited ones — to invest in early-stage companies. Offerings are made through SEC-registered platforms like WeFunder, with annual limits on how much each individual can invest based on income and net worth.",
  },
  {
    q: "How much can I invest?",
    a: "Under Reg CF rules, investment limits depend on your annual income and net worth. If both are below $124,000, you can invest the greater of $2,500 or 5% of the lesser of your income or net worth. If either exceeds $124,000, you can invest up to 10% of the lesser, with a maximum of $124,000 per year across all Reg CF offerings.",
  },
  {
    q: "What are the risks?",
    a: "Investing in early-stage companies carries significant risk, including the possible loss of your entire investment. iNBIO is a growth-stage company and there is no guarantee of returns or liquidity. You should only invest money you can afford to lose. We encourage you to read the full offering documents on WeFunder before making any investment decision.",
  },
  {
    q: "When will I see returns?",
    a: "Returns on Reg CF investments are not guaranteed and the timeline is uncertain. Equity in private companies is illiquid — there is no public market to sell your shares. Returns may come through a future acquisition, IPO, or dividend distribution, but none of these outcomes are assured.",
  },
  {
    q: "How is my investment protected?",
    a: "All Reg CF offerings are filed with the SEC and conducted through registered funding portals. WeFunder holds funds in escrow until the minimum fundraising target is met. If the target is not reached, your money is returned. iNBIO provides audited financials and regular investor updates as required by SEC regulations.",
  },
  {
    q: "What will iNBIO use the funds for?",
    a: "Funds raised will be used to scale our fast pyrolysis operations, including equipment procurement, facility buildout, feedstock supply chain development, and go-to-market activities for our biochar and biofuel product lines. Detailed use-of-funds breakdowns are available in our WeFunder offering documents.",
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

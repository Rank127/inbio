import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Plant Proposal",
  description:
    "Request a proposal for iNBIO to design, build, and operate a fast pyrolysis plant at your location. EPC and Build + Operate models available.",
};

export default function QuoteEpcLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

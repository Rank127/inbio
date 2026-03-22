import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request an Equipment Quote",
  description:
    "Request a quote for modular OEM fast pyrolysis equipment from iNBIO. Systems available from 5 to 75 TPD capacity.",
};

export default function QuoteOemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

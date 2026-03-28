import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Product Quote",
  description:
    "Request a custom quote for biochar, bio-oil, syngas, renewable diesel, and other pyrolysis products from iNBIO.",
};

export default function QuoteProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

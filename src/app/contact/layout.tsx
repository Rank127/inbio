import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact iNBIO | International BioRefineries",
  description:
    "Get in touch with International BioRefineries in Salisbury, MD. Request a feedstock assessment, product sample, or project consultation.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

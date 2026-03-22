import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Biomass to Energy via Fast Pyrolysis | iNBIO",
    template: "%s | iNBIO",
  },
  description:
    "International BioRefineries converts biomass waste into bio-oil, biochar, and syngas through fast pyrolysis. Clean energy from biomass.",
  metadataBase: new URL("https://inbio.net"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inbio.net",
    siteName: "iNBIO - International BioRefineries",
    title: "Biomass to Energy via Fast Pyrolysis | iNBIO",
    description:
      "International BioRefineries converts biomass waste into bio-oil, biochar, and syngas through fast pyrolysis. Clean energy from biomass.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biomass to Energy via Fast Pyrolysis | iNBIO",
    description:
      "Converting biomass waste into bio-oil, biochar, and syngas through fast pyrolysis.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "International BioRefineries, Inc.",
            alternateName: "iNBIO",
            url: "https://inbio.net",
            email: "Raj@inbio.net",
            address: {
              "@type": "PostalAddress",
              streetAddress: "31901 Tri-County Way, Suite 102B",
              addressLocality: "Salisbury",
              addressRegion: "MD",
              postalCode: "21804",
              addressCountry: "US",
            },
            sameAs: [],
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

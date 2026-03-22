"use client";

import Link from "next/link";
import { useState } from "react";

const serviceLines = [
  {
    label: "Buy BioChar & BioFuel",
    href: "/buy-biochar-biofuel",
    children: [
      { label: "Biochar Products", href: "/biochar" },
      { label: "Bio-Oil & Biofuels", href: "/biofuels" },
      { label: "Biochar Applications", href: "/biochar-applications" },
      { label: "Biofuel Applications", href: "/biofuel-applications" },
      { label: "Request a Quote", href: "/quote-products" },
    ],
  },
  {
    label: "Build + Operate a Plant",
    href: "/build-operate-plant",
    children: [
      { label: "Our Technology", href: "/our-technology" },
      { label: "System Specs", href: "/fast-pyrolysis-specs" },
      { label: "Request a Proposal", href: "/quote-epc" },
    ],
  },
  {
    label: "OEM Equipment",
    href: "/oem-equipment",
    children: [
      { label: "Modular Systems (5–75 TPD)", href: "/modular-systems" },
      { label: "Request Equipment Quote", href: "/quote-oem" },
    ],
  },
];

const navLinks = [
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-bold text-primary">iNBIO</span>
            <span className="hidden sm:inline text-sm text-text-light">
              International BioRefineries
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {serviceLines.map((service) => (
              <div
                key={service.href}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(service.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={service.href}
                  className="px-3 py-2 text-sm font-medium text-text hover:text-primary transition-colors"
                >
                  {service.label}
                  <svg
                    className="inline-block w-3 h-3 ml-1"
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
                </Link>
                {openDropdown === service.href && (
                  <div className="absolute top-full left-0 w-56 bg-white border border-border rounded-lg shadow-lg py-2 z-50">
                    {service.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-text hover:bg-surface hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-text hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text hover:text-primary"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-1">
            {serviceLines.map((service) => (
              <div key={service.href}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === service.href ? null : service.href)
                  }
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-text hover:text-primary"
                >
                  {service.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === service.href ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === service.href && (
                  <div className="pl-4 space-y-1">
                    <Link
                      href={service.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 text-sm text-primary font-medium"
                    >
                      Overview
                    </Link>
                    {service.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-text-light hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-text hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-2 mt-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

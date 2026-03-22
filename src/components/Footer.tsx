import Link from "next/link";

const footerSections = [
  {
    title: "Products & Services",
    links: [
      { label: "Buy BioChar & BioFuel", href: "/buy-biochar-biofuel" },
      { label: "Build + Operate a Plant", href: "/build-operate-plant" },
      { label: "OEM Equipment", href: "/oem-equipment" },
      { label: "Carbon Credits", href: "/carbon-credits" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "Our Technology", href: "/our-technology" },
      { label: "System Specs", href: "/fast-pyrolysis-specs" },
      { label: "Biochar", href: "/biochar" },
      { label: "Biofuels", href: "/biofuels" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About iNBIO", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">iNBIO</h3>
            <p className="text-sm text-white/80 mb-4">
              International BioRefineries, Inc.
            </p>
            <address className="text-sm text-white/70 not-italic leading-relaxed">
              31901 Tri-County Way
              <br />
              Suite 102B
              <br />
              Salisbury, MD 21804
            </address>
            <div className="mt-4 space-y-1">
              <a
                href="mailto:Raj@inbio.net"
                className="block text-sm text-white/80 hover:text-accent-light transition-colors"
              >
                Raj@inbio.net
              </a>
              <a
                href="https://inbio.net"
                className="block text-sm text-white/80 hover:text-accent-light transition-colors"
              >
                inbio.net
              </a>
            </div>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-accent-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} International BioRefineries, Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Converting biomass waste into clean energy &amp; carbon-negative materials.
          </p>
        </div>
      </div>
    </footer>
  );
}

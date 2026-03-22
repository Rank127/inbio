import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [new URL("https://inbio.net/**")],
  },

  async redirects() {
    return [
      {
        source: "/blogs/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/main/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source:
          "/exploring-fast-pyrolysis-technology-for-biomass-waste-to-biochar/",
        destination: "/blog/what-is-fast-pyrolysis/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

# iNBIO Image Guide

Complete list of every image needed for the site, organized by directory. Source or create these images and place them in the corresponding folders before launch.

---

## hero/ (1200x630px or larger)

Used as page hero banners and Open Graph sharing images.

| Filename | Description | Recommended Alt Text |
|----------|-------------|---------------------|
| hero-home.jpg | Biomass waste (wood chips, crop residues) or pyrolysis facility exterior | Biomass waste including wood chips and crop residues ready for fast pyrolysis conversion at iNBIO |
| hero-biochar.jpg | Close-up of biochar granules | Close-up of engineered biochar granules produced by iNBIO fast pyrolysis |
| hero-biofuels.jpg | Bio-oil sample or industrial boiler burning bio-oil | Renewable bio-oil produced from biomass waste through iNBIO fast pyrolysis technology |
| hero-technology.jpg | Pyrolysis reactor or process flow diagram | iNBIO fast pyrolysis reactor technology for biomass-to-energy conversion |
| hero-about.jpg | Team photo or facility exterior | International BioRefineries team and facility in Salisbury, Maryland |
| hero-contact.jpg | Office or facility entrance | iNBIO International BioRefineries office entrance in Salisbury MD |

---

## products/

Product photos for the Biochar and Biofuels pages.

| Filename | Description | Recommended Alt Text |
|----------|-------------|---------------------|
| bio-oil-sample.jpg | Dark liquid bio-oil in a glass or lab container | Dark liquid bio-oil sample produced from biomass via fast pyrolysis |
| biochar-granules.jpg | Engineered biochar granules, top-down or angled view | Engineered biochar granules certified to IBI and EBC quality standards |
| biochar-microscope.jpg | Microscopic view showing biochar pore structure | Microscopic image of biochar pore structure showing high surface area |
| syngas-diagram.jpg | Syngas recycling loop diagram showing energy recovery | Diagram of syngas recycling loop powering the pyrolysis reactor with zero external fuel |
| biochar-bags.jpg | Bagged biochar product ready for sale or shipment | Bagged iNBIO engineered biochar product ready for agricultural and filtration use |

---

## technology/

Technical photos and diagrams for the Our Technology and Fast-Pyrolysis Specs pages.

| Filename | Description | Recommended Alt Text |
|----------|-------------|---------------------|
| process-diagram.jpg | Full fast pyrolysis process flow from feedstock to products | Fast pyrolysis process flow diagram showing biomass conversion to bio-oil, biochar, and syngas |
| reactor.jpg | Fluidized bed reactor photo or rendering | iNBIO fluidized bed fast pyrolysis reactor for biomass conversion |
| feedstock-prep.jpg | Biomass drying and sizing equipment | Biomass feedstock preparation equipment for drying and sizing before pyrolysis |
| modular-unit.jpg | Factory-built modular reactor unit on transport trailer | Modular fast pyrolysis reactor unit designed for rapid deployment to biomass sites |
| controls.jpg | Control panel with process monitoring screens | Pyrolysis reactor control panel with real-time process monitoring and automation |

---

## team/

Team headshots and facility photos for the About page.

| Filename | Description | Recommended Alt Text |
|----------|-------------|---------------------|
| raj-kathuria.jpg (400x400px) | Professional headshot of Raj Kathuria, founder | Raj Kathuria, founder of International BioRefineries (iNBIO), Salisbury MD |
| team-photo.jpg | Group photo of the iNBIO team at the facility | International BioRefineries team at the Salisbury MD biorefinery facility |
| facility-exterior.jpg | Exterior view of the iNBIO facility | iNBIO International BioRefineries facility exterior in Salisbury, Maryland |
| facility-aerial.jpg | Aerial or drone shot of the facility and grounds | Aerial view of iNBIO biomass-to-energy facility on the Delmarva Peninsula |

---

## applications/

Application-specific photos for Biochar Applications and Biofuel Applications pages.

| Filename | Description | Recommended Alt Text |
|----------|-------------|---------------------|
| biochar-soil.jpg | Biochar being mixed into agricultural soil | Biochar soil amendment being mixed into farmland to improve fertility and sequester carbon |
| biochar-stormwater.jpg | Stormwater filtration system using biochar media | Engineered biochar stormwater filtration system removing heavy metals and nutrients from runoff |
| biochar-concrete.jpg | Biochar being added to a concrete mix | Biochar additive in concrete mix for reduced carbon footprint and improved material performance |
| biochar-compost.jpg | Composting operation with biochar amendment | Biochar-enhanced composting operation reducing odor and accelerating decomposition |
| bio-oil-boiler.jpg | Industrial boiler running on bio-oil fuel | Industrial boiler burning renewable bio-oil as a fossil fuel replacement |
| saf-aircraft.jpg | Sustainable aviation fuel concept (aircraft or fuel) | Sustainable aviation fuel derived from fast pyrolysis bio-oil for lower-carbon flight |
| asphalt-paving.jpg | Road paving with bio-oil binder in asphalt | Asphalt paving using bio-oil binder as a renewable alternative to petroleum-based bitumen |

---

## blog/ (1200x630px)

Featured images for each blog post, used as hero and OG image.

| Filename | For Blog Post | Recommended Alt Text |
|----------|---------------|---------------------|
| blog-fast-pyrolysis.jpg | Exploring Fast Pyrolysis Technology for Biomass Waste to Biochar | Fast pyrolysis technology converting biomass waste into biochar and renewable energy products |
| blog-biochar-compost.jpg | What Is Biochar and Why Does It Matter? | Biochar granules showing the carbon-rich material used for soil improvement and carbon sequestration |
| blog-carbon-credits.jpg | How Biochar Carbon Credits Work | Biochar carbon credits concept showing verified carbon removal through pyrolysis biochar |
| blog-bio-oil-apps.jpg | Bio-Oil vs. Fossil Fuel: A Carbon Emissions Comparison | Bio-oil compared to fossil fuel showing lifecycle carbon emissions reduction |
| blog-saf.jpg | Poultry Litter to Energy: A Delmarva Opportunity | Poultry litter feedstock being converted to biochar and bio-oil via pyrolysis on the Delmarva Peninsula |
| blog-stormwater.jpg | Biochar for Stormwater Management: How It Works | Biochar stormwater filtration system treating urban runoff and removing pollutants |
| blog-economics.jpg | The Role of Syngas in Self-Sustaining Pyrolysis Systems | Syngas energy recovery loop powering a self-sustaining fast pyrolysis reactor system |
| blog-usda-incentives.jpg | Biomass Feedstock Guide: What Can Be Pyrolyzed? | Various biomass feedstocks including wood waste, crop residues, and nut shells suitable for pyrolysis |

---

## og/ (1200x630px)

Open Graph social sharing images for pages without a specific hero image.

| Filename | Description | Recommended Alt Text |
|----------|-------------|---------------------|
| og-default.jpg | Default branded OG image with iNBIO logo, tagline, and brand colors | iNBIO International BioRefineries -- Biomass to Energy via Fast Pyrolysis |

---

## Image Specifications

- **Format**: Use .jpg for photographs, .png for diagrams with transparency, .webp as optimized alternative
- **Hero / OG images**: 1200x630px minimum (2:1.05 aspect ratio for social sharing)
- **Headshots**: 400x400px square crop
- **Product / application photos**: 800x600px minimum
- **File size target**: Under 200KB per image after optimization (use TinyPNG, Squoosh, or similar)
- **Naming**: All lowercase, hyphens between words, no spaces or special characters

## Next.js Image Component Usage

All images should be used with the Next.js `<Image>` component for automatic optimization:

```tsx
import Image from 'next/image';

<Image
  src="/images/hero/hero-home.jpg"
  alt="Biomass waste including wood chips and crop residues ready for fast pyrolysis conversion at iNBIO"
  width={1200}
  height={630}
  priority // only for above-the-fold hero images
/>
```

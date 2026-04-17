# Sendu Website

A beautiful and modern website built using Nuxt 3.21.2, shadcn-vue, and Lucide Vue icons.

## Tech Stack

- **Framework**: [Nuxt 3.21.2](https://nuxt.com/)
- **UI Library**: [shadcn-vue](https://shadcn-vue.com/)
- **Icons**: [Lucide Vue](https://lucide.dev/guide/packages/lucide-vue-next)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Runtime**: Node.js

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm (or pnpm/yarn)

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

The application will be available at `http://localhost:3000`.

## Deployment

### Vercel

This project is optimized for deployment on [Vercel](https://vercel.com).

1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import the project into Vercel.
3. Vercel will automatically detect Nuxt and configure the build settings.
4. Set any environment variables required in the Vercel Dashboard.


## Project Structure

```
sendu-website/
├── assets/
│   └── css/
│       └── tokens.css          # Core design tokens
├── components/
│   ├── ArchetypeCard.vue       # User persona / segment card
│   ├── ContactRow.vue          # Horizontal contact detail row
│   ├── FeatureBlock.vue        # Detailed product feature section
│   ├── FlowDiagram.vue         # Visual data/process flow
│   ├── Footer.vue              # Global multi-column footer
│   ├── FormField.vue           # Reusable input with label
│   ├── Header.vue              # Sticky navigation with mobile menu
│   ├── Hero.vue                # Branded landing hero section
│   ├── JourneyPostCard.vue     # Dynamic blog preview card
│   ├── JourneySection.vue      # Grid container for journey posts
│   ├── JourneyTag.vue          # Categorization tag for posts
│   ├── MarketStats.vue         # Dashboard-style data visualization
│   ├── PlatformFlywheel.vue    # Interactive product ecosystem diagram
│   ├── PrimaryButton.vue       # Standard branded CTA
│   ├── ProductBlock.vue        # Feature-rich product section
│   ├── ProductCard.vue         # Service/Product summary card
│   ├── ProductSection.vue      # Vertical list of product cards
│   ├── RatingBand.vue          # Credit rating visualization
│   ├── RoutingCard.vue         # Information navigation card
│   ├── SecondaryButton.vue     # Outlined branded CTA
│   ├── SectionLabel.vue        # Small uppercase blue labels
│   ├── SignalCallout.vue       # Highlighted insight block
│   ├── StatItem.vue            # Single metric display
│   ├── StatementBlock.vue      # Bold mission/thesis block
│   ├── StatusBadge.vue         # LIVE/PILOT/BUILDING indicators
│   ├── TeamCard.vue            # Profile card for team members
│   └── TeamSection.vue         # Grid layout for team cards
├── data/
│   └── journeyPosts.json       # JSON-based content repo for Journey
├── layouts/
│   └── default.vue              # Global layout (Header + Navigation + Footer)
├── pages/
│   ├── banks.vue               # B2B Banking relationships page
│   ├── careers.vue             # Hiring and values page
│   ├── circle.vue              # Circle (Savings Group) product page
│   ├── contact.vue             # Contact methods and address
│   ├── index.vue               # Main landing page
│   ├── investors.vue           # Investor pitch and request form
│   ├── journey/                # Dynamic public buildlog
│   │   ├── index.vue           # Feed of all updates
│   │   └── [slug].vue          # Individual update articles
│   ├── platform.vue            # Product ecosystem overview
│   ├── team.vue                # Founders and Board page
│   └── whitepaper.vue          # Thesis download and request form
├── public/
│   ├── logo-sendu.svg          # Primary vector logo
│   ├── sitemap.xml             # SEO Sitemap for crawlers
│   ├── robots.txt              # Crawler access rules
│   └── ...                     # 30+ WebP/JPG brand assets
├── nuxt.config.ts              # Nuxt 3 core configuration
├── tailwind.config.js          # Design system configuration
└── package.json                # Dependencies & scripts
```
---

*Built by the Sendu Team.*

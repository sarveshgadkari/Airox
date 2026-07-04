# Airox Technologies — Next.js Website

Modern, SEO-optimised website for Airox Technologies Ltd, India's leading PSA oxygen generator manufacturer.

## Tech Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **next/image** for optimised, lazy-loaded images
- **next/font** for self-hosted Google Fonts (Inter + Plus Jakarta Sans)
- Plain CSS with custom properties (no CSS framework)

## Getting Started

```bash
npm install
npm run dev      # development server at http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## SEO Features

- Per-page metadata via the Next.js Metadata API (title template, description, keywords, canonical)
- Open Graph + Twitter card tags for rich link previews
- JSON-LD structured data: `Organization`, `WebSite`, `LocalBusiness` and a `Product` `ItemList`
- `sitemap.xml` and `robots.txt` generated from `src/app/sitemap.ts` / `robots.ts`
- Fully static prerendered pages (fast Core Web Vitals)
- Semantic HTML, descriptive alt text on all images, accessible tabs/menus

## Project Structure

```
src/
  app/
    layout.tsx      # fonts, global metadata, viewport
    page.tsx        # home page assembling all sections
    globals.css     # design system + all styles
    sitemap.ts      # sitemap.xml
    robots.ts       # robots.txt
  components/
    Sections.tsx    # Hero, About, Products, Why, Quality, Services, Contact...
    Navbar.tsx      # sticky nav with mobile menu (client)
    ClientsTabs.tsx # government/corporate hospital tabs (client)
    ContactForm.tsx # enquiry form (client, demo submit)
    Effects.tsx     # scroll reveal + count-up + back-to-top (client)
    Footer.tsx
    JsonLd.tsx      # structured data
    icons.tsx       # shared SVG icons
  data/
    site.ts         # all site content: products, clients, offices, contact info
public/
  assets/           # images from the original airoxtechnologies.com site
```

## Editing Content

Almost all text content (products, client lists, offices, phone numbers) lives in
`src/data/site.ts` — edit it there and every section updates automatically.

## Before Going Live

- Point `SITE.url` in `src/data/site.ts` at the production domain.
- Wire `ContactForm.tsx` to a real backend or email service (currently a demo submit).
- Add a real Open Graph image (1200×630) if desired.

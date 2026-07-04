import type { Metadata } from "next";
import { PageShell, PageHero } from "@/components/PageShell";
import { About, Quality, CtaBand, Stats } from "@/components/Sections";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us — India's #1 PSA Oxygen Generator Manufacturer",
  description:
    "Founded in 2011 by Mr. Sanjay Jaiswal, Airox Technologies is a public limited company and India's market leader in PSA oxygen generation — 1100+ installations, 55% market share, PAN-India presence with automated manufacturing at Shendra MIDC.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Airox Technologies Ltd",
    description:
      "India's #1 PSA oxygen generator manufacturer — 1100+ installations, 55% market share, US FDA & CE certified.",
    url: `${SITE.url}/about-us`,
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE.url}/about-us` },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        title="About Airox Technologies"
        tagline="India's #1 PSA Oxygen Generator & Manufacturer Company"
        intro="A public limited Indian company that brought a major revolution in the healthcare market by introducing oxygen generator plants for hospitals — a pioneer and market leader in advanced oxygen generation."
        crumb="About Us"
      />
      <About />
      <div style={{ paddingBottom: 56 }}>
        <Stats />
      </div>
      <Quality />
      <CtaBand />
    </PageShell>
  );
}

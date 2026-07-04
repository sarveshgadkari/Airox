import type { Metadata } from "next";
import { PageShell, PageHero } from "@/components/PageShell";
import { Services, CtaBand } from "@/components/Sections";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Services — After-Sales Service & PAN-India Network",
  description:
    "Airox after-sales services: installation by specially trained engineers, AMC & CMC maintenance contracts, and routine check-ups. 70+ service engineers with spares stocked at 10 locations across India.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Airox Services — Built for Uptime",
    description:
      "Installation, AMC/CMC contracts and routine check-ups backed by 70+ engineers across India.",
    url: `${SITE.url}/services`,
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        title="After-Sales Service & Network"
        tagline="70+ Service Engineers · 10 Spare-Part Stores · PAN-India"
        intro="We back every installation with annual and comprehensive maintenance contracts. Our growth has been made possible by our service network — a skilled team constantly available to provide technical assistance, because oxygen is a lifesaving drug and delivery must never lapse."
        crumb="Services"
      />
      <Services />
      <CtaBand />
    </PageShell>
  );
}

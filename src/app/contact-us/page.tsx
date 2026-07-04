import type { Metadata } from "next";
import { PageShell, PageHero } from "@/components/PageShell";
import { Contact } from "@/components/Sections";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us — Offices, Toll-Free & Enquiries",
  description:
    "Contact Airox Technologies: toll-free 08069068500, sales@airoxtechnologies.com. Corporate office in Aurangabad, manufacturing at AURIC Shendra, branch offices in Delhi and Kolkata. Send an enquiry for a callback.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact Airox Technologies Ltd",
    description: "Toll-free 08069068500 · Offices in Aurangabad, Delhi & Kolkata.",
    url: `${SITE.url}/contact-us`,
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Contact Us", item: `${SITE.url}/contact-us` },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        title="Contact Us"
        tagline="Toll Free 08069068500 · sales@airoxtechnologies.com"
        intro="Reach any of our offices across India, or leave your details and our team will call you back within one working day."
        crumb="Contact Us"
      />
      <Contact />
    </PageShell>
  );
}

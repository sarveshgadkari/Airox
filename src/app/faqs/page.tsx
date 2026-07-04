import type { Metadata } from "next";
import { PageShell, PageHero } from "@/components/PageShell";
import { CtaBand } from "@/components/Sections";
import { FAQS_OXYGEN, FAQS_HBOT } from "@/data/productPages";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQs — Oxygen Generators & Hyperbaric Chambers",
  description:
    "Frequently asked questions about PSA oxygen generators and hyperbaric oxygen therapy (HBOT): how PSA works, safety, space, maintenance, purity, monoplace vs multiplace chambers, session durations and more.",
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "Airox FAQs — Oxygen Generators & HBOT",
    description: "Answers on PSA technology, safety, maintenance and hyperbaric therapy.",
    url: `${SITE.url}/faqs`,
  },
};

export default function FaqsPage() {
  const allFaqs = [...FAQS_OXYGEN, ...FAQS_HBOT];
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "FAQs", item: `${SITE.url}/faqs` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <PageShell>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <PageHero
        title="Frequently Asked Questions"
        tagline="Oxygen Generators · Hyperbaric Chambers"
        intro="Everything hospitals and clinics ask us about PSA oxygen generation and hyperbaric oxygen therapy — answered by our engineers."
        crumb="FAQs"
      />
      <div className="wrap" style={{ padding: "clamp(24px,4vw,48px) 24px clamp(56px,7vw,88px)" }}>
        <div className="faq-group">
          <h2>Oxygen Generator</h2>
          {FAQS_OXYGEN.map((f) => (
            <details className="faq" key={f.q}>
              <summary>{f.q}</summary>
              <div className="ans">{f.a}</div>
            </details>
          ))}
        </div>
        <div className="faq-group">
          <h2>Hyperbaric Chamber</h2>
          {FAQS_HBOT.map((f) => (
            <details className="faq" key={f.q}>
              <summary>{f.q}</summary>
              <div className="ans">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
      <CtaBand />
    </PageShell>
  );
}

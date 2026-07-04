import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PRODUCT_PAGES } from "@/data/productPages";
import { SITE } from "@/data/site";
import { PageShell, PageHero, SectionBlock, ProductSidebar } from "@/components/PageShell";
import { CtaBand } from "@/components/Sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCT_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = PRODUCT_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${SITE.url}/${page.slug}`,
      type: "website",
      ...(page.heroImage ? { images: [{ url: page.heroImage.src, alt: page.heroImage.alt }] } : {}),
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = PRODUCT_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: page.name, item: `${SITE.url}/${page.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: page.name,
      description: page.metaDescription,
      url: `${SITE.url}/${page.slug}`,
      ...(page.heroImage ? { image: `${SITE.url}${page.heroImage.src}` } : {}),
      brand: { "@type": "Brand", name: "Airox" },
      manufacturer: {
        "@type": "Organization",
        name: SITE.legalName,
        url: SITE.url,
      },
    },
  ];

  return (
    <PageShell>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <PageHero title={page.name} tagline={page.tagline} intro={page.intro} crumb={page.name} />
      <div className="wrap">
        <div className="page-grid">
          <article>
            {page.heroImage && (
              <div className="psec">
                <div className="pimg" style={{ marginTop: 0, height: 380 }}>
                  <Image
                    src={page.heroImage.src}
                    alt={page.heroImage.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className={page.heroImage.contain ? "contain" : undefined}
                  />
                </div>
              </div>
            )}
            {page.sections.map((s, i) => (
              <SectionBlock key={s.heading ?? i} section={s} />
            ))}
          </article>
          <ProductSidebar activeSlug={page.slug} />
        </div>
      </div>
      <CtaBand />
    </PageShell>
  );
}

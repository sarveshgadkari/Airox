import { OFFICES, PRODUCTS, SITE } from "@/data/site";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/assets/airox_logo.png`,
    description: SITE.description,
    foundingDate: String(SITE.foundingYear),
    founder: { "@type": "Person", name: "Sanjay Jaiswal" },
    email: SITE.email,
    telephone: SITE.tollFree,
    sameAs: SITE.socials,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.tollFree,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}/#organization` },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.legalName,
    image: `${SITE.url}/assets/hero-plant.webp`,
    url: SITE.url,
    telephone: SITE.tollFree,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    department: OFFICES.slice(2, 4).map((o) => ({
      "@type": "LocalBusiness",
      name: `${SITE.name} — ${o.title}`,
      address: { "@type": "PostalAddress", streetAddress: o.address, addressCountry: "IN" },
    })),
  };

  const productList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Airox Technologies Products",
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.description,
        url: `${SITE.url}/#products`,
        ...(p.image ? { image: `${SITE.url}${p.image.src}` } : {}),
        brand: { "@type": "Brand", name: "Airox" },
        manufacturer: { "@id": `${SITE.url}/#organization` },
      },
    })),
  };

  const schemas = [organization, website, localBusiness, productList];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

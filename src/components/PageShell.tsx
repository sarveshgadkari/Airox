import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Effects from "./Effects";
import Footer from "./Footer";
import { TopBar } from "./Sections";
import { ArrowRight, Check, Phone } from "./icons";
import { PRODUCT_PAGES } from "@/data/productPages";
import type { PageSection } from "@/data/productPages";
import { SITE } from "@/data/site";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div id="top">
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Effects />
    </div>
  );
}

export function PageHero({
  title,
  tagline,
  intro,
  crumb,
}: {
  title: string;
  tagline?: string;
  intro?: string;
  crumb: string;
}) {
  return (
    <section className="page-hero">
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden>/</span>
          <span className="cur">{crumb}</span>
        </nav>
        <h1>{title}</h1>
        {tagline && <p className="tagline">{tagline}</p>}
        {intro && <p className="intro">{intro}</p>}
      </div>
    </section>
  );
}

export function SectionBlock({ section }: { section: PageSection }) {
  return (
    <div className="psec">
      {section.heading && <h2>{section.heading}</h2>}
      {section.paragraphs?.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
      {section.bullets && (
        <ul className="checks">
          {section.bullets.map((b) => (
            <li key={b.slice(0, 40)}>
              <Check /> {b}
            </li>
          ))}
        </ul>
      )}
      {section.chips && (
        <div className="chips-light">
          {section.chips.map((c) => (
            <span className="chip" key={c}>{c}</span>
          ))}
        </div>
      )}
      {section.table && (
        <table className="spec-table">
          {section.table.caption && <caption>{section.table.caption}</caption>}
          <thead>
            <tr>
              {section.table.head.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.table.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {section.image && (
        <div className="pimg">
          <Image
            src={section.image.src}
            alt={section.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className={section.image.contain ? "contain" : undefined}
          />
        </div>
      )}
      {section.note && <p className="note">{section.note}</p>}
    </div>
  );
}

export function ProductSidebar({ activeSlug }: { activeSlug?: string }) {
  return (
    <aside>
      <div className="side-card">
        <h3>Our Products</h3>
        <nav className="plinks" aria-label="Products">
          {PRODUCT_PAGES.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className={p.slug === activeSlug ? "active" : undefined}
            >
              {p.name}
            </Link>
          ))}
        </nav>
        <div className="side-cta">
          <h4>Need help choosing?</h4>
          <p>Talk to our team about capacity sizing, installation and pricing.</p>
          <Link href="/contact-us" className="btn btn-amber">
            Get a Free Quote <ArrowRight />
          </Link>
          <a href={`tel:${SITE.tollFree}`} className="btn btn-outline" style={{ marginTop: 10 }}>
            <Phone width={16} height={16} /> {SITE.tollFree}
          </a>
        </div>
      </div>
    </aside>
  );
}

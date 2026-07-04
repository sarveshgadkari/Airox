"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./icons";
import { PRODUCT_PAGES } from "@/data/productPages";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setProdOpen(false);
  };

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-in">
        <Link className="logo" href="/" aria-label="Airox Technologies home" onClick={closeAll}>
          <Image src="/assets/airox_logo.png" alt="Airox Technologies logo" width={121} height={44} priority />
        </Link>
        <nav className={`nav-links${open ? " open" : ""}`} aria-label="Primary">
          <Link href="/" onClick={closeAll}>Home</Link>
          <Link href="/about-us" onClick={closeAll}>About Us</Link>
          <div className={`nav-item${prodOpen ? " open" : ""}`}>
            <button
              aria-expanded={prodOpen}
              aria-haspopup="true"
              onClick={() => setProdOpen(!prodOpen)}
            >
              Products
              <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="dropdown" role="menu">
              {PRODUCT_PAGES.map((p) => (
                <Link key={p.slug} href={`/${p.slug}`} onClick={closeAll} role="menuitem">
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/services" onClick={closeAll}>Services</Link>
          <Link href="/#clients" onClick={closeAll}>Customers</Link>
          <Link href="/faqs" onClick={closeAll}>FAQs</Link>
          <Link href="/contact-us" onClick={closeAll}>Contact Us</Link>
        </nav>
        <div className="nav-cta">
          <Link href="/contact-us" className="btn btn-brand">
            Get a Quote <ArrowRight />
          </Link>
          <button
            className={`burger${open ? " open" : ""}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

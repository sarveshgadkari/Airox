import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, LinkedIn, Mail, Phone, Pin, YouTube } from "./icons";
import { PRODUCT_PAGES } from "@/data/productPages";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Image src="/assets/airox_logo.png" alt="Airox Technologies logo" width={127} height={46} />
            <p>
              Airox Technologies Limited — India&apos;s leading manufacturer of PSA oxygen generators
              and on-site gas generation systems, keeping hospitals independent since 2011.
            </p>
            <div className="socials">
              <a href="https://www.facebook.com/airoxtechnologies/" aria-label="Facebook" rel="noopener" target="_blank"><Facebook /></a>
              <a href="https://www.linkedin.com/company/airox-technologies-ltd" aria-label="LinkedIn" rel="noopener" target="_blank"><LinkedIn /></a>
              <a href="https://www.youtube.com/@airoxtechnologiesltd.6950" aria-label="YouTube" rel="noopener" target="_blank"><YouTube /></a>
              <a href="https://www.instagram.com/airoxtechnologies" aria-label="Instagram" rel="noopener" target="_blank"><Instagram /></a>
            </div>
          </div>
          <nav className="fcol" aria-label="Products">
            <h4>Products</h4>
            {PRODUCT_PAGES.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`}>{p.name}</Link>
            ))}
          </nav>
          <nav className="fcol" aria-label="Company">
            <h4>Company</h4>
            <Link href="/about-us">About Us</Link>
            <Link href="/#why">Why Airox</Link>
            <Link href="/#quality">Quality &amp; Certifications</Link>
            <Link href="/#clients">Our Customers</Link>
            <Link href="/services">Services</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>
          <div className="fcol">
            <h4>Reach Us</h4>
            <div className="fc-item">
              <Pin />
              <span>D-27, 5th Floor, Empire Mall, Chikalthana, Aurangabad – 431 006, Maharashtra</span>
            </div>
            <div className="fc-item">
              <Phone />
              <a href="tel:08069068500">Toll Free: 08069068500</a>
            </div>
            <div className="fc-item">
              <Mail />
              <a href="mailto:sales@airoxtechnologies.com">sales@airoxtechnologies.com</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <p>© {new Date().getFullYear()} Airox Technologies Limited. All rights reserved.</p>
          <div className="pol">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
            <a href="#">Disclaimer</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

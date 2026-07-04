import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bolt,
  Check,
  CheckCircle,
  Clock,
  Cross,
  Eye,
  Factory,
  Gear,
  Hospital,
  Mail,
  Medal,
  Phone,
  Pin,
  Shield,
  ShieldPlain,
  Target,
  Wind,
  Wrench,
} from "./icons";
import {
  OFFICES,
  PRODUCTS,
  SERVICE_CITIES,
  WHY_AIROX,
  WHY_OTHERS,
} from "@/data/site";
import ClientsTabs from "./ClientsTabs";
import ContactForm from "./ContactForm";

/* ================= TOPBAR ================= */
export function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topbar-in">
        <div className="grp">
          <a href="tel:08069068500">
            <Phone /> Toll Free: 08069068500
          </a>
          <a href="mailto:sales@airoxtechnologies.com">
            <Mail /> sales@airoxtechnologies.com
          </a>
        </div>
        <div className="grp right">
          <span>13+ Years in Operation &nbsp;·&nbsp; 1100+ Installations Across India</span>
        </div>
      </div>
    </div>
  );
}

/* ================= HERO ================= */
export function Hero() {
  return (
    <section className="hero">
      <div className="bg">
        <Image
          src="/assets/hero-plant.webp"
          alt="Airox PSA oxygen generator plant"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="veil" />
      <div className="wrap">
        <div className="hero-in">
          <span className="pill">
            🏆 &nbsp;India&apos;s #1 PSA Oxygen Generator Company &nbsp;·&nbsp; <b>55% Market Share</b>
          </span>
          <h1>
            On-site oxygen that <span>never lets a hospital down.</span>
          </h1>
          <p>
            Airox Technologies is India&apos;s leading PSA oxygen generator manufacturer — running
            plants continuously for more than 13 years, with 1100+ installations and components
            sourced from AirSep Corporation &amp; Caire Inc., New York, USA.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-amber">
              Request a Free Assessment <ArrowRight width={17} height={17} />
            </a>
            <a href="#products" className="btn btn-outline">
              Explore Our Products
            </a>
          </div>
          <div className="hero-badges">
            <div className="hb">
              <Shield />
              <span>
                <b>US FDA · CE · ISO 13485</b>Certified quality standards
              </span>
            </div>
            <div className="hb">
              <Clock />
              <span>
                <b>24×7 Consistent Purity</b>Automated pressure control
              </span>
            </div>
            <div className="hb">
              <Bolt />
              <span>
                <b>40–60% Less Electricity</b>Lowest cost per unit of O₂
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= STATS ================= */
export function Stats() {
  return (
    <section className="stats" aria-label="Company statistics">
      <div className="wrap">
        <div className="stats-card">
          <div className="stat">
            <div className="n"><span data-count="1100">0</span>+</div>
            <div className="l">PSA Installations</div>
          </div>
          <div className="stat">
            <div className="n"><span data-count="55">0</span><em>%</em></div>
            <div className="l">Medical O₂ Market Share</div>
          </div>
          <div className="stat">
            <div className="n"><span data-count="70">0</span>+</div>
            <div className="l">Service Engineers</div>
          </div>
          <div className="stat">
            <div className="n"><span data-count="13">0</span>+</div>
            <div className="l">Years in Operation</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= ABOUT ================= */
export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="reveal">
          <span className="kicker">About Airox</span>
          <h2 className="title">
            The company that brought oxygen<br />generation inside Indian hospitals.
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-copy reveal">
            <p>
              Airox is a <b>public limited Indian company</b> that brought a major revolution in the
              healthcare market by introducing on-premise oxygen generator plants for hospitals.
              Founded in 2011 by Managing Director <b>Mr. Sanjay Jaiswal</b>, the company has worked
              towards one goal — utilising technology to create products that cater to the health
              needs of every citizen of India.
            </p>
            <p>
              With <b>1100+ PSA oxygen generator installations</b> and over 1000 satisfied customers,
              Airox is the unchallenged market leader with <b>55% share of the Indian medical oxygen
              market</b> in terms of total installed PSA oxygen generators (Fiscal 2022, CRISIL). Our
              systems are highly advanced, with major components sourced from <b>AirSep Corporation
              and Caire Inc., New York, USA</b>.
            </p>
            <p>
              Airox has a PAN-India presence — corporate office at Chh. Sambhajinagar (Aurangabad),
              an automated manufacturing unit at Shendra MIDC, and branch offices in Delhi and
              Kolkata.
            </p>
            <div className="about-feats">
              <div className="af"><Check /> Automated manufacturing facility</div>
              <div className="af"><Check /> Widespread sales &amp; distribution network</div>
              <div className="af"><Check /> 70+ after-sales service engineers</div>
              <div className="af"><Check /> Spares stocked at 10 locations in India</div>
            </div>
          </div>
          <div className="reveal d1">
            <div className="md-card">
              <div className="q">“</div>
              <blockquote>
                We look to utilise technology to create products that cater to the health needs of
                every citizen in India — with strong growth, a growing customer base and a widespread
                service network, Airox looks forward to steady and healthy organisational growth.
              </blockquote>
              <div className="md-who">
                <Image
                  src="/assets/md-message.webp"
                  alt="Message from the Managing Director"
                  width={64}
                  height={64}
                />
                <div>
                  <b>Mr. Sanjay Jaiswal</b>
                  <span>Founder &amp; Managing Director, Airox Technologies Ltd</span>
                </div>
              </div>
            </div>
            <div className="mv-row">
              <div className="mv">
                <h4><Target /> Our Mission</h4>
                <p>
                  To consistently deliver world-class, high-quality and value-for-money solutions in
                  the medical and industrial sectors that add value to people and businesses.
                </p>
              </div>
              <div className="mv">
                <h4><Eye /> Our Vision</h4>
                <p>To be the leading brand in medical and industrial sustainable solutions, globally.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= PRODUCTS ================= */
export function Products() {
  const delays = ["", " d1", " d2"];
  return (
    <section className="section soft" id="products">
      <div className="wrap">
        <div className="center reveal">
          <span className="kicker">Our Products</span>
          <h2 className="title">
            Complete on-site gas generation<br />&amp; medical equipment range.
          </h2>
          <p className="sub">
            From flagship PSA oxygen plants to nitrogen generators, hyperbaric chambers and
            sterilizers — engineered for hospitals, industry and research.
          </p>
        </div>
        <div className="prod-grid">
          {PRODUCTS.map((p, i) => (
            <article className={`pcard reveal${delays[i % 3]}`} key={p.slug}>
              <div className="ph">
                <span className="tag">{p.tag}</span>
                {p.image ? (
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={p.image.contain ? "contain" : undefined}
                  />
                ) : (
                  <div className="icon-tile">{p.icon === "air" ? <Wind /> : <Gear />}</div>
                )}
              </div>
              <div className="body">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <Link className="more" href={`/${p.slug}`}>
                  View details <ArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= WHY AIROX ================= */
export function WhyAirox() {
  return (
    <section className="section why" id="why">
      <div className="wrap">
        <div className="center reveal">
          <span className="kicker">Why Choose Us</span>
          <h2 className="title">
            Oxygen is a lifesaving drug.<br />Not all generators treat it that way.
          </h2>
          <p className="sub">
            The real difference between PSA systems shows up years after installation — in purity,
            uptime and total cost of ownership.
          </p>
        </div>
        <div className="compare">
          <div className="ccol good reveal">
            <div className="ch">
              <span className="cbdg"><Check /></span> Airox Oxygen Generator
            </div>
            <ul>
              {WHY_AIROX.map((item) => (
                <li key={item}><Check /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="ccol bad reveal d1">
            <div className="ch">
              <span className="cbdg"><Cross /></span> Other PSA Generators in Market
            </div>
            <ul>
              {WHY_OTHERS.map((item) => (
                <li key={item}><Cross /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= QUALITY ================= */
export function Quality() {
  return (
    <section className="section" id="quality">
      <div className="wrap">
        <div className="center reveal">
          <span className="kicker">Certifications</span>
          <h2 className="title">All quality standards in place.</h2>
          <p className="sub">
            Airox is India&apos;s leading medical oxygen generation company using internationally
            certified components and processes.
          </p>
        </div>
        <div className="cert-grid">
          <div className="cert reveal">
            <div className="cico"><Shield /></div>
            <h3>US FDA</h3>
            <span className="where">United States</span>
            <p>
              Held through our partner organisation AirSep Corporation, whose components sit at the
              core of every Airox medical generator system.
            </p>
          </div>
          <div className="cert reveal d1">
            <div className="cico"><Medal /></div>
            <h3>CE Medical Devices</h3>
            <span className="where">Europe · Class IIb</span>
            <p>Design and manufacturing conforming to Directive 93/42/EEC under medical device Class IIb.</p>
          </div>
          <div className="cert reveal d2">
            <div className="cico"><CheckCircle /></div>
            <h3>ISO 13485:2016</h3>
            <span className="where">NF EN ISO</span>
            <p>Certified quality management system for the design and manufacture of medical devices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CLIENTS ================= */
export function Clients() {
  return (
    <section className="section soft" id="clients">
      <div className="wrap">
        <div className="center reveal">
          <span className="kicker">Our Esteemed Clients</span>
          <h2 className="title">Installed where oxygen can&apos;t fail.</h2>
          <p className="sub">
            From the nation&apos;s biggest government hospitals to leading corporate institutions — a
            selection of installations Airox keeps running every day.
          </p>
          <ClientsTabs />
        </div>
      </div>
    </section>
  );
}

/* ================= SERVICES ================= */
export function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="center reveal">
          <span className="kicker">After-Sales Service</span>
          <h2 className="title">A service network built for uptime.</h2>
          <p className="sub">
            Oxygen is a lifesaving drug — so every Airox installation is backed by trained
            engineers, maintenance contracts and spares held close to you.
          </p>
        </div>
        <div className="svc-grid">
          <div className="svc reveal">
            <div className="sico"><Wrench /></div>
            <h3>Installation Services</h3>
            <p>
              The complete installation and commissioning of every PSA system is carried out by
              reputed service engineers who are specially trained for the job.
            </p>
          </div>
          <div className="svc reveal d1">
            <div className="sico"><ShieldPlain /></div>
            <h3>AMC &amp; CMC Contracts</h3>
            <p>
              Annual maintenance contracts cover labour, preventive maintenance and repairs.
              Comprehensive contracts cover all parts except consumables, sieves and motor.
            </p>
          </div>
          <div className="svc reveal d2">
            <div className="sico"><Clock /></div>
            <h3>Routine Check-ups</h3>
            <p>
              All installations receive routine check-ups by our engineers on time and on priority —
              because oxygen delivery must never lapse.
            </p>
          </div>
        </div>
        <div className="net reveal">
          <div className="nh">
            Spares &amp; accessories stocked at <span>10 service stores</span> across India
          </div>
          <div className="chips">
            {SERVICE_CITIES.map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CTA BAND ================= */
export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="bg">
        <Image src="/assets/stats-bg.jpg" alt="" fill sizes="100vw" aria-hidden />
      </div>
      <div className="wrap cta-in">
        <div>
          <h2>
            Ready for oxygen independence at <span>your hospital?</span>
          </h2>
          <p>
            Talk to our team about capacity sizing, installation timelines and return on investment
            — usually recovered within the first couple of years.
          </p>
        </div>
        <div className="cta-actions">
          <a href="#contact" className="btn btn-amber">
            Get a Free Quote <ArrowRight width={17} height={17} />
          </a>
          <a href="tel:08069068500" className="btn btn-outline">
            Call 08069068500
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================= NEWS ================= */
const NEWS = [
  {
    cat: "Insights",
    title: "Why hospitals are shifting to on-site PSA oxygen plants",
    text: "Post-pandemic preparedness, rising patient loads and cost optimisation are driving hospitals to take control of their own oxygen supply.",
    img: { src: "/assets/oxygen-generator.jpeg", alt: "On-site PSA oxygen plant" },
  },
  {
    cat: "Technology",
    title: "How PSA oxygen generators work — from ambient air to 93% purity",
    text: "Air compression, purification, molecular sieve adsorption and storage: the four steps behind uninterrupted medical-grade oxygen.",
    img: { src: "/assets/hero-plant.webp", alt: "PSA oxygen generator technology" },
  },
  {
    cat: "Therapy",
    title: "Hyperbaric oxygen therapy: healing under pressure",
    text: "How HBOT chambers accelerate wound healing and recovery — and why clinics across India are adding them to their care portfolio.",
    img: { src: "/assets/hbot-therapy.webp", alt: "Hyperbaric oxygen therapy" },
  },
];

export function News() {
  const delays = ["", " d1", " d2"];
  return (
    <section className="section soft" id="news">
      <div className="wrap">
        <div className="center reveal">
          <span className="kicker">News &amp; Insights</span>
          <h2 className="title">From our blog.</h2>
        </div>
        <div className="news-grid">
          {NEWS.map((n, i) => (
            <article className={`ncard reveal${delays[i]}`} key={n.title}>
              <div className="nph">
                <Image
                  src={n.img.src}
                  alt={n.img.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="nbody">
                <span className="date">{n.cat}</span>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT ================= */
const OFFICE_ICONS = {
  building: Hospital,
  factory: Factory,
  pin: Pin,
  wrench: Wrench,
  phone: Phone,
} as const;

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="center reveal">
          <span className="kicker">Contact Us</span>
          <h2 className="title">Let&apos;s size the right system for you.</h2>
          <p className="sub">
            Reach any of our offices, or leave your details and our team will call you back.
          </p>
        </div>
        <div className="contact-grid">
          <div className="offices reveal">
            {OFFICES.map((o) => {
              const Icon = OFFICE_ICONS[o.icon];
              return (
                <div className="office" key={o.title}>
                  <div className="oico"><Icon /></div>
                  <div>
                    <h4>{o.title}</h4>
                    <div className="addr">{o.address}</div>
                    <div className="om">
                      {o.contacts.map((c, i) =>
                        c.email ? (
                          <a key={i} href={`mailto:${c.email}`}>{c.email}</a>
                        ) : (
                          <a key={i} href={`tel:${c.tel}`}>{c.label}</a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

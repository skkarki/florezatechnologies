import Link from "next/link";
import { Icon, Logo } from "./components";
import { divisions } from "./site-content";

export function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-grid"><div className="footer-brand"><Logo /><p>Engineering the future of global technology.<br />Trusted by organisations, financial<br /> institutions, and partners across 40+<br /> countries.</p><a href="mailto:info@florezatechnologies.com"><Icon name="mail" /> info@florezatechnologies.com</a><Link href="/"><Icon name="globe" /> florezatechnologies.com</Link></div><div><h4>Company</h4><Link href="/about">About Us</Link><Link href="/careers">Careers</Link><Link href="/news">News</Link></div><div><h4>Solutions</h4>{divisions.map(item => <Link href={`/businesses#${item.id}`} key={item.id}>{item.title}</Link>)}</div><div><h4>Legal</h4><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Floreza Technologies. All rights reserved.</span><Link href="/">florezatechnologies.com <span>↗</span></Link></div></div></footer>;
}

export function PageHero({ label, title, description }: { label: string; title: string; description: string }) {
  return <section className="page-hero"><div className="hero-grid" /><div className="container"><div className="eyebrow hero-badge"><span />{label}</div><h1>{title}</h1><p>{description}</p></div></section>;
}

export function SectionHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return <div className="section-heading"><span className="eyebrow">{label}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function CallToAction({ label, title, text, secondaryLabel = "Explore Our Solutions", secondaryHref = "/technology", email }: { label: string; title: string; text: string; secondaryLabel?: string; secondaryHref?: string; email?: string }) {
  return <section className="section page-cta"><div className="container"><div className="contact-panel"><span className="eyebrow">{label}</span><h2>{title}</h2><p>{text}</p><div className="button-group">{email ? <a className="button button-gold" href={`mailto:${email}`}><Icon name="mail" /> Send Your CV</a> : <Link className="button button-gold" href="/contact">Contact Our Team <Icon name="arrow" /></Link>}{!email && <Link className="button button-subtle" href={secondaryHref}>{secondaryLabel} <Icon name="arrow" /></Link>}</div>{email && <a className="cta-email" href={`mailto:${email}`}>{email}</a>}</div></div></section>;
}

export function BulletList({ items, twoColumns = false }: { items: string[]; twoColumns?: boolean }) {
  return <ul className={`feature-list${twoColumns ? " two-columns" : ""}`}>{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return <ol className="process-list">{items.map((item, i) => <li key={item.title}><span className="step-number">{String(i + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol>;
}

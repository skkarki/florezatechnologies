import type { Metadata } from "next";
import { Icon } from "../components";
import { regions } from "../site-content";
import { CallToAction, PageHero, SectionHeading } from "../site-ui";

export const metadata: Metadata = { title: "About Us | Floreza Technologies" };

const values = [
  ["Integrity", "We operate with transparency and accountability in every engagement, holding ourselves to the highest standards of professional conduct."],
  ["Excellence", "We pursue the highest quality in everything we deliver — from architecture and code to client communication and project governance."],
  ["Innovation", "We invest continuously in emerging technologies and methodologies, ensuring our clients benefit from the most effective solutions available."],
  ["Security", "Security is not an afterthought. It is embedded into our design principles, development practices, and operational standards."],
  ["Global Perspective", "We bring international experience and cross-cultural understanding to every engagement, enabling us to serve diverse markets with equal effectiveness."],
  ["Partnership", "We build long-term relationships, not transactional engagements. Our clients' success is the measure of our own."],
];
const leadership = [
  { icon: "chip", title: "Technology & Innovation", text: "Strategic direction across all engineering and product divisions, ensuring our technical capabilities remain at the forefront of the industry." },
  { icon: "shield", title: "Corporate Governance", text: "Rigorous oversight of financial performance, regulatory compliance, and organisational integrity across all operating jurisdictions." },
  { icon: "globe", title: "Cybersecurity & Risk", text: "Enterprise-wide security strategy, risk management frameworks, and compliance with international data protection standards." },
  { icon: "chart", title: "Global Growth & AI", text: "Market expansion strategy, strategic partnerships, and the integration of artificial intelligence across our service portfolio." },
];
const journey = [
  ["2009", "Foundation", "Floreza Technologies is established with a focus on enterprise software development and technology consulting for regional clients."],
  ["2012", "First International Expansion", "The company extends operations beyond its founding market, establishing its first international client relationships and delivery partnerships."],
  ["2015", "Mobile & Platform Division Launch", "Responding to market demand, Floreza launches dedicated mobile application and digital platform divisions, broadening its service portfolio."],
  ["2017", "Financial Sector Milestone", "Floreza secures its first major financial institution engagement, establishing the rigorous security and compliance standards that define the company today."],
  ["2019", "40-Country Milestone", "Operations and client engagements reach across forty countries, marking Floreza's transition from a regional firm to a genuinely global technology enterprise."],
  ["2021", "AI & Emerging Technology Practice", "A dedicated artificial intelligence and emerging technology practice is established, integrating AI capabilities across all five service divisions."],
  ["2024", "Global Technology Leader", "Floreza Technologies is recognised as a leading global technology partner, with over 500 projects delivered and a team of 200+ professionals worldwide."],
];

export default function About() {
  return <main id="main-content" className="inner-page about-page">
    <PageHero label="About Floreza Technologies" title="A Global Technology Company Built on Precision and Purpose" description="For over fifteen years, Floreza Technologies has engineered technology solutions that power organisations, financial institutions, and enterprises across more than forty countries." />
    <section className="section surface"><div className="container split-grid story"><div><span className="eyebrow">Our Story</span><h2>Founded on a conviction that technology should be transformative</h2></div><div className="prose"><p>Floreza Technologies was established with a singular conviction: that world-class technology, delivered with rigour and integrity, could transform how organisations operate at a global scale. From our earliest engagements, we set out to build not just software, but enduring partnerships grounded in trust.</p><p>Over fifteen years, we have grown from a focused technology consultancy into a multi-division global enterprise. Our expansion has been deliberate — entering new markets only when we could commit the expertise, infrastructure, and governance standards that our clients demand.</p><p>Today, Floreza Technologies operates across five core divisions — software development, mobile applications, digital platforms, online services, and technology solutions — serving clients who require the highest standards of delivery, security, and reliability.</p></div></div></section>
    <section className="section"><div className="container"><SectionHeading label="Mission, Vision & Values" title="Guided by principle. Driven by performance." /><div className="two-card-grid mission-grid">{[["Our Mission", "To engineer technology solutions that enable organisations to operate with greater efficiency, security, and confidence — at any scale, in any market."], ["Our Vision", "To be the most trusted global technology partner for organisations that demand excellence — recognised for the quality of our work, the integrity of our conduct, and the impact of our solutions."]].map(([title,text]) => <article className="content-card" key={title}><span className="eyebrow">{title}</span><p>{text}</p></article>)}</div><div className="values-grid">{values.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section surface"><div className="container"><SectionHeading label="Leadership" title="Experienced leadership. Global ambition." description="Floreza Technologies is led by a senior management team with deep expertise across technology, innovation, corporate governance, cybersecurity, and global growth strategy. Our leadership brings together decades of combined experience from enterprise technology, financial services, and international markets — united by a shared commitment to building a technology company of lasting significance." /><div className="four-card-grid">{leadership.map(item => <article className="content-card dark-card" key={item.title}><span className="icon-box"><Icon name={item.icon} /></span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading label="Global Footprint" title="Operating across 40+ countries" description="Our global presence is built on a network of offices, delivery centres, and strategic partnerships that span Asia, Europe, the Middle East, Africa, and the Americas. This distributed model allows us to serve clients with local expertise and global capability — delivering consistent quality regardless of geography." /><div className="stats-grid footprint-stats">{[["40+", "Countries Served"], ["4", "Continental Regions"], ["24/7", "Global Operations"], ["15+", "Years Operating"]].map(([value,label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><div className="two-card-grid region-grid">{regions.map(region => <article className="region-card content-card" key={region.title}><span className="icon-box"><Icon name="globe" /></span><div><h3>{region.title}</h3><p>{region.text}</p></div></article>)}</div></div></section>
    <section className="section surface"><div className="container"><SectionHeading label="Our Journey" title="Fifteen years of measured growth" /><ol className="timeline">{journey.map(([year,title,text]) => <li key={year}><div className="timeline-year"><span />{year}</div><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>
    <CallToAction label="Work With Us" title="Partner with a technology company that delivers" text="Whether you are seeking a long-term technology partner or a specialist team for a specific engagement, we are ready to discuss how Floreza Technologies can support your objectives." />
  </main>;
}

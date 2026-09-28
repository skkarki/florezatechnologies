import type { Metadata } from "next";
import { Icon } from "../components";
import { roles } from "../site-content";
import { CallToAction, PageHero, Steps } from "../site-ui";

export const metadata: Metadata = { title: "Careers | Floreza Technologies" };
const culture = [
  { icon: "star", title: "High Standards", text: "We hold ourselves and each other to the highest standards of technical and professional excellence. Quality is not negotiable." },
  { icon: "globe", title: "Global Exposure", text: "Working at Floreza means working on projects that span continents, industries, and technology domains. The breadth of exposure is exceptional." },
  { icon: "chart", title: "Continuous Growth", text: "We invest in our people's development — through structured learning, mentorship, and the opportunity to work on genuinely complex, challenging problems." },
  { icon: "shield", title: "Integrity First", text: "We operate with transparency and accountability. Our people are trusted to do the right thing, and we build an environment where that is possible." },
];
export default function Careers() {
  return <main id="main-content" className="inner-page careers-page"><PageHero label="Careers" title="Build Technology That Matters, at Global Scale" description="Floreza Technologies is a place for exceptional people who want to do the most meaningful work of their careers — building solutions that power organisations across more than forty countries." />
    <section className="section surface"><div className="container split-grid"><div><span className="eyebrow">Life at Floreza</span><h2>A culture of excellence, integrity, and ambition</h2><p>We are a company that takes its work seriously. Our people are technically exceptional, professionally rigorous, and personally committed to the quality of what they deliver. We operate across global markets, which means our teams bring diverse perspectives, deep domain knowledge, and a genuine understanding of the challenges our clients face.</p></div><div className="two-card-grid">{culture.map(item => <article className="content-card dark-card" key={item.title}><span className="icon-box"><Icon name={item.icon} /></span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
    <section className="section"><div className="container"><span className="eyebrow">Open Roles</span><h2>Current opportunities</h2><p>We are always looking for exceptional people. Below are our current open positions across all divisions and regions.</p><div className="roles-table"><table><caption className="visually-hidden">Open positions at Floreza Technologies. Select a role to apply by email.</caption><thead className="visually-hidden"><tr><th scope="col">Role</th><th scope="col">Division</th><th scope="col">Location</th><th scope="col">Employment type</th></tr></thead><tbody>{roles.map(([title,division,location]) => <tr key={title}><th scope="row"><a href={`mailto:hr@florezatechnologies.com?subject=${encodeURIComponent(`Application: ${title}`)}`}>{title}<span className="role-arrow"> ↗</span></a></th><td>{division}</td><td>{location}</td><td><span className="job-badge">Full-time</span></td></tr>)}</tbody></table></div><div className="apply-email"><a className="button button-gold" href="mailto:hr@florezatechnologies.com?subject=Career%20application"><Icon name="mail" />Apply via Email</a><a href="mailto:hr@florezatechnologies.com">hr@florezatechnologies.com</a></div></div></section>
    <section className="section surface"><div className="container split-grid"><div><span className="eyebrow">How to Apply</span><h2>Our hiring process</h2></div><Steps items={[
      { title: "Submit Your Application", text: "Send your CV and a brief cover note to hr@florezatechnologies.com, referencing the role you are applying for. We review every application personally." },
      { title: "Initial Conversation", text: "A short introductory call with our talent team to understand your background, motivations, and the role in more detail. Typically 30 minutes." },
      { title: "Technical Assessment", text: "A role-appropriate technical assessment — either a take-home exercise or a structured technical interview with members of the relevant division." },
      { title: "Final Interview", text: "A final conversation with senior leadership to assess cultural fit, career goals, and mutual expectations. We make decisions quickly and communicate clearly." },
    ]} /></div></section><CallToAction label="Get in Touch" title="Don't see the right role?" text="We are always interested in hearing from exceptional people. Send your CV and a note about what you are looking for to our HR team — we keep strong candidates on file for future opportunities." email="hr@florezatechnologies.com" />
  </main>;
}

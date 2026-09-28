import type { Metadata } from "next";
import { Icon } from "../components";
import { regions } from "../site-content";
import { PageHero } from "../site-ui";
import ContactForm from "./contact-form";

export const metadata: Metadata = { title: "Contact Us | Floreza Technologies" };
const contacts = [
  { title: "General Enquiries", email: "info@florezatechnologies.com", text: "For general information about Floreza Technologies, our services, and capabilities." },
  { title: "Business Development", email: "business@florezatechnologies.com", text: "To discuss a potential engagement, partnership, or commercial opportunity." },
  { title: "Human Resources", email: "hr@florezatechnologies.com", text: "For career enquiries, applications, and recruitment-related questions." },
  { title: "Press & Media", email: "info@florezatechnologies.com", text: "For press enquiries, interview requests, and media information." },
];

export default function Contact() {
  return <main id="main-content" className="inner-page contact-page"><PageHero label="Contact Us" title="Let's Start a Conversation" description="Whether you have a specific project in mind or want to explore how Floreza Technologies can support your organisation, our team is ready to engage." /><section className="section surface"><div className="container contact-grid"><div><div className="contact-directory">{contacts.map(item => <article className="content-card dark-card contact-card" key={item.title}><div className="contact-card-label"><span className="icon-box"><Icon name="mail" /></span><span className="eyebrow">{item.title}</span></div><h3><a href={`mailto:${item.email}`}>{item.email}</a></h3><p>{item.text}</p></article>)}</div><div className="global-offices"><span className="eyebrow">Global Offices</span>{regions.map(region => <article key={region.title}><span className="icon-box"><Icon name="globe" /></span><div><h3>{region.title}</h3><p>{region.text}</p></div></article>)}</div></div><ContactForm /></div></section></main>;
}

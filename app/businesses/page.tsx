import type { Metadata } from "next";
import { divisions } from "../site-content";
import { BulletList, CallToAction, PageHero } from "../site-ui";

export const metadata: Metadata = { title: "Our Businesses | Floreza Technologies" };

export default function Businesses() {
  return <main id="main-content" className="inner-page businesses-page"><PageHero label="Our Businesses" title="Five Divisions. One Global Technology Enterprise." description="Floreza Technologies operates through five specialised divisions, each delivering world-class technology solutions to clients across more than forty countries." /><section className="section divisions-section"><div className="container">{divisions.map((division,i) => <article className="division-row" id={division.id} key={division.id}><div><span className="division-number">{String(i + 1).padStart(2,"0")}</span><h2>{division.title}</h2><p className="division-tagline">{division.tagline}</p><p className="division-metric">{division.metric}</p></div><div><p className="division-description">{division.description}</p><BulletList items={division.features} twoColumns /></div></article>)}</div></section><CallToAction label="Engage a Division" title="Find the right Floreza division for your needs" text="Each of our five divisions brings specialist expertise to your engagement. Contact our team to discuss which capability best fits your requirements." secondaryLabel="Technology & Solutions" /></main>;
}

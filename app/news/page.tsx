import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../components";
import { formatDate, news } from "../site-content";
import { PageHero } from "../site-ui";

export const metadata: Metadata = { title: "News & Announcements | Floreza Technologies" };

export default function News() {
  const featured = news[0];
  return <main id="main-content" className="inner-page news-page"><PageHero label="News & Announcements" title="Latest from Floreza Technologies" description="Corporate news, press releases, and announcements from across our global operations." /><section className="section surface"><div className="container"><article className="featured-news"><div className="news-label"><span className="category">{featured.category}</span><span>Featured</span></div><h2><Link href={`/news/${featured.slug}`}>{featured.title}</Link></h2><p>{featured.text}</p><div className="news-date"><Icon name="calendar" /><time dateTime={featured.date}>{formatDate(featured.date)}</time></div></article></div></section><section className="section"><div className="container news-grid">{news.slice(1).map(item => <article className="content-card news-card" key={item.slug}><span className="category">{item.category}</span><h3><Link href={`/news/${item.slug}`}>{item.title}</Link></h3><p>{item.text}</p><div className="news-date"><Icon name="calendar" /><time dateTime={item.date}>{formatDate(item.date)}</time></div></article>)}</div></section><section className="section surface media-contact"><div className="container"><span className="eyebrow">Media Enquiries</span><h2>Press and media contact</h2><p>For press enquiries, interview requests, or media information about Floreza Technologies, please contact our communications team.</p><a className="button button-gold" href="mailto:info@florezatechnologies.com?subject=Press%20enquiry"><Icon name="mail" />Contact Press Team</a></div></section></main>;
}

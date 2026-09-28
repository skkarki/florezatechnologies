import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news, formatDate } from "../../site-content";
import { Icon } from "../../components";

export function generateStaticParams() { return news.map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find(item => item.slug === slug);
  return { title: article ? `${article.title} | Floreza Technologies` : "Article Not Found" };
}
export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = news.find(item => item.slug === slug);
  if (!article) notFound();
  return <main id="main-content" className="inner-page"><article className="container article-page"><Link className="back-link" href="/news">← All news & announcements</Link><span className="eyebrow">{article.category}</span><h1>{article.title}</h1><div className="news-date"><Icon name="calendar" /><time dateTime={article.date}>{formatDate(article.date)}</time></div><p className="article-body">{article.text}</p><div className="article-contact"><span className="eyebrow">Further Information</span><p>For more information about this announcement, please contact our communications team.</p><a className="button button-gold" href={`mailto:info@florezatechnologies.com?subject=${encodeURIComponent(article.title)}`}><Icon name="mail" />Contact Press Team</a></div></article></main>;
}

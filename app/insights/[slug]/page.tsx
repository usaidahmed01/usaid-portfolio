import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Footer, Header } from "../../components/site-shell";
import { getInsight, insights } from "../../data/site";

export function generateStaticParams() { return insights.map((post) => ({ slug: post.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const post = getInsight(slug); if (!post) return {}; return { title: post.title, description: post.description, alternates: { canonical: `/insights/${slug}` }, openGraph: { type: "article", title: post.title, description: post.description, images: [] }, twitter: { title: post.title, description: post.description, images: [] } }; }

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const post = getInsight(slug); if (!post) notFound(); const index = insights.findIndex((item) => item.slug === slug); const next = insights[(index + 1) % insights.length];
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.description, datePublished: new Date(post.date).toISOString(), author: { "@type": "Person", name: "Usaid Ahmed" }, articleSection: post.category };
  return <><Header /><main className="article-page"><article><header className="article-header shell"><Link href="/insights" className="back-link">← All insights</Link><p className="kicker"><span>{post.category}</span></p><h1>{post.title}</h1><p>{post.description}</p><div><span>By Usaid Ahmed</span><span>{post.date}</span><span>{post.readingTime}</span></div></header><div className="article-body shell"><aside><span>In this note</span>{post.sections.map((section, i) => <a href={`#section-${i+1}`} key={section.heading}>0{i+1} {section.heading}</a>)}</aside><div><p className="article-intro">{post.intro}</p>{post.sections.map((section, i) => <section id={`section-${i+1}`} key={section.heading}><span>0{i+1}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div></div></article><section className="next-case shell"><p>Read next</p><Link href={`/insights/${next.slug}`}><span>{next.title}</span><Arrow diagonal /></Link></section><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></main><Footer /></>;
}

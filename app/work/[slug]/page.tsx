import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CountUpValue } from "../../components/count-up-value";
import { Arrow, Footer, Header, ProjectVisual } from "../../components/site-shell";
import { caseStudies, getCaseStudy } from "../../data/site";

export function generateStaticParams() { return caseStudies.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const project = getCaseStudy(slug); if (!project) return {}; return { title: project.title, description: project.summary, alternates: { canonical: `/work/${slug}` }, openGraph: { title: `${project.title} case study`, description: project.summary, images: [] }, twitter: { title: `${project.title} case study`, description: project.summary, images: [] } }; }

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = getCaseStudy(slug); if (!project) notFound();
  const index = caseStudies.findIndex((item) => item.slug === slug); const next = caseStudies[(index + 1) % caseStudies.length];
  const schema = { "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, description: project.summary, creator: { "@type": "Person", name: "Usaid Ahmed" }, keywords: project.tags.join(", ") };
  return <><Header /><main className="detail-page">
    <section className="case-hero shell"><p className="kicker"><span>{project.eyebrow}</span></p><h1>{project.title}</h1><p>{project.summary}</p><div className="case-role"><span>My role</span><strong>{project.role}</strong></div></section>
    <section className="case-visual shell"><ProjectVisual variant={project.accent} /></section>
    <section className="case-metrics shell" aria-label={`${project.title} project metrics`}>{project.metrics.map((metric, metricIndex) => <article key={`${metric.value}-${metric.label}`}><strong><CountUpValue value={metric.value} duration={1200 + (metricIndex * 140)} label={`${metric.value} ${metric.label}`} /></strong><span>{metric.label}</span><p>{metric.detail}</p></article>)}</section>
    <section className="case-body shell"><aside><span>Case study</span><div>{project.tags.map((tag) => <em key={tag}>{tag}</em>)}</div></aside><div className="case-story"><article><span>01 / The challenge</span><h2>What needed to change</h2><p>{project.challenge}</p></article><article><span>02 / The approach</span><h2>Designing the whole system</h2><p>{project.approach}</p></article><article><span>03 / Evidence</span><h2>What exists today</h2><p>{project.proof}</p></article><article><span>04 / Direction</span><h2>Where it goes next</h2><p>{project.next}</p></article></div></section>
    <section className="next-case shell"><p>Next case study</p><Link href={`/work/${next.slug}`}><span>{next.title}</span><Arrow diagonal /></Link></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main><Footer /></>;
}

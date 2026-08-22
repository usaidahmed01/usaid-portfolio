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
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": ["Project", "CreativeWork"], name: project.title, description: project.summary, creativeWorkStatus: project.status, creator: { "@type": "Person", name: "Usaid Ahmed" }, keywords: project.tags.join(", ") }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Work", item: "https://usaid-portfolio-sooty.vercel.app/work" }, { "@type": "ListItem", position: 2, name: project.title, item: `https://usaid-portfolio-sooty.vercel.app/work/${project.slug}` }] }] };
  return <><Header /><main className="detail-page">
    <section className="case-hero shell"><p className="kicker"><span>{project.eyebrow}</span></p><h1>{project.title}</h1><p>{project.summary}</p><div className="case-role"><span>My role</span><strong>{project.role}</strong></div></section>
    <section className="case-visual shell"><ProjectVisual variant={project.accent} /></section>
    <section className="case-metrics shell" aria-label={`${project.title} project metrics`}>{project.metrics.map((metric, metricIndex) => <article key={`${metric.value}-${metric.label}`}><strong><CountUpValue value={metric.value} duration={1200 + (metricIndex * 140)} label={`${metric.value} ${metric.label}`} /></strong><span>{metric.label}</span><p>{metric.detail}</p></article>)}</section>
    <section className="case-body shell"><aside><span>Case study</span><div>{project.tags.map((tag) => <em key={tag}>{tag}</em>)}</div><small>{project.status}</small></aside><div className="case-story"><article><span>01 / The challenge</span><h2>What needed to change</h2><p>{project.challenge}</p></article><article><span>02 / The approach</span><h2>Designing the whole system</h2><p>{project.approach}</p></article><article><span>03 / Evidence</span><h2>What exists today</h2><p>{project.proof}</p><ul className="proof-list">{project.proofPoints.map((point) => <li key={point}>{point}</li>)}</ul></article></div></section>
    <section className="architecture-section shell"><div className="architecture-heading"><p className="kicker"><span>System architecture</span></p><h2>From input to useful outcome.</h2></div><div className="architecture-flow">{project.architecture.map((step, stepIndex) => <article key={step}><span>0{stepIndex + 1}</span><strong>{step}</strong>{stepIndex < project.architecture.length - 1 && <i aria-hidden="true">→</i>}</article>)}</div></section>
    <section className="decision-section shell"><div><p className="kicker"><span>Engineering decisions</span></p><h2>Why the system is shaped this way.</h2></div><div className="decision-grid">{project.decisions.map((decision, decisionIndex) => <article key={decision.title}><span>0{decisionIndex + 1}</span><h3>{decision.title}</h3><p>{decision.reason}</p></article>)}</div></section>
    <section className="case-direction shell"><div><p className="kicker"><span>Honest boundary</span></p><h2>{project.status}</h2></div><div><p>{project.next}</p><Link className="button button-ghost" href="/book-a-call" data-track="case_study_call">Discuss a similar system <Arrow /></Link></div></section>
    <section className="next-case shell"><p>Next case study</p><Link href={`/work/${next.slug}`}><span>{next.title}</span><Arrow diagonal /></Link></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main><Footer /></>;
}

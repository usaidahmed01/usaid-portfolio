import type { Metadata } from "next";
import Link from "next/link";
import { CountUpValue } from "../components/count-up-value";
import { Arrow, Footer, Header, PageIntro, ProjectVisual } from "../components/site-shell";
import { caseStudies } from "../data/site";

export const metadata: Metadata = { title: "Selected Work", description: "AI products, machine-learning systems, agentic workflows, and full-stack experiences built by Usaid Ahmed.", alternates: { canonical: "/work" } };

export default function WorkPage() {
  return <><Header /><main><PageIntro eyebrow="Selected work" title="Proof over promises." description="A closer look at the problems, product decisions, technical systems, and honest progress behind my strongest work." />
    <section className="listing-section shell"><div className="work-listing">{caseStudies.map((project, index) => <Link className="work-list-item" href={`/work/${project.slug}`} key={project.slug}><div className="work-list-head"><span>0{index + 1}</span><p>{project.eyebrow}</p><Arrow diagonal /></div><ProjectVisual variant={project.accent} compact /><div className="work-list-copy"><h2>{project.title}</h2><p>{project.summary}</p><div className="work-metric-pills">{project.metrics.slice(0, 2).map((metric) => <span key={`${metric.value}-${metric.label}`}><strong><CountUpValue value={metric.value} label={`${metric.value} ${metric.label}`} /></strong> {metric.label}</span>)}</div><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></Link>)}</div></section>
  </main><Footer /></>;
}

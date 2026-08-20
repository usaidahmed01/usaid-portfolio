import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Footer, Header, PageIntro } from "../components/site-shell";
import { services } from "../data/site";

export const metadata: Metadata = { title: "AI Product Services", description: "AI product development, agentic workflows, RAG systems, machine learning, computer vision, and full-stack AI integration.", alternates: { canonical: "/services" } };

export default function ServicesPage() {
  return <><Header /><main><PageIntro eyebrow="Capabilities" title="Build the product around the intelligence." description="Focused technical collaboration for startups and teams turning AI possibilities into clear, usable, and testable products." />
    <section className="listing-section shell"><div className="service-cards">{services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug} className="service-card"><span>{service.number}</span><div><h2>{service.title}</h2><p>{service.description}</p><ul>{service.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></div><Arrow diagonal /></Link>)}</div></section>
    <section className="fit-section shell"><p className="kicker"><span>A good fit</span></p><div><h2>Bring me the difficult middle.</h2><p>The model may already work. The idea may still be rough. The valuable work is often between them: defining the user workflow, selecting the right AI pattern, building the product path, and creating evidence that it works.</p><Link className="button button-primary" href="/contact">Discuss your project <Arrow /></Link></div></section>
  </main><Footer /></>;
}

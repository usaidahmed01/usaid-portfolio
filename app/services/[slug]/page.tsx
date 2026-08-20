import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Footer, Header } from "../../components/site-shell";
import { getService, services } from "../../data/site";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const service = getService(slug); if (!service) return {}; return { title: service.title, description: service.description, alternates: { canonical: `/services/${slug}` }, openGraph: { title: service.title, description: service.description, images: [] }, twitter: { title: service.title, description: service.description, images: [] } }; }

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = getService(slug); if (!service) notFound(); const others = services.filter((item) => item.slug !== slug).slice(0,3);
  const stages = [
    ["Discover", "Frame the user, business outcome, available data, risk, and smallest valuable product path."],
    ["Design", "Choose the right model, retrieval, agent, data, API, and interface architecture for the problem."],
    ["Build", "Implement an end-to-end version with explicit states, edge cases, evidence, and human controls."],
    ["Evaluate", "Test with representative inputs, document limitations, and create a practical path toward production."],
  ];
  return <><Header /><main className="detail-page"><section className="service-hero shell"><span>{service.number}</span><p className="kicker"><span>Capability</span></p><h1>{service.title}</h1><p>{service.description}</p><Link className="button button-primary" href="/contact">Start a conversation <Arrow /></Link></section>
    <section className="service-outcomes"><div className="shell"><p className="kicker"><span>Typical outcomes</span></p><div>{service.outcomes.map((item, index) => <article key={item}><span>0{index + 1}</span><h2>{item}</h2></article>)}</div></div></section>
    <section className="service-process shell"><div><p className="kicker"><span>Engagement model</span></p><h2>Structured enough to create momentum. Flexible enough to learn.</h2></div><div>{stages.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="related-services shell"><p>Related capabilities</p><div>{others.map((item) => <Link href={`/services/${item.slug}`} key={item.slug}><span>{item.number}</span>{item.title}<Arrow diagonal /></Link>)}</div></section>
  </main><Footer /></>;
}

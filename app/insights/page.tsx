import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Footer, Header, PageIntro } from "../components/site-shell";
import { insights } from "../data/site";

export const metadata: Metadata = { title: "AI Product Insights", description: "Practical field notes from Usaid Ahmed on AI products, RAG evaluation, agentic workflows, machine learning, and human-centered AI systems.", alternates: { canonical: "/insights" } };

export default function InsightsPage() {
  return <><Header /><main><PageIntro eyebrow="Insights" title="Notes from inside the build." description="Weekly thinking on AI products, agentic systems, retrieval, machine learning, product architecture, and the difficult path from demonstration to dependable use." />
    <section className="listing-section shell"><div className="posts-list">{insights.map((post, index) => <Link href={`/insights/${post.slug}`} key={post.slug} className="post-row"><span>0{index + 1}</span><div><p>{post.category}</p><h2>{post.title}</h2><small>{post.date} · {post.readingTime}</small></div><Arrow diagonal /></Link>)}</div></section>
    <section className="newsletter-note shell"><p className="kicker"><span>Publishing rhythm</span></p><div><h2>One useful idea every week.</h2><p>I write to clarify what I’m learning while designing and building intelligent systems—not to repeat AI headlines. Follow along on LinkedIn or return here for new field notes.</p><a className="button button-primary" href="https://www.linkedin.com/in/usaid-ahmed-2127702b1/" target="_blank" rel="noreferrer">Follow on LinkedIn <Arrow diagonal /></a></div></section>
  </main><Footer /></>;
}

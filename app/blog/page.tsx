import type { Metadata } from "next";
import { Arrow, Footer, Header, PageIntro } from "../components/site-shell";
import { insights } from "../data/site";
import BlogExplorer from "./blog-explorer";

export const metadata: Metadata = {
  title: "AI Engineering Blog",
  description: "Weekly field notes from Usaid Ahmed on building AI products, agentic workflows, RAG systems, machine learning, and human-centered AI.",
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/feed.xml" } },
};

export default function BlogPage() {
  return <><Header /><main><PageIntro eyebrow="Weekly blog" title="Notes from inside the build." description="Practical writing on AI products, agentic systems, retrieval, machine learning, product architecture, and the difficult path from demonstration to dependable use." />
    <section className="blog-utility shell"><p><strong>{insights.length} published notes</strong><span />New article every week</p><a href="/feed.xml">Follow via RSS <Arrow diagonal /></a></section>
    <section className="listing-section shell"><BlogExplorer posts={insights} /></section>
    <section className="newsletter-note shell"><p className="kicker"><span>Publishing rhythm</span></p><div><h2>One useful idea every week.</h2><p>I write to explain the engineering decisions, evaluation methods, failures, and product lessons behind intelligent systems—not to repeat AI headlines.</p><a className="button button-primary" href="https://www.linkedin.com/in/usaid-ahmed-2127702b1/" target="_blank" rel="noreferrer">Follow on LinkedIn <Arrow diagonal /></a></div></section>
  </main><Footer /></>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Footer, Header } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Founder Build Log — AgentHive",
  description: "An honest, public build log documenting Usaid Ahmed's progress from a controlled AgentHive proof of concept toward a governed multi-tenant AI workforce product.",
  alternates: { canonical: "/build-log" },
};

const milestones = [
  { state: "complete", date: "Foundation", title: "Product control model", copy: "Defined the operating model around employee permissions, scoped memory, approvals, budgets, task state, and auditability." },
  { state: "complete", date: "POC", title: "Controlled Sales Agent", copy: "Built an end-to-end proof of concept that plans work, retrieves seeded context, uses three simulated business tools, pauses for approval, and generates a report." },
  { state: "active", date: "Current", title: "Multi-tenant MVP architecture", copy: "Translating the product specification into workspace boundaries, employee roles, agent configuration, task visibility, and governed execution." },
  { state: "next", date: "Next", title: "Real tool connections", copy: "Move from simulated tools toward carefully scoped OAuth connections with permission checks, approval gates, and observable failure handling." },
  { state: "next", date: "Roadmap", title: "Three pre-built agents", copy: "Package repeatable workflows for sales, operations, and knowledge work before expanding the agent marketplace." },
];

export default function BuildLogPage() {
  return <><Header /><main className="build-log-page">
    <section className="build-log-hero shell"><div><p className="kicker"><span>Founder build log</span></p><h1>Building AgentHive <em>in public—honestly.</em></h1><p>A living record of product decisions, engineering milestones, and boundaries while moving from a controlled proof of concept toward a governed enterprise AI workforce platform.</p></div><aside><span><i /> CURRENT STAGE</span><strong>Multi-tenant MVP architecture</strong><small>Last portfolio update · August 2026</small></aside></section>

    <section className="build-log-signals shell"><article><span>01</span><strong>Controlled POC</strong><p>Working end-to-end sales workflow</p></article><article><span>03</span><strong>Simulated tools</strong><p>Safe product-flow validation</p></article><article><span>05</span><strong>Control layers</strong><p>Approval · permission · memory · budget · audit</p></article><article><span>01</span><strong>Founder principle</strong><p>Control before autonomy</p></article></section>

    <section className="build-log-timeline shell"><div className="build-log-heading"><p className="kicker"><span>Product journey</span></p><h2>What exists, what is moving, and what comes next.</h2><p>Completed work is separated from active development and roadmap intent. Nothing planned is presented as already shipped.</p></div><div className="build-log-list">{milestones.map((milestone, index) => <article className={`is-${milestone.state}`} key={milestone.title}><span>0{index + 1}</span><div><small>{milestone.date}</small><h3>{milestone.title}</h3><p>{milestone.copy}</p></div><em>{milestone.state === "complete" ? "Complete" : milestone.state === "active" ? "In progress" : "Planned"}</em></article>)}</div></section>

    <section className="build-log-principles"><div className="shell"><p className="kicker"><span>Non-negotiables</span></p><div><article><span>01</span><h2>Human authority</h2><p>Material actions should be understandable, reviewable, and attributable before execution.</p></article><article><span>02</span><h2>Scoped context</h2><p>Memory and tools belong to roles, workspaces, and tasks—not an unrestricted shared intelligence.</p></article><article><span>03</span><h2>Visible work</h2><p>Plans, tool calls, waits, approvals, failures, and outcomes should leave an inspectable trail.</p></article></div></div></section>

    <section className="build-log-cta shell"><div><p className="kicker"><span>Explore the system</span></p><h2>See the product case study behind the log.</h2></div><div><Link className="button button-primary" href="/work/agenthive">Open AgentHive case study <Arrow /></Link><Link className="button button-ghost" href="/book-a-call">Discuss the product <Arrow diagonal /></Link></div></section>
  </main><Footer /></>;
}

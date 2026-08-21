"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type GuideAnswer = { title: string; text: string; links: Array<{ href: string; label: string }> };

const answers: Array<{ terms: string[]; answer: GuideAnswer }> = [
  { terms: ["agent", "automation", "workflow", "agenthive"], answer: { title: "Agentic systems", text: "AgentHive is the strongest evidence: a controlled agent workflow built around tools, approvals, scoped memory, budgets, and auditability.", links: [{ href: "/work/agenthive", label: "View AgentHive" }, { href: "/services/agentic-workflows", label: "Agentic AI service" }] } },
  { terms: ["rag", "knowledge", "chatbot", "retrieval", "llm"], answer: { title: "RAG and knowledge systems", text: "Usaid works across document ingestion, vector retrieval, grounded answers, evaluation, and the product interface around the model.", links: [{ href: "/services/rag-knowledge-systems", label: "Explore RAG capability" }, { href: "/blog/rag-needs-evaluation-not-more-prompts", label: "Read the RAG article" }] } },
  { terms: ["vision", "image", "medical", "face", "mri"], answer: { title: "Computer vision", text: "NeuroGlioma AI demonstrates medical-imaging workflow engineering; SmartFace AI demonstrates recognition, liveness, and deterministic product rules.", links: [{ href: "/work/neuroglioma-ai", label: "NeuroGlioma AI" }, { href: "/work/smartface-ai", label: "SmartFace AI" }] } },
  { terms: ["machine", "forecast", "data", "model", "ml"], answer: { title: "Machine learning and data", text: "The Karachi AQI work covers live ingestion, aligned datasets, feature engineering, model comparison, multiple horizons, and stakeholder visualization.", links: [{ href: "/work/aqi-forecasting", label: "AQI case study" }, { href: "/services/machine-learning-systems", label: "ML capability" }] } },
  { terms: ["hire", "resume", "cv", "experience", "skills", "recruiter"], answer: { title: "Recruiter fast track", text: "The hiring page condenses Usaid’s experience, stack, selected proof, availability, and downloadable CV into one fast scan.", links: [{ href: "/hire-me", label: "Open hiring profile" }, { href: "/Usaid-Ahmed-CV.pdf", label: "Download CV" }] } },
  { terms: ["call", "contact", "available", "project", "work together"], answer: { title: "Start a conversation", text: "Book a focused 30-minute discovery call for an AI product, workflow, or technical collaboration. A structured email fallback is available today.", links: [{ href: "/book-a-call", label: "Book a call" }, { href: "/ai-opportunity-assessment", label: "Assess an opportunity" }] } },
];

const defaultAnswer: GuideAnswer = { title: "A useful place to start", text: "Choose the area closest to your goal, or ask about agents, RAG, computer vision, machine learning, experience, or starting a project.", links: [{ href: "/work", label: "Browse selected work" }, { href: "/services", label: "Explore capabilities" }] };

export function PortfolioGuide() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<GuideAnswer>(defaultAnswer);

  function ask(value: string) {
    const normalized = value.toLowerCase();
    const match = answers.find((item) => item.terms.some((term) => normalized.includes(term)));
    setAnswer(match?.answer || defaultAnswer);
    setQuestion(value);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (question.trim()) ask(question);
  }

  return <div className={`portfolio-guide ${open ? "is-open" : ""}`}>
    {open && <section className="guide-panel" aria-label="Portfolio guide">
      <div className="guide-head"><div><span><i /> PORTFOLIO GUIDE</span><strong>Ask about my work</strong></div><button type="button" onClick={() => setOpen(false)} aria-label="Close portfolio guide">×</button></div>
      <p className="guide-grounding">Curated answers grounded in the projects and capabilities on this site.</p>
      <div className="guide-chips">{["Agentic AI", "RAG systems", "Computer vision", "Hiring profile"].map((chip) => <button type="button" key={chip} onClick={() => ask(chip)}>{chip}</button>)}</div>
      <div className="guide-answer" aria-live="polite"><span>{answer.title}</span><p>{answer.text}</p><div>{answer.links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} data-track="guide_recommendation">{link.label} →</Link>)}</div></div>
      <form onSubmit={submit}><label htmlFor="guide-question">Ask a specific question</label><div><input id="guide-question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="e.g. Has Usaid built RAG systems?" /><button type="submit" aria-label="Ask question">→</button></div></form>
    </section>}
    <button className="guide-toggle liquid-target" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close AI portfolio assistant" : "Open AI portfolio assistant"} data-track="portfolio_guide_toggle">
      <span className="guide-orb" aria-hidden="true">
        <span className="guide-orbit guide-orbit-a"><i /><i /></span>
        <span className="guide-orbit guide-orbit-b"><i /></span>
        <b>AI</b><em />
      </span>
      <span className="guide-toggle-copy"><small>{open ? "ASSISTANT ACTIVE" : "USAID’S AI ASSISTANT"}</small><strong>{open ? "Close assistant" : "Ask about my work"}</strong></span>
      <span className="guide-toggle-arrow" aria-hidden="true">{open ? "×" : "↗"}</span>
    </button>
  </div>;
}

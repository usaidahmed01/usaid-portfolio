"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import type { AssistantLink } from "../data/assistant-context";

type Message = { id: number; role: "user" | "assistant"; content: string; links?: AssistantLink[] };

const greeting: Message = {
  id: 1,
  role: "assistant",
  content: "Hi—I’m Usaid’s AI portfolio assistant. Ask me about his projects, technical stack, services, experience, or whether he fits your AI product challenge.",
  links: [{ href: "/work", label: "Selected work" }, { href: "/hire-me", label: "Hiring profile" }],
};

const quickQuestions = ["What has Usaid built?", "What is AgentHive?", "AI & technical skills", "Is Usaid available?"];

export function PortfolioGuide() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [thinking, setThinking] = useState(false);
  const [provider, setProvider] = useState<"portfolio" | "grok">("portfolio");
  const messageEnd = useRef<HTMLDivElement>(null);
  const nextMessageId = useRef(2);

  useEffect(() => {
    if (open) messageEnd.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, open, thinking]);

  async function ask(value: string) {
    const clean = value.trim();
    if (!clean || thinking) return;
    const userMessage: Message = { id: nextMessageId.current++, role: "user", content: clean };
    const conversation = [...messages, userMessage];
    setMessages(conversation);
    setQuestion("");
    setThinking(true);

    try {
      const result = await fetch("/api/portfolio-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: conversation.map(({ role, content }) => ({ role, content })) }),
      });
      const data = await result.json() as { reply?: string; links?: AssistantLink[]; provider?: "portfolio" | "grok"; error?: string };
      if (!result.ok || !data.reply) throw new Error(data.error || "No reply received");
      setProvider(data.provider || "portfolio");
      setMessages((current) => [...current, { id: nextMessageId.current++, role: "assistant", content: data.reply!, links: data.links }]);
    } catch {
      setMessages((current) => [...current, {
        id: nextMessageId.current++,
        role: "assistant",
        content: "I couldn’t reach the assistant service for a moment. You can retry, browse Usaid’s selected work, or contact him directly.",
        links: [{ href: "/work", label: "Selected work" }, { href: "/book-a-call", label: "Book a call" }],
      }]);
    } finally {
      setThinking(false);
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    void ask(question);
  }

  return <div className={`portfolio-guide ${open ? "is-open" : ""}`}>
    {open && <section className="guide-panel" aria-label="AI portfolio assistant">
      <div className="guide-head"><div><span><i /> AI PORTFOLIO ASSISTANT</span><strong>Ask about Usaid</strong></div><button type="button" onClick={() => setOpen(false)} aria-label="Close portfolio assistant">×</button></div>
      <div className="guide-mode"><span>{provider === "grok" ? "Grok connected" : "Portfolio-grounded mode"}</span><small>Answers use verified portfolio context</small></div>
      <div className="guide-chips">{quickQuestions.map((chip) => <button type="button" key={chip} onClick={() => void ask(chip)} disabled={thinking}>{chip}</button>)}</div>
      <div className="guide-messages" aria-live="polite" aria-busy={thinking}>
        {messages.map((message) => <article className={`guide-message is-${message.role}`} key={message.id}>
          <span>{message.role === "assistant" ? "AI" : "YOU"}</span>
          <div><p>{message.content}</p>{message.links && <nav aria-label="Recommended portfolio links">{message.links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} data-track="guide_recommendation">{link.label} →</Link>)}</nav>}</div>
        </article>)}
        {thinking && <article className="guide-message is-assistant is-thinking"><span>AI</span><div><i /><i /><i /><em>Thinking</em></div></article>}
        <div ref={messageEnd} />
      </div>
      <form onSubmit={submit}><label htmlFor="guide-question">Ask a specific question</label><div><input id="guide-question" value={question} onChange={(event) => setQuestion(event.target.value)} maxLength={600} disabled={thinking} autoComplete="off" placeholder="Ask about projects, skills, or availability…" /><button type="submit" disabled={thinking || !question.trim()} aria-label="Send question">→</button></div></form>
      <p className="guide-disclaimer">Portfolio assistant · No private or client data</p>
    </section>}
    <button className="guide-toggle liquid-target" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close AI portfolio assistant" : "Open AI portfolio assistant"} data-track="portfolio_guide_toggle">
      <span className="guide-orb" aria-hidden="true"><span className="guide-orbit guide-orbit-a"><i /><i /></span><span className="guide-orbit guide-orbit-b"><i /></span><b>AI</b><em /></span>
      <span className="guide-toggle-copy"><small>{open ? "ASSISTANT ACTIVE" : "USAID’S AI ASSISTANT"}</small><strong>{open ? "Close assistant" : "Ask about my work"}</strong></span>
      <span className="guide-toggle-arrow" aria-hidden="true">{open ? "×" : "↗"}</span>
    </button>
  </div>;
}

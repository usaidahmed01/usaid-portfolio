import type { Metadata } from "next";
import { Footer, Header } from "../components/site-shell";
import { site } from "../data/site";
import ContactForm from "./contact-form";

export const metadata: Metadata = { title: "Start a Project", description: "Discuss an AI product, RAG system, agentic workflow, machine-learning product, or technical collaboration with Usaid Ahmed.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <><Header /><main className="contact-page"><section className="contact-grid shell"><div className="contact-intro"><p className="kicker"><span>Start a conversation</span></p><h1>What are you trying to make <em>possible?</em></h1><p>Share the workflow, idea, or technical problem—not a perfect specification. I’ll respond with useful questions and a practical direction for the first valuable version.</p><div className="contact-direct"><span>Prefer a direct email?</span><a href={`mailto:${site.email}`}>{site.email}</a></div></div><ContactForm /></section><section className="contact-expect shell"><article><span>01</span><h2>Useful first response</h2><p>I’ll ask focused questions about users, data, risk, constraints, and the result that would make the work valuable.</p></article><article><span>02</span><h2>Honest fit check</h2><p>If the idea needs a different specialist, more validation, or a smaller first step, I’ll say so clearly.</p></article><article><span>03</span><h2>Clear next move</h2><p>A good conversation ends with a sharper problem and a practical option—not pressure to start immediately.</p></article></section></main><Footer /></>;
}

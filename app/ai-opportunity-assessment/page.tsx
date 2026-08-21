import type { Metadata } from "next";
import Assessment from "./assessment";
import { Footer, Header } from "../components/site-shell";

export const metadata: Metadata = {
  title: "AI Opportunity Assessment",
  description: "Score a workflow's readiness for useful AI and get a grounded recommendation for the right first system pattern.",
  alternates: { canonical: "/ai-opportunity-assessment" },
};

export default function AssessmentPage() {
  return <><Header /><main className="assessment-page">
    <section className="assessment-hero shell"><p className="kicker"><span>Free AI opportunity assessment</span></p><h1>Should this workflow <em>use AI?</em></h1><p>Score the conditions that matter before choosing a model. You’ll get a readiness signal, a likely system pattern, and the most important control to design first.</p></section>
    <section className="shell"><Assessment /></section>
    <section className="assessment-principles shell"><article><span>01</span><h2>Start narrow</h2><p>Choose one repeated workflow with a visible before-and-after outcome.</p></article><article><span>02</span><h2>Measure reality</h2><p>Use representative inputs and an evaluation set—not only a polished demo.</p></article><article><span>03</span><h2>Design control</h2><p>Decide what the system may do, what needs approval, and how failure is surfaced.</p></article></section>
  </main><Footer /></>;
}

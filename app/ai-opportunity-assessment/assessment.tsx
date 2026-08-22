"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const questions = [
  { id: "repetition", label: "How repetitive is the workflow?", low: "Mostly unique", high: "Highly repeatable" },
  { id: "data", label: "How accessible is the required data or knowledge?", low: "Scattered / unavailable", high: "Structured and accessible" },
  { id: "volume", label: "How often does the workflow happen?", low: "Occasionally", high: "Many times each week" },
  { id: "clarity", label: "How clearly can a good outcome be evaluated?", low: "Mostly subjective", high: "Clear success criteria" },
  { id: "effort", label: "How much manual effort does it consume?", low: "A little", high: "A major bottleneck" },
  { id: "risk", label: "How reversible are mistakes?", low: "High consequence", high: "Easy to review or undo" },
] as const;

export default function Assessment() {
  const [scores, setScores] = useState<Record<string, number>>(() => Object.fromEntries(questions.map((item) => [item.id, 3])));
  const [workflow, setWorkflow] = useState("knowledge");

  const result = useMemo(() => {
    const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const percent = Math.round((total / (questions.length * 5)) * 100);
    const readiness = percent >= 76 ? "Pilot-ready" : percent >= 56 ? "Validate first" : "Explore carefully";
    const solution = workflow === "knowledge" ? "Grounded RAG assistant" : workflow === "actions" ? "Human-approved automation" : workflow === "prediction" ? "Machine-learning decision support" : "Computer-vision workflow";
    const guardrail = scores.risk <= 2 ? "Keep a human approval gate around every material decision." : "Begin with reviewable outputs, logs, and clear escalation rules.";
    return { percent, readiness, solution, guardrail };
  }, [scores, workflow]);

  function downloadReport() {
    const workflowLabel = workflow === "knowledge" ? "Finding and using knowledge" : workflow === "actions" ? "Taking actions across tools" : workflow === "prediction" ? "Predicting or classifying" : "Understanding images or video";
    const scoreLines = questions.map((item) => `- ${item.label}: ${scores[item.id]}/5`).join("\n");
    const report = `# AI Opportunity Assessment\n\nGenerated from Usaid Ahmed's portfolio assessment.\n\n## Result\n- Opportunity signal: ${result.percent}%\n- Readiness: ${result.readiness}\n- Recommended first pattern: ${result.solution}\n- Control recommendation: ${result.guardrail}\n- Workflow type: ${workflowLabel}\n\n## Assessment inputs\n${scoreLines}\n\n## Recommended next move\nTest one narrow end-to-end workflow with representative inputs, a measurable success condition, and a visible human escalation path before expanding scope.\n\nThis is a product-framing signal, not a guaranteed ROI calculation.\n\nDiscuss the opportunity: https://usaid-portfolio-sooty.vercel.app/book-a-call\n`;
    const url = URL.createObjectURL(new Blob([report], { type: "text/markdown;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `usaid-ai-opportunity-${result.percent}.md`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return <div className="assessment-tool">
    <div className="assessment-controls">
      <label className="assessment-select"><span>Primary workflow type</span><select value={workflow} onChange={(event) => setWorkflow(event.target.value)}><option value="knowledge">Finding and using knowledge</option><option value="actions">Taking actions across tools</option><option value="prediction">Predicting or classifying</option><option value="vision">Understanding images or video</option></select></label>
      {questions.map((question) => <label className="assessment-range" key={question.id}><span><strong>{question.label}</strong><em>{scores[question.id]} / 5</em></span><input type="range" min="1" max="5" step="1" value={scores[question.id]} onChange={(event) => setScores((current) => ({ ...current, [question.id]: Number(event.target.value) }))} /><small><span>{question.low}</span><span>{question.high}</span></small></label>)}
    </div>
    <aside className="assessment-result">
      <span className="result-label">OPPORTUNITY SIGNAL</span>
      <strong>{result.percent}<sup>%</sup></strong>
      <h2>{result.readiness}</h2>
      <div><span>Best first pattern</span><p>{result.solution}</p></div>
      <div><span>Control recommendation</span><p>{result.guardrail}</p></div>
      <div><span>Useful next move</span><p>Test one narrow end-to-end workflow with representative inputs before expanding scope.</p></div>
      <div className="assessment-report-actions"><button className="button button-ghost" type="button" onClick={downloadReport} data-track="assessment_download">Download report <span>↓</span></button><button className="report-print" type="button" onClick={() => window.print()} data-track="assessment_print">Print / save PDF</button></div>
      <Link className="button button-primary" href={`/book-a-call?assessment=${result.percent}`} data-track="assessment_book_call">Discuss this opportunity <span>→</span></Link>
      <p className="result-note">This is a product-framing signal, not a guaranteed ROI calculation.</p>
    </aside>
  </div>;
}

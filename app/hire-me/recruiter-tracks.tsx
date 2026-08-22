"use client";

import Link from "next/link";
import { useState } from "react";

const tracks = [
  {
    id: "ai",
    label: "AI Engineer",
    headline: "Applied intelligence with an evaluation mindset.",
    summary: "Best for teams building ML, RAG, agentic, or computer-vision systems that need to become dependable product workflows.",
    focus: ["Model and retrieval evaluation", "Agent orchestration and controls", "ML and vision pipelines", "FastAPI product integration"],
    proof: [{ title: "NeuroGlioma AI", href: "/work/neuroglioma-ai" }, { title: "AgentHive", href: "/work/agenthive" }],
  },
  {
    id: "full-stack",
    label: "Full-Stack AI",
    headline: "From model endpoint to usable interface.",
    summary: "Best for product teams that need one engineer to connect AI capabilities with APIs, databases, state, interfaces, and delivery workflows.",
    focus: ["Python · FastAPI · Node.js", "React · Next.js interfaces", "PostgreSQL · MongoDB · Supabase", "Docker and CI/CD workflows"],
    proof: [{ title: "SmartFace AI", href: "/work/smartface-ai" }, { title: "AgentHive", href: "/work/agenthive" }],
  },
  {
    id: "product",
    label: "AI Product Builder",
    headline: "Technical execution shaped by the real workflow.",
    summary: "Best for early-stage teams moving from an AI idea toward a narrow MVP, evaluation plan, control model, and credible implementation path.",
    focus: ["Problem and workflow framing", "MVP architecture", "Human approval and UX", "Roadmap and technical trade-offs"],
    proof: [{ title: "Founder build log", href: "/build-log" }, { title: "AI Opportunity Assessment", href: "/ai-opportunity-assessment" }],
  },
];

export default function RecruiterTracks() {
  const [active, setActive] = useState(tracks[0]);
  return <section className="recruiter-tracks shell" aria-labelledby="recruiter-track-title">
    <div className="track-heading"><p className="kicker"><span>Choose your hiring lens</span></p><h2 id="recruiter-track-title">The same builder, focused for your role.</h2><p>Select the profile closest to the position. The evidence changes; the underlying experience stays honest.</p></div>
    <div className="track-tabs" role="tablist" aria-label="Recruiter profiles">{tracks.map((track) => <button key={track.id} type="button" role="tab" aria-selected={active.id === track.id} onClick={() => setActive(track)} data-track={`recruiter_track_${track.id}`}>{track.label}</button>)}</div>
    <article className="track-panel" role="tabpanel"><div><span>BEST-FIT PROFILE</span><h3>{active.headline}</h3><p>{active.summary}</p></div><div><span>CORE FOCUS</span><ul>{active.focus.map((item) => <li key={item}>{item}</li>)}</ul></div><div><span>OPEN THE PROOF</span>{active.proof.map((item) => <Link href={item.href} key={item.href}>{item.title} ↗</Link>)}</div></article>
  </section>;
}

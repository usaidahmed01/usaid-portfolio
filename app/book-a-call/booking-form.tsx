"use client";

import { FormEvent, useState } from "react";

export default function BookingForm() {
  const [notice, setNotice] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const timezone = String(data.get("timezone") || "");
    const availability = String(data.get("availability") || "");
    const topic = String(data.get("topic") || "AI product discussion");
    const context = String(data.get("context") || "");
    const subject = encodeURIComponent(`Discovery call request — ${name}`);
    const body = encodeURIComponent(`Hi Usaid,\n\nI’d like to request a 30-minute discovery call.\n\nName: ${name}\nReply email: ${email}\nTimezone: ${timezone}\nPreferred days / times: ${availability}\nTopic: ${topic}\n\nWhat I’d like to discuss:\n${context}\n\nBest,\n${name}`);
    setNotice("Opening your email app with the call request prepared.");
    window.location.href = `mailto:usaid423@gmail.com?subject=${subject}&body=${body}`;
  }

  return <form className="contact-form booking-form" onSubmit={submit}>
    <div className="booking-form-head"><span><i /> 30 MINUTE DISCOVERY CALL</span><strong>No-pressure fit check</strong></div>
    <div className="field-pair"><label><span>Your name</span><input name="name" autoComplete="name" required placeholder="How should I address you?" /></label><label><span>Work email</span><input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label></div>
    <div className="field-pair"><label><span>Your timezone</span><input name="timezone" required placeholder="e.g. GMT+1 / Europe" /></label><label><span>Preferred availability</span><input name="availability" required placeholder="e.g. Tue–Thu, 2–5 PM" /></label></div>
    <label><span>Main topic</span><select name="topic" defaultValue="AI product / MVP"><option>AI product / MVP</option><option>Agentic workflow / automation</option><option>RAG / knowledge system</option><option>Machine learning system</option><option>Computer vision application</option><option>Technical collaboration</option></select></label>
    <label><span>What should we discuss?</span><textarea name="context" required rows={5} placeholder="Share the idea, workflow, obstacle, or decision you want the call to clarify." /></label>
    <button className="button button-primary" type="submit">Request the call <span>→</span></button>
    <p className="form-note" aria-live="polite">{notice || "Your email app will open with a structured call request. I’ll reply to confirm a suitable time."}</p>
  </form>;
}

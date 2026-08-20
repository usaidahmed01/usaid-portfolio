"use client";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [notice, setNotice] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || ""); const company = String(data.get("company") || ""); const email = String(data.get("email") || ""); const type = String(data.get("type") || "AI product"); const brief = String(data.get("brief") || "");
    const subject = encodeURIComponent(`Portfolio enquiry: ${type} — ${name}`);
    const body = encodeURIComponent(`Hi Usaid,\n\nMy name is ${name}.\nCompany / context: ${company || "Not provided"}\nReply email: ${email}\nProject type: ${type}\n\nWhat I am trying to build or improve:\n${brief}\n\nBest,\n${name}`);
    setNotice("Opening your email app with the project brief prepared."); window.location.href = `mailto:usaid423@gmail.com?subject=${subject}&body=${body}`;
  }
  return <form className="contact-form" onSubmit={submit}><div className="field-pair"><label><span>Your name</span><input name="name" autoComplete="name" required placeholder="How should I address you?" /></label><label><span>Work email</span><input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label></div><label><span>Company or context <em>Optional</em></span><input name="company" autoComplete="organization" placeholder="Startup, team, or independent project" /></label><label><span>What are we exploring?</span><select name="type" defaultValue="AI product / MVP"><option>AI product / MVP</option><option>Agentic workflow / automation</option><option>RAG / knowledge system</option><option>Machine learning system</option><option>Computer vision application</option><option>Technical collaboration</option></select></label><label><span>Tell me about the workflow or problem</span><textarea name="brief" required rows={7} placeholder="What happens today? Where is the friction? What would a useful outcome look like?" /></label><button className="button button-primary" type="submit">Prepare project email <span>→</span></button><p className="form-note" aria-live="polite">{notice || "Submitting prepares the brief in your email app so you stay in control of what is sent."}</p></form>;
}

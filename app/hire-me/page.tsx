import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Footer, Header } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Hire Usaid — AI Engineer",
  description: "A recruiter-ready overview of Usaid Ahmed's AI engineering, machine learning, agentic systems, computer vision, and full-stack product experience.",
  alternates: { canonical: "/hire-me" },
};

const groups = [
  ["AI engineering", "Agentic workflows", "RAG systems", "Prompt & context engineering", "Evaluation", "LangChain · LangGraph"],
  ["ML & computer vision", "TensorFlow · PyTorch · MONAI", "Classification & forecasting", "Recognition & liveness", "Medical imaging", "Pandas · NumPy"],
  ["Product engineering", "Python · FastAPI · Node.js", "React · Next.js", "PostgreSQL · MongoDB", "Supabase · Firebase", "Docker · CI/CD"],
];

const profileSchema = { "@context": "https://schema.org", "@type": "ProfilePage", name: "Hire Usaid Ahmed — AI Engineer", mainEntity: { "@type": "Person", name: "Usaid Ahmed", jobTitle: "AI Engineer & Product Builder", knowsAbout: groups.flat().slice(1) } };

export default function HireMePage() {
  return <><Header /><main className="hire-page">
    <section className="hire-hero shell"><div><p className="kicker"><span>Recruiter fast track</span></p><h1>AI engineer who can carry an idea from <em>model to product.</em></h1><p>I build across data, machine learning, generative AI, agentic workflows, APIs, and modern interfaces—while keeping evaluation, uncertainty, and real user workflows in view.</p><div className="hire-actions"><a className="button button-primary" href="/Usaid-Ahmed-CV.pdf" download data-track="cv_download">Download my CV <Arrow /></a><Link className="button button-ghost" href="/book-a-call" data-track="recruiter_book_call">Book an interview <Arrow diagonal /></Link></div></div><aside><span><i /> OPEN TO CONVERSATIONS</span><div><small>Based in</small><strong>Karachi, Pakistan</strong></div><div><small>Working model</small><strong>Remote · Global teams</strong></div><div><small>Best fit</small><strong>AI engineering · AI product roles</strong></div></aside></section>

    <section className="hire-snapshot shell"><p>Fast profile</p><div><article><span>01</span><h2>End-to-end builder</h2><p>Comfortable connecting intelligent models to data pipelines, APIs, databases, interfaces, and deployment workflows.</p></article><article><span>02</span><h2>Product-aware engineer</h2><p>Frames the user, decision, evaluation, risk, and control layer—not only the model output.</p></article><article><span>03</span><h2>Founder mindset</h2><p>Co-building AgentHive while turning product requirements into controlled technical workflows.</p></article></div></section>

    <section className="hire-proof shell"><div className="hire-proof-heading"><p className="kicker"><span>Selected evidence</span></p><h2>Proof worth opening.</h2></div><div>{[["AgentHive", "Agentic AI · Founder venture", "/work/agenthive"], ["NeuroGlioma AI", "Medical imaging · AI product", "/work/neuroglioma-ai"], ["SmartFace AI", "Computer vision · Team lead", "/work/smartface-ai"], ["Karachi AQI", "Forecasting · Data science", "/work/aqi-forecasting"]].map(([title, label, href], index) => <Link href={href} key={title}><span>0{index + 1}</span><div><small>{label}</small><h3>{title}</h3></div><Arrow diagonal /></Link>)}</div></section>

    <section className="hire-stack shell"><div><p className="kicker"><span>Technical coverage</span></p><h2>One engineer across the intelligence-to-interface stack.</h2></div><div className="stack-groups">{groups.map((group, index) => <article key={group[0]}><span>0{index + 1}</span><h3>{group[0]}</h3><ul>{group.slice(1).map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

    <section className="hire-experience shell"><p className="kicker"><span>Applied experience</span></p><div className="hire-timeline"><article><span>Founder build</span><div><h2>Co-Founder · AgentHive</h2><p>Product direction and AI architecture for a governed enterprise-agent platform moving from controlled POC toward a multi-tenant MVP.</p></div></article><article><span>AI engineering</span><div><h2>Saylani AI Engineering</h2><p>Applied work across AI engineering, full-stack intelligent systems, computer vision, and product-oriented implementation.</p></div></article><article><span>Data science</span><div><h2>10Pearls internship</h2><p>Contributed to an end-to-end Karachi PM2.5 forecasting pipeline using live sources, features, multiple model families, and stakeholder visualization.</p></div></article></div></section>

    <section className="hire-cta shell"><div><p className="kicker"><span>Make the first conversation useful</span></p><h2>Hiring for an AI product challenge?</h2></div><div><p>Send the role, team context, and the problem you want this person to own. I’ll reply with the most relevant evidence.</p><Link className="button button-primary" href="/book-a-call" data-track="recruiter_cta">Start a conversation <Arrow /></Link></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />
  </main><Footer /></>;
}

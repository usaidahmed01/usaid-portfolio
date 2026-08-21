import Link from "next/link";
import { site } from "../data/site";

const nav = [
  { href: "/work", label: "Work" }, { href: "/services", label: "Services" },
  { href: "/about", label: "About" }, { href: "/blog", label: "Blog" },
];

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export function Header() {
  return <header className="site-header"><div className="shell nav-shell">
    <Link className="brand" href="/" aria-label="Usaid Ahmed home"><span className="brand-mark">UA</span><span className="brand-copy"><strong>Usaid Ahmed</strong><small>AI Engineer · Product Builder</small></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
    <Link className="nav-cta" href="/book-a-call">Book a call <Arrow diagonal /></Link>
    <details className="mobile-menu"><summary aria-label="Open navigation"><span /><span /></summary><nav aria-label="Mobile navigation">{nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/book-a-call">Book a call <Arrow /></Link><Link href="/contact">Start a project <Arrow /></Link></nav></details>
  </div></header>;
}

export function Footer() {
  return <footer className="footer"><div className="shell">
    <div className="footer-main"><p className="kicker"><span className="status-dot" /> Available for select AI projects</p><h2>Have an ambitious AI idea?</h2><div className="footer-actions"><Link className="button button-primary" href="/book-a-call">Book a 30-minute call <Arrow /></Link><Link className="footer-email" href={`mailto:${site.email}`}>{site.email} <Arrow diagonal /></Link></div></div>
    <div className="footer-grid"><div><span className="footer-label">Navigate</span>{nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div><div><span className="footer-label">Connect</span><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href={site.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a></div><div><span className="footer-label">Based in</span><p>{site.location}<br />Working globally</p></div></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Usaid Ahmed</span><span>Designed around clarity, proof, and useful AI.</span></div>
  </div></footer>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-intro shell"><p className="kicker"><span>{eyebrow}</span></p><h1>{title}</h1><p className="page-intro-copy">{description}</p></section>;
}

export function SectionHeading({ eyebrow, title, action }: { eyebrow: string; title: string; action?: React.ReactNode }) {
  return <div className="section-heading"><div><p className="kicker"><span>{eyebrow}</span></p><h2>{title}</h2></div>{action}</div>;
}

export function HeroCharacter() {
  return <figure className="hero-system hero-character liquid-target" aria-label="Stylized portrait of Usaid Ahmed, AI Engineer and product builder">
    <div className="system-glow" aria-hidden="true" />
    <div className="character-grid" aria-hidden="true" />
    <div className="system-orbit orbit-one" aria-hidden="true"><i /><i /><i /></div>
    <div className="system-orbit orbit-two" aria-hidden="true"><i /><i /></div>
    <img className="character-image" src="/usaid-cartoon-hero-v2.png" alt="Stylized cartoon portrait of Usaid Ahmed wearing a black collared shirt" />
    <div className="system-label label-one"><i />AI ENGINEER</div>
    <div className="system-label label-two"><i />PRODUCT</div>
    <div className="system-label label-three"><i />FOUNDER</div>
    <div className="system-label label-four"><i />FULL STACK</div>
    <figcaption>
      <span><i /> USAID AHMED</span>
      <strong>Human insight · engineered intelligence</strong>
    </figcaption>
    <div className="character-scan" aria-hidden="true" />
    <div className="character-nodes" aria-hidden="true"><i /><i /><i /></div>
  </figure>;
}

export function ProjectVisual({ variant, compact = false }: { variant: string; compact?: boolean }) {
  return <div className={`project-visual visual-${variant} ${compact ? "compact" : ""}`} aria-hidden="true"><div className="visual-grid" />
    {variant === "lime" && <div className="agent-ui"><div className="agent-top"><i /><span>Agent run · approval required</span><b>LIVE</b></div><div className="agent-flow"><span>Plan</span><em /><span>Retrieve</span><em /><span>Act</span></div><div className="agent-approval"><i>!</i><div><small>Human checkpoint</small><strong>Send follow-up draft?</strong></div><button>Review →</button></div></div>}
    {variant === "cyan" && <div className="scan-ui"><div className="scan-brain"><span /><i /><b /></div><div className="scan-data"><small>VOLUME ANALYSIS</small><strong>WT · TC · ET</strong><div><span style={{width:"78%"}} /><span style={{width:"56%"}} /><span style={{width:"33%"}} /></div></div></div>}
    {variant === "violet" && <div className="face-ui"><div className="face-frame"><i /><i /><i /><i /><span className="face-line" /></div><div className="face-copy"><small>IDENTITY SIGNAL</small><strong>Recognition gated</strong><span>Detection · movement · liveness</span></div></div>}
    {variant === "orange" && <div className="chart-ui"><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="chart-line" /><div className="chart-copy"><small>PM2.5 FORECAST</small><strong>24 · 48 · 72 HRS</strong></div></div>}
  </div>;
}

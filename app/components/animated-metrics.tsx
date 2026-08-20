"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 25, suffix: "+", label: "Technologies across AI & product", detail: "From models and data pipelines to APIs and interfaces." },
  { value: 6, suffix: "+", label: "Intelligent systems & prototypes", detail: "RAG, agentic AI, computer vision, forecasting, and product builds." },
  { value: 2, suffix: "", label: "Applied AI & data roles", detail: "Hands-on engineering experience at Saylani and 10Pearls." },
  { value: 1, suffix: "", label: "Startup co-founded", detail: "Building AgentHive from controlled proof of concept toward MVP." },
];

export function AnimatedMetrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [values, setValues] = useState(() => metrics.map(() => 0));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValues(metrics.map((metric) => metric.value));
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValues(metrics.map((metric) => Math.round(metric.value * eased)));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  return <section ref={sectionRef} className="personal-metrics shell" aria-labelledby="personal-metrics-title">
    <div className="metrics-heading">
      <p className="kicker"><span>Career in numbers</span></p>
      <h2 id="personal-metrics-title">Breadth, backed by building.</h2>
      <p>Clear signals from my current engineering journey—grounded in completed training, applied roles, and systems I have built or am actively building.</p>
    </div>
    <div className="metrics-grid">
      {metrics.map((metric, index) => <article key={metric.label}>
        <strong aria-label={`${metric.value}${metric.suffix} ${metric.label}`}><span>{values[index]}</span>{metric.suffix}</strong>
        <h3>{metric.label}</h3>
        <p>{metric.detail}</p>
      </article>)}
    </div>
  </section>;
}

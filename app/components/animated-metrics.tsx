import { CountUpValue } from "./count-up-value";

const metrics = [
  { value: 25, suffix: "+", label: "Technologies across AI & product", detail: "From models and data pipelines to APIs and interfaces." },
  { value: 6, suffix: "+", label: "Intelligent systems & prototypes", detail: "RAG, agentic AI, computer vision, forecasting, and product builds." },
  { value: 2, suffix: "", label: "Applied AI & data roles", detail: "Hands-on engineering experience at Saylani and 10Pearls." },
  { value: 1, suffix: "", label: "Startup co-founded", detail: "Building AgentHive from controlled proof of concept toward MVP." },
];

export function AnimatedMetrics() {
  return <section className="personal-metrics shell" aria-labelledby="personal-metrics-title">
    <div className="metrics-heading">
      <p className="kicker"><span>Career in numbers</span></p>
      <h2 id="personal-metrics-title">Breadth, backed by building.</h2>
      <p>Clear signals from my current engineering journey—grounded in completed training, applied roles, and systems I have built or am actively building.</p>
    </div>
    <div className="metrics-grid">
      {metrics.map((metric, index) => <article key={metric.label}>
        <strong><CountUpValue value={`${metric.value}${metric.suffix}`} duration={1250 + (index * 120)} label={`${metric.value}${metric.suffix} ${metric.label}`} /></strong>
        <h3>{metric.label}</h3>
        <p>{metric.detail}</p>
      </article>)}
    </div>
  </section>;
}

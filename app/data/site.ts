export const site = {
  name: "Usaid Ahmed",
  title: "AI Engineer & Product Builder",
  email: "usaid423@gmail.com",
  location: "Karachi, Pakistan",
  github: "https://github.com/usaidahmed01",
  linkedin: "https://www.linkedin.com/in/usaid-ahmed-2127702b1/",
  description:
    "Usaid Ahmed designs and builds agentic AI workflows, RAG systems, machine-learning products, and full-stack AI applications.",
};

export const services = [
  {
    slug: "ai-product-mvp-development",
    number: "01",
    title: "AI Product & MVP Development",
    short: "Move from an AI idea to a usable, testable product.",
    description:
      "End-to-end product work across discovery, model integration, APIs, interfaces, evaluation, and deployment-ready architecture.",
    outcomes: ["Product architecture", "Functional MVP", "Evaluation plan", "Technical roadmap"],
  },
  {
    slug: "agentic-workflows",
    number: "02",
    title: "Agentic Workflows & Automation",
    short: "Design controlled AI systems that do more than answer questions.",
    description:
      "Tool-connected agents, workflow orchestration, human approvals, task state, memory, permissions, and operational visibility.",
    outcomes: ["Workflow blueprint", "Agent prototype", "Approval design", "Tool integration plan"],
  },
  {
    slug: "rag-knowledge-systems",
    number: "03",
    title: "RAG & Knowledge Systems",
    short: "Turn scattered knowledge into grounded, useful answers.",
    description:
      "Retrieval pipelines, document ingestion, vector search, source-grounded responses, and usable conversational interfaces.",
    outcomes: ["Knowledge pipeline", "Retrieval strategy", "RAG application", "Quality evaluation"],
  },
  {
    slug: "machine-learning-systems",
    number: "04",
    title: "Machine Learning Systems",
    short: "Build prediction and classification workflows around real data.",
    description:
      "Data preparation, feature engineering, model training, evaluation, API ingestion, dashboards, and repeatable pipelines.",
    outcomes: ["Clean data pipeline", "Model baseline", "Evaluation report", "Decision dashboard"],
  },
  {
    slug: "computer-vision",
    number: "05",
    title: "Computer Vision Experiences",
    short: "Connect image intelligence to practical applications.",
    description:
      "Image classification, recognition, liveness, segmentation, model calibration, and full-stack visual AI experiences.",
    outcomes: ["Vision pipeline", "Model integration", "Safety thresholds", "Interactive experience"],
  },
  {
    slug: "full-stack-ai-integration",
    number: "06",
    title: "Full-Stack AI Integration",
    short: "Make the model usable through dependable product engineering.",
    description:
      "FastAPI and Node.js services, React and Next.js interfaces, databases, vector stores, CI/CD, and product integration.",
    outcomes: ["API layer", "Product interface", "Data integration", "Delivery pipeline"],
  },
];

export const engineeringMetrics = [
  {
    value: "0.933",
    label: "ROC-AUC",
    context: "Selected GBM classifier on held-out evaluation data",
  },
  {
    value: "47",
    label: "Automated checks",
    context: "Cross-phase validation across the clinical AI workflow",
  },
  {
    value: "4",
    label: "MRI sequences",
    context: "T1C, T1, T2, and FLAIR aligned before segmentation",
  },
  {
    value: "24·48·72h",
    label: "Forecast horizons",
    context: "PM2.5 forecasting windows in the AQI pipeline",
  },
];

export const caseStudies = [
  {
    slug: "agenthive",
    title: "AgentHive",
    eyebrow: "Founder venture · In development",
    summary:
      "Designing an enterprise AI workforce control room for building, governing, and monitoring secure business agents.",
    accent: "lime",
    tags: ["Agentic AI", "Multi-tenant SaaS", "Governance"],
    role: "Co-Founder · AI architecture · Product execution",
    challenge:
      "Business teams lose time moving between email, CRM, calendars, documents, and approval chains. Simple chatbots cannot safely execute that work, while unrestricted agents create operational risk.",
    approach:
      "AgentHive combines an agent marketplace and natural-language builder with controlled tools, employee permissions, human approvals, scoped memory, budgets, task timelines, and auditability.",
    proof:
      "A controlled Sales Agent proof of concept can plan a workflow, read seeded memory, draft follow-ups, suggest meeting slots, pause for approval, and generate a report using simulated business tools.",
    metrics: [
      { value: "01", label: "Controlled POC", detail: "End-to-end sales-agent workflow" },
      { value: "03", label: "Simulated tools", detail: "Business actions tested safely" },
      { value: "05", label: "Control layers", detail: "Approval, permission, memory, budget, audit" },
    ],
    next:
      "The product roadmap moves from the controlled proof of concept toward real OAuth connectors, multi-tenant workspaces, three pre-built agents, verified memory, usage credits, and enterprise controls.",
  },
  {
    slug: "neuroglioma-ai",
    title: "NeuroGlioma AI",
    eyebrow: "Clinical AI research product · In development",
    summary:
      "Building a pre-biopsy MRI decision-support workflow for glioblastoma identification, segmentation, and quantification.",
    accent: "cyan",
    tags: ["Medical imaging", "MONAI", "FastAPI"],
    role: "AI engineering · Backend · Product workflow",
    challenge:
      "MRI review involves complex, multi-sequence imaging data and demands careful uncertainty handling. A useful research system must go beyond a binary prediction and preserve traceability and clinical caution.",
    approach:
      "The system combines calibrated classification, safety bands, DICOM/NIfTI quality gates, 3D segmentation, physical tumor quantification, anatomical localization, and a clinical viewer.",
    proof:
      "The current implementation includes a calibrated 2D classifier, validated multi-modal volume preparation, a verified MONAI segmentation bundle, physical geometry checks, and a tested clinical-viewer backend.",
    metrics: [
      { value: "0.933", label: "ROC-AUC", detail: "Selected classifier" },
      { value: "0.953", label: "PR-AUC", detail: "Selected classifier" },
      { value: "47", label: "Automated checks", detail: "Cross-phase validation" },
      { value: "04", label: "MRI sequences", detail: "T1C · T1 · T2 · FLAIR" },
    ],
    next:
      "Ongoing work focuses on completing the clinical viewer, decision fusion, reporting, validation, and deployment without presenting the research system as a medical diagnosis.",
  },
  {
    slug: "smartface-ai",
    title: "SmartFace AI",
    eyebrow: "Computer vision system · Academic team project",
    summary:
      "Engineered a safer facial-attendance workflow with recognition, head-movement checks, liveness analysis, and attendance rules.",
    accent: "violet",
    tags: ["Computer vision", "Liveness", "PostgreSQL"],
    role: "Project Lead · AI/ML · Backend integration",
    challenge:
      "A facial-attendance product must handle unknown faces, spoof attempts, uncertain recognition, repeated check-ins, and operational auditability—not only return a similarity score.",
    approach:
      "The team integrated SCRFD detection, ArcFace recognition, MediaPipe head movement, MiniFASNet liveness experiments, calibrated thresholds, unknown rejection, PostgreSQL, and explicit attendance rules.",
    proof:
      "The resulting system separates recognition from liveness diagnostics, documents model setup, exposes QA tools, and applies deterministic attendance logic around the model outputs.",
    metrics: [
      { value: "04", label: "Vision safeguards", detail: "Detect · recognize · move · liveness" },
      { value: "02", label: "Decision gates", detail: "Identity and liveness remain separate" },
      { value: "01", label: "Audit trail", detail: "Deterministic attendance rules" },
    ],
    next:
      "Future refinement would focus on broader calibration data, monitoring, fairness evaluation, and controlled deployment conditions.",
  },
  {
    slug: "aqi-forecasting",
    title: "Karachi AQI Forecasting",
    eyebrow: "Data science internship · 10Pearls",
    summary:
      "Contributed to an end-to-end PM2.5 forecasting pipeline with live data ingestion, feature engineering, models, and stakeholder visualization.",
    accent: "orange",
    tags: ["Forecasting", "Data pipelines", "MLOps"],
    role: "Data science intern · Pipeline and dashboard contribution",
    challenge:
      "Air-quality forecasting depends on aligned, reliable environmental data and clear communication of predictions across multiple time horizons.",
    approach:
      "The pipeline used Open-Meteo and OpenAQ data, timestamp alignment, Parquet storage, engineered features, Ridge Regression, Random Forest, Gradient Boosting, and a Streamlit dashboard.",
    proof:
      "The system produced 24, 48, and 72-hour PM2.5 forecasting workflows and exposed model insights through a stakeholder-facing dashboard, with CI/CD and feature-store exposure.",
    metrics: [
      { value: "03", label: "Forecast horizons", detail: "24 · 48 · 72 hours" },
      { value: "02", label: "Live data sources", detail: "Open-Meteo and OpenAQ" },
      { value: "03", label: "Model families", detail: "Ridge · Random Forest · Gradient Boosting" },
    ],
    next:
      "A production extension would strengthen monitoring, drift detection, alerting, scheduled retraining, and uncertainty communication.",
  },
];

export const insights = [
  {
    slug: "why-ai-products-fail-after-the-demo",
    category: "AI Product Engineering",
    title: "Why AI products fail after the impressive demo",
    description:
      "The distance between a model response and a dependable product is filled with evaluation, state, permissions, failure handling, and UX.",
    date: "August 20, 2026",
    readingTime: "6 min read",
    intro:
      "A polished demo proves that a model can produce an interesting output. It does not prove that a product can be trusted with a repeated business workflow.",
    sections: [
      { heading: "A model output is not a workflow", paragraphs: ["Real work has inputs, owners, deadlines, permissions, exceptions, and consequences. The AI layer must live inside a system that knows what step it is on, what it may do, and what happens when something fails.", "A useful product therefore needs task state, validation, retries, evidence, and a clear way to escalate uncertainty to a person."] },
      { heading: "Trust is an interface decision", paragraphs: ["Users trust systems they can inspect. Show sources for retrieved knowledge, show planned actions before execution, and make approval requests explain the risk and expected outcome.", "The goal is not to make the AI look certain. The goal is to help the user make a better decision when the system is uncertain."] },
      { heading: "Build the control layer early", paragraphs: ["Logging, budgets, permission checks, evaluation, and human approvals should not be postponed until after the prototype. They shape the architecture and often determine whether the prototype can become a product at all."] },
    ],
  },
  {
    slug: "rag-needs-evaluation-not-more-prompts",
    category: "RAG & Knowledge Systems",
    title: "Your RAG system needs evaluation, not another prompt",
    description:
      "Grounded answers depend on the whole retrieval pipeline: documents, chunks, metadata, search, context assembly, and measurable quality.",
    date: "August 13, 2026",
    readingTime: "5 min read",
    intro:
      "When a RAG application gives a weak answer, changing the system prompt is tempting. Often, the real problem occurred before the model saw any context.",
    sections: [
      { heading: "Inspect retrieval before generation", paragraphs: ["Check whether the correct source entered the index, whether the chunk preserved the relevant idea, and whether search ranked it high enough to reach the model.", "Generation quality cannot recover information that retrieval never supplied."] },
      { heading: "Create a small evaluation set", paragraphs: ["A practical evaluation can begin with a few dozen representative questions, expected sources, and notes about what a satisfactory answer must contain. Run the same set whenever chunking, embeddings, prompts, or models change."] },
      { heading: "Make uncertainty visible", paragraphs: ["A grounded system should be able to say that the available sources do not support an answer. That boundary is a feature, especially when the user may act on the result."] },
    ],
  },
  {
    slug: "human-approval-is-product-design",
    category: "Agentic AI",
    title: "Human approval is product design—not a safety popup",
    description:
      "Good approval flows preserve momentum while making risky actions understandable, reversible, and accountable.",
    date: "August 6, 2026",
    readingTime: "7 min read",
    intro:
      "Adding an Approve button does not automatically put a human in control. The person needs enough context to understand what the agent wants to do and why.",
    sections: [
      { heading: "Approval needs evidence", paragraphs: ["Show the requested action, affected system, relevant data, policy or memory used, expected result, and risk level. Without evidence, the approver is only confirming the agent's confidence."] },
      { heading: "Offer more than approve or deny", paragraphs: ["Useful flows let a person ask for an explanation, edit the proposed action, or return the task with an instruction. This keeps the workflow moving without surrendering judgment."] },
      { heading: "Save the decision trail", paragraphs: ["The final record should connect the request, evidence, approver, decision, executed action, and outcome. That history supports debugging, accountability, and better future policies."] },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((item) => item.slug === slug);
export const getService = (slug: string) => services.find((item) => item.slug === slug);
export const getInsight = (slug: string) => insights.find((item) => item.slug === slug);

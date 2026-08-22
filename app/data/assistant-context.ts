export type AssistantLink = { href: string; label: string };

export const portfolioKnowledge = `
You are Usaid Ahmed's portfolio assistant. Answer questions about Usaid, his skills, projects,
services, experience, writing, availability, and how to contact him. Be concise, confident, and
honest. Never invent clients, employment, project completion, metrics, testimonials, or medical
claims. If the answer is not in this context, say that the portfolio does not provide that detail
and direct the visitor to contact Usaid.

PROFILE
- Usaid Ahmed is an AI Engineer, full-stack AI product builder, and Co-Founder of AgentHive in Karachi, Pakistan.
- He works across agentic AI, RAG, machine learning, computer vision, data pipelines, FastAPI/Node APIs, React/Next.js interfaces, databases, Docker, and CI/CD.
- He is available for select AI projects, technical collaborations, and relevant AI engineering opportunities with global/remote teams.

PROJECTS
- AgentHive: founder venture in development. Controlled sales-agent POC with simulated business tools, human approvals, scoped memory, permissions, budgets, and auditability. Do not claim live autonomous enterprise integrations.
- NeuroGlioma AI: clinical AI research product in development for pre-biopsy MRI decision support, segmentation, quantification, and visualization. It is not a diagnostic medical device. Documented classifier ROC-AUC 0.933, PR-AUC 0.953, four MRI sequences, and 47 cross-phase automated checks at the reported checkpoint.
- SmartFace AI: completed academic team project. Usaid was Project Lead with AI/ML and backend integration responsibilities. It combines detection, recognition, movement checks, liveness experiments, rejection thresholds, attendance rules, and PostgreSQL.
- Karachi AQI Forecasting: completed 10Pearls data science internship project using Open-Meteo/OpenAQ ingestion, aligned Parquet data, feature engineering, Ridge/Random Forest/Gradient Boosting models, 24/48/72-hour horizons, and a Streamlit dashboard.

SERVICES
- AI product and MVP development
- Agentic workflows and intelligent automation
- RAG and knowledge systems
- Machine-learning systems
- Computer-vision experiences
- Full-stack AI integration

CONTACT
- Book a 30-minute call at /book-a-call
- Recruiter profile and CV at /hire-me
- AI opportunity assessment at /ai-opportunity-assessment
- Founder build log at /build-log
- Selected work at /work and services at /services
- Blog at /blog
`;

const recommendations: Array<{ terms: string[]; reply: string; links: AssistantLink[] }> = [
  { terms: ["who", "about", "usaid", "yourself", "introduction"], reply: "Usaid Ahmed is an AI Engineer, full-stack AI product builder, and Co-Founder of AgentHive. He turns AI ideas into usable systems across models, data, APIs, workflows, controls, and product interfaces.", links: [{ href: "/about", label: "About Usaid" }, { href: "/hire-me", label: "Hiring profile" }] },
  { terms: ["agent", "automation", "workflow", "agenthive"], reply: "AgentHive is Usaid’s strongest agentic-AI proof: a controlled sales-agent workflow built around planning, scoped memory, simulated tools, human approvals, permissions, budgets, and auditability. It is moving from a controlled POC toward a multi-tenant MVP.", links: [{ href: "/work/agenthive", label: "View AgentHive" }, { href: "/services/agentic-workflows", label: "Agentic AI service" }] },
  { terms: ["build log", "founder", "startup", "building in public", "progress"], reply: "Usaid documents AgentHive’s progress in an honest founder build log: the product control model and controlled Sales Agent POC are complete, the multi-tenant MVP architecture is in progress, and real tool connections remain planned work.", links: [{ href: "/build-log", label: "Founder build log" }, { href: "/work/agenthive", label: "AgentHive case study" }] },
  { terms: ["rag", "knowledge", "chatbot", "retrieval", "llm"], reply: "Usaid’s RAG capability covers document ingestion, vector retrieval, grounded answers, source-aware UX, and evaluation. His approach treats retrieval quality and uncertainty as product concerns—not just prompt engineering.", links: [{ href: "/services/rag-knowledge-systems", label: "RAG capability" }, { href: "/blog/rag-needs-evaluation-not-more-prompts", label: "RAG article" }] },
  { terms: ["vision", "image", "medical", "face", "mri", "glioma"], reply: "For computer vision, NeuroGlioma AI demonstrates medical-imaging workflow engineering, while SmartFace AI demonstrates recognition, movement, liveness checks, rejection thresholds, and deterministic attendance rules.", links: [{ href: "/work/neuroglioma-ai", label: "NeuroGlioma AI" }, { href: "/work/smartface-ai", label: "SmartFace AI" }] },
  { terms: ["machine", "forecast", "data", "model", "ml", "aqi"], reply: "The Karachi AQI project covers live environmental-data ingestion, timestamp alignment, Parquet storage, feature engineering, three model families, 24/48/72-hour forecast horizons, and stakeholder visualization.", links: [{ href: "/work/aqi-forecasting", label: "AQI case study" }, { href: "/services/machine-learning-systems", label: "ML capability" }] },
  { terms: ["skill", "stack", "technology", "fastapi", "react", "next", "python", "backend", "frontend"], reply: "Usaid works across Python, FastAPI, Node.js, React, Next.js, PostgreSQL, MongoDB, Supabase, Firebase, TensorFlow, PyTorch, MONAI, LangChain, LangGraph, Docker, and CI/CD—connecting the intelligence layer to a usable product.", links: [{ href: "/hire-me", label: "Technical profile" }, { href: "/services", label: "All capabilities" }] },
  { terms: ["hire", "resume", "cv", "experience", "recruiter", "job", "role"], reply: "The recruiter fast-track page lets hiring teams evaluate Usaid through three role lenses—AI Engineer, Full-Stack AI Engineer, and AI Product Builder—with focused evidence and a downloadable CV.", links: [{ href: "/hire-me", label: "Hiring profile" }, { href: "/Usaid-Ahmed-CV.pdf", label: "Download CV" }] },
  { terms: ["price", "cost", "budget", "quote", "rate"], reply: "Project pricing depends on scope, integrations, data readiness, risk, and validation needs. The best next step is the short AI Opportunity Assessment, followed by a focused discovery call.", links: [{ href: "/ai-opportunity-assessment", label: "Assess the opportunity" }, { href: "/book-a-call", label: "Book a call" }] },
  { terms: ["call", "contact", "available", "project", "work together", "email"], reply: "Usaid is available for select AI projects, technical collaborations, and relevant AI engineering opportunities. You can request a focused 30-minute conversation or start by assessing your workflow.", links: [{ href: "/book-a-call", label: "Book a call" }, { href: "/ai-opportunity-assessment", label: "AI assessment" }] },
  { terms: ["blog", "article", "write", "insight"], reply: "Usaid’s weekly blog covers AI product engineering, RAG evaluation, agentic workflows, human approvals, machine learning, and the path from demo to dependable product.", links: [{ href: "/blog", label: "Read the blog" }] },
];

export function groundedReply(question: string): { reply: string; links: AssistantLink[] } {
  const normalized = question.toLowerCase();
  const match = recommendations.find((item) => item.terms.some((term) => normalized.includes(term)));
  if (match) return { reply: match.reply, links: match.links };
  return {
    reply: "I don’t have a verified portfolio detail for that yet. I can help with Usaid’s projects, AI services, technical stack, experience, availability, blog, or the best way to start a project. For anything more specific, contact Usaid directly.",
    links: [{ href: "/work", label: "Browse work" }, { href: "/book-a-call", label: "Ask Usaid directly" }],
  };
}

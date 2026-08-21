import { groundedReply, portfolioKnowledge, type AssistantLink } from "../../data/assistant-context";

type ChatMessage = { role: "user" | "assistant"; content: string };

const headers = { "Content-Type": "application/json", "Cache-Control": "no-store" };

function response(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers });
}

export async function POST(request: Request) {
  let body: { messages?: ChatMessage[] };
  try {
    body = await request.json();
  } catch {
    return response({ error: "Please send a valid question." }, 400);
  }

  const messages = Array.isArray(body.messages) ? body.messages.slice(-8) : [];
  const cleaned = messages
    .filter((message) => message && (message.role === "user" || message.role === "assistant") && typeof message.content === "string")
    .map((message) => ({ role: message.role, content: message.content.trim().slice(0, 600) }))
    .filter((message) => message.content.length > 0);
  const question = [...cleaned].reverse().find((message) => message.role === "user")?.content;
  if (!question) return response({ error: "Ask me something about Usaid’s work." }, 400);

  const fallback = groundedReply(question);
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) return response({ ...fallback, provider: "portfolio" });

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    const upstream = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: process.env.XAI_MODEL || "grok-4-latest",
        temperature: 0.25,
        max_tokens: 260,
        messages: [{ role: "system", content: portfolioKnowledge }, ...cleaned],
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!upstream.ok) return response({ ...fallback, provider: "portfolio" });
    const data = await upstream.json() as { choices?: Array<{ message?: { content?: string } }> };
    const reply = data.choices?.[0]?.message?.content?.trim();
    if (!reply) return response({ ...fallback, provider: "portfolio" });
    const links: AssistantLink[] = groundedReply(question).links;
    return response({ reply, links, provider: "grok" });
  } catch {
    return response({ ...fallback, provider: "portfolio" });
  }
}

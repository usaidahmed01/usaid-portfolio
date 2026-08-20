import { insights } from "../data/site";

const base = "https://usaid-portfolio.basit-ahmed906.chatgpt.site";
const escapeXml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

export function GET() {
  const items = insights.map((post) => `<item><title>${escapeXml(post.title)}</title><link>${base}/blog/${post.slug}</link><guid>${base}/blog/${post.slug}</guid><pubDate>${new Date(post.date).toUTCString()}</pubDate><description>${escapeXml(post.description)}</description><category>${escapeXml(post.category)}</category></item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Usaid Ahmed — AI Engineering Blog</title><link>${base}/blog</link><description>Weekly field notes on building dependable AI products.</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}

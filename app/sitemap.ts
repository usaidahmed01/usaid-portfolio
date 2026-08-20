import type { MetadataRoute } from "next";
import { caseStudies, insights, services } from "./data/site";

const base = "https://usaid-portfolio.basit-ahmed906.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/services", "/about", "/blog", "/contact"].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "/blog" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .8 }));
  const workRoutes = caseStudies.map((item) => ({ url: `${base}/work/${item.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8 }));
  const serviceRoutes = services.map((item) => ({ url: `${base}/services/${item.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .75 }));
  const insightRoutes = insights.map((item) => ({ url: `${base}/blog/${item.slug}`, lastModified: new Date(item.date), changeFrequency: "monthly" as const, priority: .7 }));
  return [...staticRoutes, ...workRoutes, ...serviceRoutes, ...insightRoutes];
}

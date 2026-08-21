import type { Metadata, Viewport } from "next";
import { site } from "./data/site";
import { LiquidCursor } from "./components/liquid-cursor";
import { ConversionTracker } from "./components/conversion-tracker";
import { PortfolioGuide } from "./components/portfolio-guide";
import "./globals.css";
import "./inner.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://usaid-portfolio.basit-ahmed906.chatgpt.site"),
  title: { default: "Usaid Ahmed - AI Engineer & Product Builder", template: "%s | Usaid Ahmed" },
  description: site.description,
  keywords: ["Usaid Ahmed", "AI Engineer Pakistan", "AI Product Developer", "Agentic AI Developer", "RAG Developer", "Machine Learning Engineer", "Full Stack AI Developer", "AgentHive"],
  authors: [{ name: site.name }], creator: site.name,
  openGraph: { type: "website", locale: "en_US", siteName: "Usaid Ahmed - AI Engineer & Product Builder", title: "Usaid Ahmed - AI Engineer & Product Builder", description: site.description, images: [{ url: "/og.png", width: 1200, height: 630, alt: "Usaid Ahmed - AI Engineer & Product Builder" }] },
  twitter: { card: "summary_large_image", title: "Usaid Ahmed - AI Engineer & Product Builder", description: site.description, images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" }, alternates: { canonical: "/" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07090d" };

const profileSchema = { "@context": "https://schema.org", "@type": "ProfilePage", name: "Usaid Ahmed — AI Engineer & Product Builder", url: "https://usaid-portfolio.basit-ahmed906.chatgpt.site", mainEntity: { "@type": "Person", name: site.name, jobTitle: site.title, url: "https://usaid-portfolio.basit-ahmed906.chatgpt.site", email: `mailto:${site.email}`, address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" }, sameAs: [site.github, site.linkedin], knowsAbout: ["Artificial Intelligence", "Machine Learning", "Agentic AI", "Retrieval-Augmented Generation", "Computer Vision", "Full-stack AI product development"] } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><LiquidCursor /><ConversionTracker /><PortfolioGuide /><div id="main-content">{children}</div><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} /></body></html>;
}

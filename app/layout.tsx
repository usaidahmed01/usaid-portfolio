import type { Metadata, Viewport } from "next";
import { site } from "./data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://usaid-portfolio.site"),
  title: { default: "Usaid Ahmed - AI Engineer & Product Builder", template: "%s | Usaid Ahmed" },
  description: site.description,
  keywords: ["Usaid Ahmed", "AI Engineer Pakistan", "AI Product Developer", "Agentic AI Developer", "RAG Developer", "Machine Learning Engineer", "Full Stack AI Developer", "AgentHive"],
  authors: [{ name: site.name }], creator: site.name,
  openGraph: { type: "website", locale: "en_US", siteName: "Usaid Ahmed - AI Engineer & Product Builder", title: "Usaid Ahmed - AI Engineer & Product Builder", description: site.description },
  twitter: { card: "summary_large_image", title: "Usaid Ahmed - AI Engineer & Product Builder", description: site.description },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" }, alternates: { canonical: "/" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07090d" };

const personSchema = { "@context": "https://schema.org", "@type": "Person", name: site.name, jobTitle: site.title, url: "https://usaid-portfolio.site", email: `mailto:${site.email}`, address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" }, sameAs: [site.github, site.linkedin], knowsAbout: ["Artificial Intelligence", "Machine Learning", "Agentic AI", "Retrieval-Augmented Generation", "Computer Vision", "Full-stack AI product development"] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><div id="main-content">{children}</div><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} /></body></html>;
}

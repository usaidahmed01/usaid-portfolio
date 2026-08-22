# Usaid Ahmed — AI Engineer & Product Builder

A proof-led personal portfolio built to present AI engineering work, communicate services, publish practical writing, and convert qualified visitors into project or hiring conversations.

**Live portfolio:** [usaid-portfolio-sooty.vercel.app](https://usaid-portfolio-sooty.vercel.app)

## What is included

- Conversion-focused homepage with interactive metrics and an AI-themed portrait
- Evidence-led case studies for AgentHive, NeuroGlioma AI, SmartFace AI, and AQI Forecasting
- AI services and capability pages
- Recruiter fast track with role-specific profiles and downloadable CV
- Founder build log documenting AgentHive progress honestly
- Searchable weekly insights hub, article pages, and RSS feed
- Interactive AI opportunity assessment with downloadable and print-ready reports
- Grounded portfolio assistant with an optional xAI/Grok provider
- Calendar-ready booking flow with an email fallback
- SEO metadata, structured data, sitemap, robots configuration, and `llms.txt`
- Vercel Web Analytics instrumentation, responsive design, accessibility, and reduced-motion support

## Technology

- Next.js 16 and React 19
- TypeScript
- CSS animations and responsive layouts
- Vercel Analytics
- Optional xAI/Grok API integration
- Vinext/Cloudflare-compatible build for the ChatGPT Sites deployment

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

```bash
# Optional: enables model-generated assistant replies.
XAI_API_KEY=
XAI_MODEL=grok-4-latest

# Optional: embeds a Cal.com (or compatible) booking page.
NEXT_PUBLIC_CALCOM_URL=
```

The portfolio assistant remains usable without an API key through verified, portfolio-grounded responses. The booking page falls back to the enquiry form when no calendar URL is configured.

## Validation

```bash
npm run lint
npm test
```

`npm test` builds the Sites-compatible output and verifies primary routes, metadata, project evidence, the portfolio assistant, assessment, booking, and blog surfaces.

## Publishing weekly articles

See [BLOGGING.md](./BLOGGING.md) for the article template and publishing workflow.

## Accuracy boundary

The site distinguishes completed work, active development, and planned capabilities. AgentHive remains an early-stage product, NeuroGlioma AI is research decision-support software rather than a diagnostic medical device, and team projects identify Usaid’s actual role.

## Contact

- [LinkedIn](https://www.linkedin.com/in/usaid-ahmed-2127702b1/)
- [GitHub](https://github.com/usaidahmed01)
- Email: `usaid423@gmail.com`

import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  return { response, html: await response.text() };
}

async function askAssistant(question) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("assistant-test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/api/portfolio-assistant", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ messages: [{ role: "user", content: question }] }),
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  return { response, json: await response.json() };
}

test("renders portfolio metadata and primary positioning", async () => {
  const { response, html } = await render();

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(html, /<title>Usaid Ahmed - AI Engineer &amp; Product Builder<\/title>/i);
  assert.match(html, /Intelligence,/i);
  assert.match(html, /engineered into/i);
  assert.match(html, /Career in numbers/i);
  assert.match(html, /25\+ Technologies across AI &amp; product/i);
  assert.match(html, /usaid-cartoon-hero-v2\.png/i);
  assert.match(html, /Book a 30-minute call/i);
  assert.match(html, /Saylani AI Engineering/i);
  assert.doesNotMatch(html, /usaid-body-cutout\.png/i);
  assert.match(html, /href="\/blog"/i);
  assert.match(html, /href="\/hire-me"/i);
  assert.match(html, /href="\/ai-opportunity-assessment"/i);
  assert.match(html, /Ask about my work/i);
  assert.match(html, /USAID’S AI ASSISTANT/i);
  assert.match(html, /Open AI portfolio assistant/i);
});

test("keeps the portrait on the homepage and the about page professionally focused", async () => {
  const about = await render("/about");
  assert.equal(about.response.status, 200);
  assert.doesNotMatch(about.html, /usaid-cartoon-hero-v2\.png/i);
  assert.doesNotMatch(about.html, /usaid-body-cutout\.png/i);
  assert.match(about.html, /I’m Usaid Ahmed/i);
  assert.match(about.html, /full intelligence-to-interface stack/i);
  assert.match(about.html, /The work is active, not archived/i);
});

test("animates project evidence and provides a dedicated call-booking route", async () => {
  const project = await render("/work/neuroglioma-ai");
  assert.equal(project.response.status, 200);
  assert.match(project.html, /0\.933 ROC-AUC/i);
  assert.match(project.html, /count-up-value/i);
  assert.match(project.html, /System architecture/i);
  assert.match(project.html, /Engineering decisions/i);
  assert.match(project.html, /Research system in development/i);

  const booking = await render("/book-a-call");
  assert.equal(booking.response.status, 200);
  assert.match(booking.html, /Thirty minutes to find/i);
  assert.match(booking.html, /Request the call/i);
  assert.match(booking.html, /Google Meet/i);
});

test("provides recruiter proof, downloadable CV, and interactive lead qualification", async () => {
  const hire = await render("/hire-me");
  assert.equal(hire.response.status, 200);
  assert.match(hire.html, /Recruiter fast track/i);
  assert.match(hire.html, /Usaid-Ahmed-CV\.pdf/i);
  assert.match(hire.html, /One engineer across the intelligence-to-interface stack/i);

  const assessment = await render("/ai-opportunity-assessment");
  assert.equal(assessment.response.status, 200);
  assert.match(assessment.html, /Should this workflow/i);
  assert.match(assessment.html, /OPPORTUNITY SIGNAL/i);
  assert.match(assessment.html, /product-framing signal/i);
});

test("portfolio assistant returns grounded replies without exposing an API key", async () => {
  const { response, json } = await askAssistant("What is AgentHive?");
  assert.equal(response.status, 200);
  assert.equal(json.provider, "portfolio");
  assert.match(json.reply, /controlled sales-agent workflow/i);
  assert.equal(json.links[0].href, "/work/agenthive");
});

test("publishes the weekly blog index and article routes", async () => {
  const blog = await render("/blog");
  assert.equal(blog.response.status, 200);
  assert.match(blog.html, /Notes from inside the build/i);
  assert.match(blog.html, /href="\/feed\.xml"/i);

  const article = await render("/blog/why-ai-products-fail-after-the-demo");
  assert.equal(article.response.status, 200);
  assert.match(article.html, /Why AI products fail after the impressive demo/i);
  assert.match(article.html, /BlogPosting/i);
});

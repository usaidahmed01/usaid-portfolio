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
  assert.match(html, /usaid-cartoon-hero\.png/i);
  assert.match(html, /Saylani AI Engineering/i);
  assert.doesNotMatch(html, /usaid-body-cutout\.png/i);
  assert.match(html, /href="\/blog"/i);
});

test("keeps the portrait on the homepage and the about page professionally focused", async () => {
  const about = await render("/about");
  assert.equal(about.response.status, 200);
  assert.doesNotMatch(about.html, /usaid-cartoon-hero\.png/i);
  assert.doesNotMatch(about.html, /usaid-body-cutout\.png/i);
  assert.match(about.html, /I’m Usaid Ahmed/i);
  assert.match(about.html, /full intelligence-to-interface stack/i);
  assert.match(about.html, /The work is active, not archived/i);
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

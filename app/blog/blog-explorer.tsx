"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Post = { slug: string; category: string; title: string; description: string; date: string; readingTime: string };

export default function BlogExplorer({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All topics");
  const categories = ["All topics", ...Array.from(new Set(posts.map((post) => post.category)))];
  const filtered = useMemo(() => posts.filter((post) => {
    const matchesCategory = category === "All topics" || post.category === category;
    const haystack = `${post.title} ${post.description} ${post.category}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase().trim());
  }), [category, posts, query]);

  return <div className="blog-explorer">
    <div className="blog-filters"><label><span>Search insights</span><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search RAG, agents, evaluation…" /></label><label><span>Topic</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label></div>
    <div className="blog-results"><p><span>{filtered.length}</span> {filtered.length === 1 ? "article" : "articles"} found</p>{filtered.length === 0 && <button type="button" onClick={() => { setQuery(""); setCategory("All topics"); }}>Clear filters</button>}</div>
    <div className="posts-list">{filtered.map((post, index) => <Link href={`/blog/${post.slug}`} key={post.slug} className="post-row"><span>0{index + 1}</span><div><p>{post.category}</p><h2>{post.title}</h2><small>{post.date} · {post.readingTime}</small></div><span aria-hidden="true">↗</span></Link>)}</div>
    {filtered.length === 0 && <div className="blog-empty"><strong>No notes match that search yet.</strong><p>Try a broader topic or clear the filters to browse every published article.</p></div>}
  </div>;
}

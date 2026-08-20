# Publishing a weekly blog post

The public blog lives at `/blog`. New entries are listed automatically on the blog page, the homepage, the XML sitemap, and the RSS feed.

## Where the posts are stored

Open `app/data/site.ts` and find:

```ts
export const insights = [
```

Add the newest post at the top of that array using this shape:

```ts
{
  slug: "short-lowercase-url",
  category: "AI Product Engineering",
  title: "The exact article title",
  description: "A concise search and social description.",
  date: "August 27, 2026",
  readingTime: "6 min read",
  intro: "The opening idea or argument.",
  sections: [
    {
      heading: "First section heading",
      paragraphs: [
        "First paragraph.",
        "Second paragraph.",
      ],
    },
  ],
},
```

The site automatically creates the article URL at `/blog/short-lowercase-url`.

## Weekly publishing checklist

- Write one clear answer to one real problem.
- Include an honest example, decision, failure, or measurement from your work.
- Use a unique lowercase slug with hyphens.
- Keep the description around 140–160 characters.
- Add two to five useful sections.
- Link the article from LinkedIn after the updated site is deployed.
- Never disclose private client, patient, credential, or unreleased AgentHive information.

If you prefer not to edit code, provide the final article to the portfolio maintainer and ask them to add it to the blog array using this template.

import { defineCollection, z } from "astro:content";

const dateString = z.union([z.string(), z.date()]).transform((value) => {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  return value;
});

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: dateString,
    updatedAt: dateString.optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string(),
    role: z.string(),
    stack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional()
  })
});

export const collections = { posts, projects };

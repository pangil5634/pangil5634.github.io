import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
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

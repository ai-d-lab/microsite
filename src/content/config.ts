import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      draft: z.boolean().optional(),
      author: z.string(),
      showintro: z.boolean().optional(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      heroImage: image().refine((img) => img.width >= 600, {
        message: "Cover image must be at least 600 pixels wide!",
      }),
      heroVideo: z.string().optional(),
      appearance: z.enum(["S", "M", "L"]),
      pinned: z.boolean().optional(),
    }),
});

const team = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    title: z.string(),
    joined: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    left: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    portrait: z.string().optional(),
    draft: z.boolean(),
  }),
});

export const collections = { blog, team };

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		description: z.string(),
		draft: z.boolean().optional(),
		author: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		heroVideo: z.string().optional(),
	}),
});

// same as blog posts, but only newest one is displayed on the top of the page


const features = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		description: z.string(),
		author: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		heroVideo: z.string().optional(),

	}),
});




/*
name: "Aeneas Stankowski"
joined: "Oct 01 2022"
left: ""
portrait: "/aeneas_stankowski.jpg"
draft: false
*/
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

export const collections = { blog, features, team };

// src/content/config.ts
import { z, defineCollection } from 'astro:content';

// Define the collection schema for banners
const bannersCollection = defineCollection({
  schema: ({image}) => z.object({
    title: z.string(),
    image: image(),
    include: z.boolean(),
  }),
});

// Export the collections
export const collections = {
  banners: bannersCollection,
};

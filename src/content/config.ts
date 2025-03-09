import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        readtime: z.number(),
        tags: z.string(),
    })
})

export const collections = { blogs }
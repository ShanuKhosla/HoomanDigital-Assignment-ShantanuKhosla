// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const serviceCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
    })
});

const portfolioCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      images: z.string(),
      desc: z.string(),
    })
});
const newsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      image: z.string(),
      description: z.string(),
    })
});


export const collections = {
  services: serviceCollection,
  portfolios: portfolioCollection,
  latestnews: newsCollection,
};




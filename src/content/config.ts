import { defineCollection, z } from 'astro:content';

const classes = defineCollection({
  type: 'content',
  schema: z.object({
    type: z.enum(['class', 'combo']),
    order: z.number().optional(),
    title: z.string().optional(),
    tag: z.string().optional(),
    schedule: z.string().optional(),
    format: z.string().optional(),
    para1: z.string().optional(),
    para2: z.string().optional(),
    drop_in_price: z.string().optional(),
    monthly_price: z.string().optional(),
    image: z.string().optional(),
    image_position: z.string().optional(),
    enroll_url: z.string().optional(),
    layout: z.enum(['normal', 'reverse']).optional(),
    description: z.string().optional(),
    price: z.string().optional(),
    price_period: z.string().optional(),
    save_text: z.string().optional(),
  }),
});

export const collections = { classes };

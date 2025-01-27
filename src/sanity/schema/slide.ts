import { defineType } from "sanity"
export default defineType({
  name: 'slide',
  type: 'document',
  title: 'Slide',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative Text',
    },
  ],
});
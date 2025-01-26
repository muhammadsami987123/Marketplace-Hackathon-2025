import { defineType, defineField } from 'sanity';

const category = defineType({
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The name of the category (e.g., Dining, Living, Bedroom).',
      validation: (Rule) => Rule.required(), // Optional: Add validation if needed
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'The image for the category.',
      options: {
        hotspot: true, // Enables image cropping
      },
      validation: (Rule) => Rule.required(), // Optional: Add validation if needed
    }),
  ],
});

export default category;
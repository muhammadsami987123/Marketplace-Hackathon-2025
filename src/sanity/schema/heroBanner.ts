// schemas/heroBanner.ts
import { defineType, defineField } from "sanity";

const heroBanner = defineType({
  name: "heroBanner", // Document type name
  title: "Hero Banner", // Display name in Sanity Studio
  type: "document", // Type of schema (document)
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The main title of the hero banner (e.g., 'MODERN').",
      validation: (Rule) => Rule.required(), // Make this field required
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "The subtitle of the hero banner (e.g., 'FURNITURE').",
      validation: (Rule) => Rule.required(), // Make this field required
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A short description of the hero banner content.",
      validation: (Rule) => Rule.required(), // Make this field required
    }),
    defineField({
      name: "contactNumber",
      title: "Contact Number",
      type: "string",
      description: "The contact number displayed on the banner (e.g., '+1234567890').",
      validation: (Rule) => Rule.required(), // Make this field required
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "The main image displayed on the hero banner.",
      options: {
        hotspot: true, // Enable hotspot for responsive images
      },
      validation: (Rule) => Rule.required(), // Make this field required
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "string",
      description: "The discount text displayed on the banner (e.g., '50% OFF').",
    }),
  ],
});

export default heroBanner;
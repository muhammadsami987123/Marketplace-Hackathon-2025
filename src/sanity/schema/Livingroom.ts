import { defineType } from "sanity"

export const Livingroom = defineType({
    name: "LivingRoom",
    title: "Living Room",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title", // Generate slug from the title field
              maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: "price_id",
            title: "Stripe Price ID",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
      
        {
            name:"description",
            type:"text",
            // validation: (rule) => rule.required(),
            title:"Description",
        },
        {
            name: "productImage",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image",
            
        },
        {
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name:"dicountPercentage",
            type:"number",
            title:"Discount Percentage",
        },
        {
            name:"isNew",
            type:"boolean",
            title:"New Badge",
        }
    ]
})
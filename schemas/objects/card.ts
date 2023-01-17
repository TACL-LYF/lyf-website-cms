import { ObjectDefinition } from "sanity"

const schema: ObjectDefinition = {
  name: "card",
  title: "Card",
  description: "Content with a header, description, image, and optional button",
  type: "object",
  fields: [
      {
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
      },
      {
          name: "image",
          title: "Image",
          type: "image",
          validation: (Rule) => Rule.required(),
      },
      {
          name: "description",
          title: "Description",
          type: "portableText",
          validation: (Rule) => Rule.required(),
      },
      {
          name: "button",
          title: "Button",
          description: "Optional button",
          type: "button",
          options: {
            collapsible: true,
            collapsed: true,
          }
      }
  ],
}

export default schema

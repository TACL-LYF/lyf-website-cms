import { ObjectDefinition } from "sanity"

const schema: ObjectDefinition = {
  name: "titleBody",
  title: "Title Body",
  description: "Content with a title and body",
  type: "object",
  fields: [
      {
          name: "title",
          title: "Title",
          type: "string",
      },
      {
          name: "body",
          title: "Body",
          type: "portableText",
      },
  ],
}

export default schema

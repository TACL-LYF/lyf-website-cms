import { ObjectDefinition } from "sanity"

const schema: ObjectDefinition = {
  name: "dropdown",
  title: "Dropdown",
  type: "object",
  fields: [
      {
          name: "dropdownHeader",
          title: "Dropdown Header",
          type: "string",
      },
      {
          name: "dropdownBody",
          title: "Contents of the Dropdown",
          type: "portableText",
      },
  ],
}

export default schema
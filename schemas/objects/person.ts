import { ObjectDefinition } from "sanity"

const schema: ObjectDefinition = {
    name: "person",
    title: "Person",
    type: "object",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "position",
            title: "Position",
            type: "string",
        },
        {
            name: "propic",
            title: "Profile Picture",
            type: "image",
            options: {
              hotspot: true,
            },
        },
        {
            // see https://www.sanity.io/docs/block-type
            name: "description",
            title: "Description",
            type: "portableText",
        },
    ],
}

export default schema

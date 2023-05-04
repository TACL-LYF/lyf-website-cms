import { ObjectDefinition } from "sanity"

const schema: ObjectDefinition = {
    name: "committee",
    title: "Leadership Committee",
    type: "object",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "members",
            title: "Members",
            type: "array",
            of: [
                {
                    type: "person",
                },
            ],
        },
    ],
}

export default schema

import { ObjectDefinition } from "sanity"

// Be sure to update gatsby-node in the website repo with the right typing.
const schema: ObjectDefinition = {
    name: "quote",
    type: "object",
    title: "Quote",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "content",
            title: "Content",
            type: "portableText",
        },
        {
            name: "yearsAttendedCamp",
            title: "Years Attended Camp",
            description:
                "Number of years <name> attended camp (optional)",
            type: "number",
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
    ],
}

export default schema

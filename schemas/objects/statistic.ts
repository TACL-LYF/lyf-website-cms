import { ObjectDefinition } from "sanity"

const schema: ObjectDefinition = {
    name: "statistic",
    title: "Statistic",
    type: "object",
    fields: [
        {
            name: "number",
            title: "Number",
            type: "number",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "decorator",
            title: "Decorator",
            description:
                "The additional symbol following the number such as a % or +",
            type: "string",
        },
        {
            name: "caption",
            title: "Caption",
            type: "string",
        },
    ],
}

export default schema

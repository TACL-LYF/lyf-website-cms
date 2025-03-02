import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "leadershipPage",
    title: "Leadership Page",
    type: "document",
    fields: [
        {
            name: "mainHeader",
            title: "Main Header",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "subHeader",
            title: "Sub Header",
            type: "text",
        },
        {
            name: "leadership",
            title: "Leadership Team",
            type: "reference",
            to: [{ type: "leadership" }],
            validation: (Rule) => Rule.required(),
        },
        {
            name: "upNext",
            title: "Up Next Links",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{type: "pageLinks"}]
                }
            ]
        },
    ],
}

export default schema

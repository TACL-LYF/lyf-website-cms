import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "leadership",
    title: "Leadership Team",
    type: "document",
    fields: [
        {
            name: "boardYear",
            title: "Board Year",
            type: "reference",
            to: [{ type: "campYear" }],
            validation: (Rule) => Rule.required(),
        },
        {
            name: "committees",
            title: "Committees",
            type: "array",
            of: [
                {
                    type: "committee",
                },
            ],
        },
    ],
}

export default schema

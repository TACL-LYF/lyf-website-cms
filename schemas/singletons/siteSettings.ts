import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition =  {
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Site Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "primaryYear",
            title: "Primary Camp Year",
            description: "The default camp year to use for the events and about us pages",
            type: "reference",
            to: [{ type: "campYear" }],
            validation: (Rule) => Rule.required(),
        },
    ],
}

export default schema

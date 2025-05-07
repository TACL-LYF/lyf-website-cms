import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "culturePage",
    title: "Culture Page",
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
            type: "portableText",
        },
        {
            name: "blurb",
            title: "Blurb",
            type: "titleBody",
        },
        {
            name: "pillars",
            title: "Pillars",
            type: "array",
            of: [
                {
                    type: "titleBody"
                }
            ]
        },
        {
            name: "cultureIs",
            title: "Culture Is",
            type: "array",
            of: [
                {
                    type: "titleBody",
                },
            ]
        },
        {
            name: "actuation",
            title: "Actuation",
            type: "array",
            of: [
                {
                    type: "card",
                },
            ]
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

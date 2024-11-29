import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "historyPage",
    title: "History Page",
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
            name: "headerImage",
            title: "Header Image",
            description: "Image accompanying 'History' section",
            type: "image"
        },
        {
            name: "timeline",
            title: "Timeline",
            description: "Text and images to display on the history timeline. Title will be used as the date.",
            type: "array",
            of: [
                {
                    type: "card",
                },
            ],
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

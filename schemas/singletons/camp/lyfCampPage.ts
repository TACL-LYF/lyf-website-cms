import { DocumentDefinition, ObjectDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "lyfCampPage",
    title: "LYF Camp Page",
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
            name: "headerPhotos",
            title: "Header Photos",
            description:
                "The set of photos to display in the header. Be sure to add alt text in the separate media browser!",
            type: "array",
            of: [
                {
                    type: "image",
                },
            ],
        },
        {
            name: "eventsToDisplay",
            title: "Upcoming Events",
            description:
                "Select references to events to display on the camp page.",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "event" }],
                },
            ],
        },
        {
            name: "activities",
            title: "Activities",
            description:
                "Activities shown in the workshops and sing-along section",
            type: "array",
            of: [
                {
                    type: "card",
                },
            ],
        },
        {
            name: "community",
            title: "Community",
            description: "Aspects of community at LYF",
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

import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "getInvolvedPage",
    title: "Get Involved Page",
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
            description:
                "Image to display in the header. Add alt text in media browser.",
            type: "array",
            of: [
                {
                    type: "image",
                },
            ],
        },
        {
            name: "involvement",
            title: "Involvement",
            description: "Cards with ways to get involved with LYF",
            type: "array",
            of: [
                {
                    type: "card",
                },
            ],
        },
        {
            name: "otherQsHeader",
            title: "Other Questions Header",
            type: "text",
        },
        {
            name: "otherQsBody",
            title: "Other Questions Body",
            type: "portableText",
        },
        {
            name: "otherQsLink",
            title: "Other Questions Button",
            type: "button",
        }
    ],
}

export default schema

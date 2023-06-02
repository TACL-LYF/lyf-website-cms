import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "donatePage",
    title: "Donate Page",
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
            type: "image",
        },
        {
            name: "headerButton",
            title: "Header button",
            description: "Button to 'Donate Now'",
            type: "button",
        },
        {
            name: "donationAmtHeader",
            title: "Donation Amount Section Header",
            type: "string",
        },
        {
            name: "donationAmtSubHeader",
            title: "Donation Amount Section SubHeader",
            type: "string",
        },
        {
            name: "donationAmtBody",
            title: "Donation Amount Section Body",
            type: "portableText",
        },
    ],
}

export default schema

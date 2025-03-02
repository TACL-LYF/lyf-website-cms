import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "joinOurTeamPage",
    title: "Join Our Team Page",
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
            description: "Image accompanying 'Join Our Team' section",
            type: "image",
        },
        {
            name: "headerButton",
            title: "Header button",
            description: "Button to 'Apply Now'",
            type: "button",
        },
        {
            name: "volunteerHeader",
            title: "Volunteer Section Header",
            type: "string",
        },
        {
            name: "volunteerSubHeader",
            title: "Volunteer Section SubHeader",
            type: "string",
        },
        {
            name: "volunteerImpact",
            title: "Volunteer Impact",
            description: "Cards shown in the 'Why do we volunteer' section",
            type: "array",
            of: [
                {
                    type: "card",
                },
            ],
        },
        {
            name: "getInvolvedHeader",
            title: "Get Involved Section Header",
            type: "string",
        },
        {
            name: "getInvolvedSubHeader",
            title: "Get Involved Section SubHeader",
            type: "string",
        },
        {
            name: "getInvolved",
            title: "Get Involved",
            description:
                "Cards shown in the 'How can you get involved' section",
            type: "array",
            of: [
                {
                    type: "card",
                },
            ],
        },
        {
            name: "interestForm",
            title: "Interest Form",
            description: "Text attached to interest form submission",
            type: "text",
        },
        {
            name: "interestFormButton",
            title: "Interest Form Button",
            description: "Button to submit interest form",
            type: "button",
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

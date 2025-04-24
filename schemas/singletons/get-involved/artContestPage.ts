import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "artContestPage",
    title: "Art Contest Page",
    type: "document",
    fields: [
        {
            name: "mainHeader",
            title: "Main Header",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "headerImage",
            title: "Header Image",
            description: "Image shown at the top of the page",
            type: "image",
        },
        {
            name: "intro",
            title: "Introduction",
            type: "portableText",
        },
        {
            name: "timeline",
            title: "Timeline Image",
            description:
                "Text and images to display on the timeline. Title will be used as the date.",
            type: "image",
        },
        {
            name: "sections",
            title: "Sections",
            description: "Various sections of the art contest to display",
            type: "array",
            of: [
                {
                    type: "titleBody",
                },
            ],
        },
        {
            name: "submissionFormLink",
            title: "Submission Form Link",
            description: "Link to the submission form",
            type: "url",
        },
        {
            name: "faq",
            title: "FAQ Section",
            type: "array",
            of: [
                {
                    // See faqPage.ts
                    type: "question",
                },
            ],
        },
    ],
}

export default schema

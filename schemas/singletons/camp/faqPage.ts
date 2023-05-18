import { DocumentDefinition, ObjectDefinition } from "sanity"

const question: ObjectDefinition = {
    name: "question",
    title: "Question",
    type: "object",
    fields: [
        {
            name: "questionTitle",
            title: "Question Title",
            type: "string",
        },
        {
            name: "questionAnswer",
            title: "Question Answer",
            type: "portableText",
        },
    ],
}

const faqSection: ObjectDefinition = {
    name: "faqSection",
    title: "FAQ Section",
    type: "object",
    fields: [
        {
            name: "header",
            title: "Section Header",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "questions",
            title: "Questions",
            type: "array",
            of: [
                {
                    type: "question",
                },
            ],
        },
    ],
}

const schema: DocumentDefinition = {
    name: "faqPage",
    title: "FAQ Page",
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
            name: "sections",
            title: "Sections",
            description: "Each section is composed of header and multiple questions",
            type: "array",
            of: [
                {
                    type: "faqSection",
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
export { faqSection, question }

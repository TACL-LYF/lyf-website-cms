import { DocumentDefinition, ObjectDefinition } from "sanity"

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
            type: "array",
            of: [
                {
                    type: "faqSection",
                },
            ],
        },
    ],
}

export default schema
export { faqSection }

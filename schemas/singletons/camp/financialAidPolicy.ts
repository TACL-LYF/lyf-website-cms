import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "financialAidPolicyPage",
    title: "Financial Aid Policy Page",
    type: "document",
    fields: [
        {
            name: "mainHeader",
            title: "Main Header",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "mainContent",
            title: "Main Content",
            type: "portableText",
        },
        {
            name: "pdfDocument",
            title: "PDF Document",
            type: "file",
        },
    ],
}

export default schema

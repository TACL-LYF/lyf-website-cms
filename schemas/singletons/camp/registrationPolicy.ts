import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "registrationPolicyPage",
    title: "Registration Policy Page",
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
    ],
}

export default schema

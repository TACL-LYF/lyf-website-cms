import { DocumentDefinition } from "sanity";

const schema: DocumentDefinition = {
    name: "pageLinks",
    title: "Page Links",
    type: "document",
    fields: [
        {
            name: "header",
            title: "Header",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "link",
            title: "Link",
            type: "reference",
            to: [
                {type: "culturePage"},
                {type: "historyPage"},
                {type: "leadershipPage"},
                {type: "faqPage"},
                {type: "lyfCampPage"},
                {type: "cookbookPage"},
                {type: "donatePage"},
                {type: "joinOurTeamPage"},
            ],
            validation: (Rule) => Rule.required(),
        },
    ]
}

export default schema
import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "cookbookPage",
    title: "Cookbook Page",
    type: "document",
    fields: [
        {
            name: "productReference",
            title: "Cookbook Document to Display",
            description:
                "A reference to the main cookbook version we should display on the cookbook page. Every product will still exist in our database, and we can choose to highlight different cookbooks.",
            type: "reference",
            to: [{ type: "product" }],
            validation: (Rule) => Rule.required(),
        },
    ],
}

export default schema

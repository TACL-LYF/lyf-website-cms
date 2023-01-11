import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "person",
    title: "Person",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "boardYear",
            title: "Board Year",
            type: "reference",
            to: [{ type: "campYear" }],
            validation: (Rule) => Rule.required(),
        },
        {
            name: "committee",
            title: "Committee/Org Level",
            type: "string",
        },
        {
            name: "position",
            title: "Position",
            type: "string",
        },
        {
            name: "propic",
            title: "Profile Picture",
            type: "image",
        },
        {
            // see https://www.sanity.io/docs/block-type
            name: "description",
            title: "Description",
            type: "portableText",
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ],
}

export default schema

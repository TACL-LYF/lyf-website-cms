import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Product Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "subheader",
            title: "Subheader",
            type: "string",
        },
        {
            name: "edition",
            title: "Edition",
            type: "string",
        },
        {
            name: "price",
            title: "Price",
            description: "Price in USD",
            type: "number",
        },
        {
            name: "paymentLinkButton",
            title: "Payment Link Button",
            type: "button",
        },
        {
            name: "description",
            title: "Description",
            type: "portableText",
        },
        {
            name: "additionalDetails",
            title: "Additional Details Sections",
            type: "array",
            of: [
                {
                    type: "dropdown",
                },
            ],
        },
        {
            name: "photos",
            title: "Photos",
            type: "array",
            of: [
                {
                    type: "image",
                },
            ],
        },
        {
            name: "quotes",
            title: "Quotes",
            type: "array",
            of: [
                {
                    type: "quote",
                },
            ],
        },
    ],
}

export default schema

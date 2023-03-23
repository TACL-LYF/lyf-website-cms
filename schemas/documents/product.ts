import { DocumentDefinition } from "sanity"

// async function slugifyProduct

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
            name: "slug",
            title: "Slug",
            type: "slug",
            description:
                "This is the unique ID we'll use for the URL of the product. " +
                "You can either generate it from the name and edition or input your own one.",
            options: {
                source: (doc, _context) => `${doc.name} ${doc.edition ?? ""}`,
            },
            validation: (Rule) => Rule.required(),
        },

        {
            name: "price",
            title: "Price",
            description: "Price in USD",
            type: "number",
        },
        {
          name: "isDonation",
          title: "Is Donation?",
          description: "Whether we should mark this product as an appreciation gift for a donation.",
          type: "boolean",
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

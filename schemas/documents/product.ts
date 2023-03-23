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
      validation: (Rule) => Rule.required()
    },
    {
      name: "subheader",
      title: "Subheader",
      type: "string"
    },
    {
      name: "edition",
      title: "Edition",
      type: "string"
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
  ],
}
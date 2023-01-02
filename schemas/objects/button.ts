import { ObjectDefinition } from "sanity"

const schema: ObjectDefinition = {
    name: "button",
    type: "object",
    title: "Button",
    fields: [
        {
            name: "text",
            title: "Text",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "link",
            title: "Link",
            type: "string",
        },
        {
            name: "variant",
            title: "Variant",
            description:
                "What the button should look like: https://mui.com/material-ui/react-button",
            type: "string",
            initialValue: "contained",
            options: {
                list: ["contained", "outlined", "text", "string"],
            },
            validation: (Rule) => Rule.required(),
        },
    ],
}

export default schema

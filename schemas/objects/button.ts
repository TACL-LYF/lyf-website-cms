import { ObjectDefinition } from "sanity"

// Be sure to update gatsby-node in the website repo with the right typing.
const schema: ObjectDefinition = {
    name: "button",
    type: "object",
    title: "Button",
    fields: [
        {
            name: "text",
            title: "Text",
            type: "string",
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
                list: ["contained", "outlined", "text"],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "disabled",
            title: "Disabled",
            description: "Whether the button should be disabled and not click-able",
            type: "boolean",
            initialValue: false,
        },
        {
            name: "hidden",
            title: "Hide Button",
            description: "Whether the button should be hidden altogether from the page",
            type: "boolean",
            initialValue: false,
        }
    ],
}

export default schema

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
            name: "level",
            title: "Level",
            type: "number",
            options: {
                list: [
                    {value: 0, title: "Executive"},
                    {value: 1, title: "Director"},
                    {value: 2, title: "Committee Member"},
                    {value: 3, title: "Program Director"},
                    {value: 4, title: "Counselor"},
                    {value: 5, title: "Synthesis"},
                ],
            },
            validation: (Rule) => Rule.required() && Rule.greaterThan(0) && Rule.lessThan(5),
        },
        {
            name: "position",
            title: "Position",
            type: "string",
            hidden: ({ parent }) => parent.level != 0
        },
        {
            name: "committee",
            title: "Committee",
            type: "string",
            hidden: ({ parent }) => parent.level != 1 && parent.level != 2
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

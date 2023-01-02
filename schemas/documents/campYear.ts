import { DocumentDefinition } from "sanity"
// import ComputedField from "sanity-plugin-computed-field"

const schema: DocumentDefinition =  {
    name: "campYear",
    title: "Camp Year",
    type: "document",
    fields: [
        {
            name: "year",
            title: "Camp Year",
            type: "number",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "boardYear",
            title: "Board Year",
            type: "string",
            description: "Format: [year - 1]-[year]",
            // inputComponent: ComputedField,
            // See https://github.com/wildseansy/sanity-plugin-computed-field for explanation of how this works.
            // options: {
            //     editable: false,
            //     buttonText: "Generate Board Year",
            //     documentQuerySelection: `
            //         year
            //     `,
            //     reduceQueryResult: (queryResult: {
            //         year: number
            //     }) => `${queryResult.year - 1}-${queryResult.year}`
            // },
            validation: (Rule) => Rule.required() && Rule.regex(/\d{4}-\d{4}/),
        },
    ],
}

export default schema

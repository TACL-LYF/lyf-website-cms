import ComputedField from 'sanity-plugin-computed-field'

export default {
    name: 'campYear',
    title: 'Camp Year',
    type: 'document',
    fields: [
        {
            name: 'year',
            title: 'Camp Year',
            type: 'number',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'boardYear',
            title: 'Board Year',
            type: 'string',
            inputComponent: ComputedField,
            // See https://github.com/wildseansy/sanity-plugin-computed-field for explanation of how this works.
            options: {
                editable: false,
                buttonText: "Generate Board Year",
                documentQuerySelection: `
                    year
                `,
                reduceQueryResult: (queryResult: {
                    year: number
                }) => `${queryResult.year - 1}-${queryResult.year}`
            },
            validation: (Rule) => Rule.required(),
        }
    ],
}
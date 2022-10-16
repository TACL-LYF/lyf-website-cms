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
            validation: (Rule) =>
                Rule.required()
                    .regex(/\d{4}-\d{4}/, {
                        name: "board year"
                    })
                    .error("Years should be in the format XXXX-XXXX"),
        },
        {
            name: 'boardYear',
            title: 'Board Year',
            type: 'string',
            inputComponent: ComputedField,
            options: {
                editable: false,
                buttonText: "Generate Board Year",
                documentQuerySelection: `
                    year
                `,
                reduceQueryResult: (queryResult: {
                    year: number
                }) => `${queryResult.year - 1}-${queryResult.year}`
            }
        }
    ],
}
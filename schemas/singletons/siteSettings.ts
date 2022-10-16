export default {
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Site Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "primaryBoardYear",
            title: "Primary Board Year",
            description: "The default board year to use for the events and board pages",
            type: "reference",
            to: [{ type: "boardYear" }],
            validation: (Rule) => Rule.required(),
        },
    ],
}

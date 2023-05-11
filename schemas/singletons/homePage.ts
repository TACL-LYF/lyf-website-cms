import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
    name: "homePage",
    title: "Home Page",
    type: "document",
    fields: [
        {
            name: "mainHeader",
            title: "Main Header",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "subHeader",
            title: "Sub Header",
            type: "text",
        },
        {
            name: "subHeaderButton",
            title: "Sub Header Button",
            type: "button",
        },
        {
            name: "headerPhotos",
            title: "Header Photos",
            description:
                "The set of photos to display in the header. Be sure to add alt text in the separate media browser! We currently assume there are 6 photos total.",
            type: "array",
            options: {
                length: 6,
            },
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true, // Allows us to select what parts of the image should be cropped
                    },
                },
            ],
        },
        {
            name: "aboutHeader",
            title: "About Section Header",
            type: "text",
        },
        {
            name: "aboutBody",
            title: "About Section Body",
            type: "portableText",
        },
        {
            name: "campDescription",
            title: "Camp Description",
            description: "Body that goes under the 'What is LYF Camp?' section",
            type: "portableText",
        },
        {
            name: "campVideo",
            title: "Camp Video YouTube URL",
            type: "url",
        },
        {
            name: "goals",
            title: "Goals of LYF Camp",
            type: "array",
            options: {
                length: 4,
            },
            of: [
                {
                    type: "string",
                }
            ]
        },
        {
            name: "stats",
            title: "Statistics",
            type: "array",
            of: [
                {
                    type: "statistic",
                }
            ]
        },
        {
            name: "quotes",
            title: "Camp Testimonials",
            type: "array",
            of: [
                {
                    type: "quote",
                }
            ]
        },
        {
            name: "ctaHeader",
            title: "CTA Section Header",
            type: "text",
        },
        {
            name: "ctaBody",
            title: "CTA Section Body",
            type: "portableText",
        },
        {
            name: "ctaLink",
            title: "CTA Section Button",
            type: "button",
        }
    ],
}

export default schema

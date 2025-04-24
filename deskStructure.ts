// Created following https://youtu.be/YMX2TX3vIAc
import { StructureBuilder } from "sanity/desk"
import { HomeIcon, CogIcon, DocumentIcon } from "@sanity/icons"
// Find more icons at https://icons.sanity.build/

const sitePages = [
    {
        section: "About Us",
        pages: [
            { title: "Leadership", schema: "leadershipPage" },
            { title: "Cultural Stance", schema: "culturePage" },
            { title: "History of LYF", schema: "historyPage" },
        ],
    },
    {
        section: "Camp",
        pages: [
            { title: "What is LYF Camp?", schema: "lyfCampPage" },
            { title: "FAQs", schema: "faqPage" },
            { title: "Registration Policy", schema: "registrationPolicyPage" },
            { title: "Financial Aid Policy", schema: "financialAidPolicyPage" },
        ],
    },
    {
        section: "Get Involved",
        pages: [
            { title: "Join Our Team", schema: "joinOurTeamPage" },
            { title: "Donate", schema: "donatePage" },
            { title: "Cookbook", schema: "cookbookPage" },
            { title: "Get Involved", schema: "getInvolvedPage" },
            { title: "Art Contest", schema: "artContestPage" },
        ],
    },
]

export default (S: StructureBuilder) =>
    S.list()
        .title("Content")
        .items([
            S.listItem().title("Site Settings").icon(CogIcon).child(
                // Display the editor
                S.editor()
                    .id("siteSettings")
                    .schemaType("siteSettings")
                    // Create a document with the ID siteSettings
                    .documentId("siteSettings"),
            ),
            S.divider(),
            S.listItem()
                .title("Site Pages")
                .child(
                    S.list()
                        .title("Site Pages")
                        .items([
                            S.listItem()
                                .title("Home Page")
                                .icon(HomeIcon)
                                .child(
                                    S.editor()
                                        .id("homePage")
                                        .schemaType("homePage")
                                        .documentId("homePage"),
                                ),
                            // Show the site map as pages to be edited
                            ...sitePages.map(({ section, pages }) =>
                                S.listItem()
                                    .title(section)
                                    .child(
                                        S.list()
                                            .title(section)
                                            .items(
                                                // Display an editor for each of the pages
                                                pages.map(
                                                    ({ title, schema }) => {
                                                        return S.listItem()
                                                            .title(title)
                                                            .icon(DocumentIcon)
                                                            .child(
                                                                S.editor()
                                                                    .id(schema)
                                                                    .schemaType(
                                                                        schema,
                                                                    )
                                                                    .documentId(
                                                                        schema,
                                                                    ),
                                                            )
                                                    },
                                                ),
                                            ),
                                    ),
                            ),
                        ]),
                ),
            S.divider(),
            S.listItem()
                .title("Camp Years")
                .child(S.documentTypeList("campYear")),
            S.divider(),
            // Filtering people by camp year
            S.listItem()
                .title("People by Camp Year")
                .child(
                    S.documentTypeList("campYear")
                        .title("People by Camp Year")
                        .child((campYear) =>
                            S.documentList()
                                .title("People")
                                .filter(
                                    // Hmm this isn't working how I want it to right now. I think it has to do with the boardYear being different
                                    // but honestly I'm not sure.
                                    "_type == 'person' && $campYear == campYear._ref",
                                )
                                .params({ campYear }),
                        ),
                ),
            // The rest of the documents
            ...S.documentTypeListItems().filter(
                (item) =>
                    ![
                        "siteSettings",
                        "campYear",
                        "homePage",
                        // Filter out all of the schemas for the site pages
                        ...sitePages.flatMap(({ pages }) =>
                            pages.map(({ schema }) => schema),
                        ),
                    ].includes(item.getId()),
            ),
        ])

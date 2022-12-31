// Created following https://youtu.be/YMX2TX3vIAc
import { StructureBuilder } from "sanity/desk"
import { Home, Settings } from "@mui/icons-material"

export default (S: StructureBuilder) =>
    S.list()
        .title("Content")
        .items([
            S.listItem().title("Site Settings").icon(Settings).child(
                // Display the editor
                S.editor()
                    .id("siteSettings")
                    .schemaType("siteSettings")
                    // Create a document with the ID siteSettings
                    .documentId("siteSettings")
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
                                .icon(Home)
                                .child(
                                    S.editor()
                                        .id("homePage")
                                        .schemaType("homePage")
                                        .documentId("homePage")
                                ),
                        ])
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
                                    "_type == 'person' && $campYear == campYear._ref"
                                )
                                .params({ campYear })
                        )
                ),
            // The rest of the documents
            ...S.documentTypeListItems().filter(
                (item) =>
                    !["siteSettings", "campYear", "homePage"].includes(
                        item.getId()
                    )
            ),
        ])

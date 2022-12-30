import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import schemaTypes from "./schemas/schema"
import deskStructure from "./deskStructure"

export default defineConfig({
    name: "lyf-website-cms",
    title: "LYF Website CMS",
    projectId: "68eu2oev",
    dataset: "production",
    plugins: [
        deskTool({
            structure: deskStructure,
        }),
    ],
    schema: {
        types: schemaTypes,
    },
})

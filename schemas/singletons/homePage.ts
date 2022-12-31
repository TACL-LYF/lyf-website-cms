export default {
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
        name: "headerPhotos",
        title: "Header Photos",
        description: "The set of photos to display in the header. Be sure to add alt text in the separate media browser!",
        type: "array",
        of: [
            {
                type: "image",
                options: {
                    hotspot: true, // Allows us to select what parts of the image should be cropped
                }
            }
        ],
        layout: "grid",
      }
  ],
}

import { DocumentDefinition } from "sanity"

const schema: DocumentDefinition = {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "startDateTime",
      title: "Start Date and Time",
      type: "datetime",
      description: "The date and time of the event. If no time should be shown on the website, put 00:00. Assume the Pacific timezone.",
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: "MMM D, YYYY",
        timeFormat: "h:mm A"
      }
    },
    {
      name: "endDateTime",
      title: "End Date and Time",
      type: "datetime",
      description: "Optional end time",
      options: {
        dateFormat: "MMM D, YYYY",
        timeFormat: "h:mm A"
      }
    },
    {
      name: "eventImage",
      title: "Image",
      type: "image",
    },
    {
      name: "location",
      title: "Location",
      type: "text",
    },
    {
      name: "description",
      title: "Description",
      type: "portableText",
    },
    {
      name: "button",
      title: "Button",
      description: "Optional button for any actions.",
      type: "button",
    }
  ]
}

export default schema

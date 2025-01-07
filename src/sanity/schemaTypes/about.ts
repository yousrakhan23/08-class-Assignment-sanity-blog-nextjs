import { defineField, defineType } from "sanity";
export const About = defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
              maxLength: 200,
            },
          }),
          defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
              hotspot: true,
            },
          }),
       
    ],
});
import {defineField, defineType} from 'sanity'

const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL path for this page',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      description: 'Content sections that make up this page',
      of: [
        {
          type: 'heroSection',
        },
        {
          type: 'searchSection',
        },
        // Additional section types can be added here in the future
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare: ({title, slug}) => ({
      title,
      subtitle: `/${slug || 'no-slug'}`,
    }),
  },
})

export default page

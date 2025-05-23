import {defineField, defineType} from 'sanity'

const internalLink = defineType({
  name: 'internalLink',
  title: 'Internal Link',
  type: 'object',
  fields: [
    defineField({
      name: 'reference',
      title: 'Page Reference',
      type: 'reference',
      to: [
        {type: 'page'},
        // Add other document types you want to link to
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Link Title',
      type: 'string',
      description: 'Override the default title from the referenced page',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      pageTitle: 'reference.title',
      pageSlug: 'reference.slug.current',
    },
    prepare: ({title, pageTitle, pageSlug}) => ({
      title: title || pageTitle || 'Untitled Page',
      subtitle: pageSlug ? `/${pageSlug}` : 'No slug',
    }),
  },
})

export default internalLink

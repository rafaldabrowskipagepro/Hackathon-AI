import {defineField, defineType} from 'sanity'

const externalUrl = defineType({
  name: 'externalUrl',
  title: 'External URL',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Enter a full URL including http:// or https://',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      description: 'Should this link open in a new tab/window?',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      url: 'url',
      openInNewTab: 'openInNewTab',
    },
    prepare: ({url, openInNewTab}) => ({
      title: url || 'External Link',
      subtitle: openInNewTab ? 'Opens in new tab' : 'Opens in same tab',
    }),
  },
})

export default externalUrl

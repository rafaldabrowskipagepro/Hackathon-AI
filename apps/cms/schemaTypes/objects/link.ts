import {defineField, defineType} from 'sanity'

const link = defineType({
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Internal',
            value: 'internal',
          },
          {
            title: 'External',
            value: 'external',
          },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      title: 'Resource',
      name: 'resource',
      type: 'internalLink',
      hidden: ({parent}) => !parent || parent.type !== 'internal',
    }),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'externalUrl',
      hidden: ({parent}) => !parent || parent.type !== 'external',
    }),
  ],
  preview: {
    select: {
      type: 'type',
      resource: 'resource.title',
      url: 'url',
    },
    prepare: ({type, resource, url}) => {
      if (type === 'internal') {
        return {
          title: 'Internal Link',
          subtitle: resource,
        }
      }

      if (type === 'external') {
        return {
          title: 'External Link',
          subtitle: url,
        }
      }

      return {
        title: 'Link',
      }
    },
  },
})

export default link

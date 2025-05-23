import {defineField} from 'sanity'

export default {
  name: 'customImage',
  type: 'image',
  fields: [
    defineField({
      title: 'Caption',
      name: 'caption',
      type: 'string',
    }),
    defineField({
      title: 'Alternative text',
      name: 'alt',
      type: 'string',
      description: 'Important for SEO and accessibility',
    }),
  ],
  preview: {
    select: {
      subtitle: 'alt',
      media: 'asset',
      caption: 'caption',
    },
    prepare: ({subtitle = '', media = undefined, caption = ''}) => ({
      title: 'Image',
      subtitle: `${caption || subtitle}`,
      media,
    }),
  },
}

import {defineField, defineType} from 'sanity'

const heroSection = defineType({
  title: 'Hero Section',
  name: 'heroSection',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Main headline for the hero section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Supporting text that appears below the title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Call to Action',
      name: 'cta',
      type: 'object',
      fields: [
        defineField({
          title: 'Button Text',
          name: 'text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Link',
          name: 'link',
          type: 'link',
        }),
      ],
    }),
    defineField({
      title: 'Hero Image',
      name: 'image',
      type: 'customImage',
      description: 'Main visual element for the hero section',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
    prepare: ({title, subtitle, media}) => ({
      title: title || 'Hero Section',
      subtitle: subtitle || 'No description',
      media,
    }),
  },
})

export default heroSection

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteHeader',
  title: 'Site Header',
  type: 'document',
  initialValue: () => ({
    _id: 'siteHeader',
    _type: 'siteHeader',
  }),
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'customImage',
      description: 'Upload your site logo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Link Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'link',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              linkType: 'link.type',
              url: 'link.url',
              resource: 'link.resource.title',
            },
            prepare: ({title, linkType, url, resource}) => ({
              title: title || 'Navigation Link',
              subtitle: linkType === 'internal' ? resource : url,
            }),
          },
        },
      ],
      description: 'Add navigation links for the header menu',
    }),
    defineField({
      name: 'ctaButton',
      title: 'Try for Free Button',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Button Label',
          type: 'string',
          initialValue: 'TRY FOR FREE',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'link',
          title: 'Button Link',
          type: 'link',
          validation: (Rule) => Rule.required(),
        }),
      ],
      description: 'Configure the call-to-action button',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Site Header',
      subtitle: 'Header configuration',
    }),
  },
})

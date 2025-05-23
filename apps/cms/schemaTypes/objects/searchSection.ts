import {defineField, defineType} from 'sanity'

const searchSection = defineType({
  title: 'Search Section',
  name: 'searchSection',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Main title for the search section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Search Placeholder',
      name: 'searchPlaceholder',
      type: 'string',
      description: 'Placeholder text for the search input',
      initialValue: 'Search by institution or jurisdiction...',
    }),
    defineField({
      title: 'Banks List',
      name: 'banks',
      type: 'array',
      description: 'List of available banks for the select dropdown',
      of: [
        {
          type: 'string',
          title: 'Bank Name',
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      banksCount: 'banks',
    },
    prepare: ({title, banksCount}) => ({
      title: title || 'Search Section',
      subtitle: `${banksCount?.length || 0} banks available`,
    }),
  },
})

export default searchSection

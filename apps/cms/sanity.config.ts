import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Vite environment variables (import.meta.env)
const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID || 'jhas5awc'
const dataset = import.meta.env.SANITY_STUDIO_DATASET || 'production'
const apiVersion = import.meta.env.SANITY_STUDIO_API_VERSION || '2024-01-01'

// Validate required environment variables
if (!projectId) {
  throw new Error('Missing SANITY_STUDIO_PROJECT_ID environment variable')
}
if (!dataset) {
  throw new Error('Missing SANITY_STUDIO_DATASET environment variable')
}

export default defineConfig({
  name: 'default',
  title: 'Hackathon CMS',

  projectId,
  dataset,
  apiVersion,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

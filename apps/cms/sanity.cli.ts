import {defineCliConfig} from 'sanity/cli'

// Vite environment variables
const projectId = import.meta.env?.SANITY_STUDIO_PROJECT_ID || 'jhas5awc'
const dataset = import.meta.env?.SANITY_STUDIO_DATASET || 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})

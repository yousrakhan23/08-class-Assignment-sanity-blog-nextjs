import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "ccz5h6n6",
  dataset: "production",
  apiVersion: "2025-01-05",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

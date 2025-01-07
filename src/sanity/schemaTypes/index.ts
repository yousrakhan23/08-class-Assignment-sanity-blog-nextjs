import { type SchemaTypeDefinition } from 'sanity'
import { Blog } from './blog'
import { About } from './about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ Blog, About],
}

import { type SchemaTypeDefinition } from 'sanity'
import { Blog } from './blog'
import { About } from './about'
import { Contact } from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ Blog, About, Contact],
}

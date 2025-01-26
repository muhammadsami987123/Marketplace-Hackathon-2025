import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../schema/product'
import category from '../schema/category'
import heroBanner from '../schema/heroBanner'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , category , heroBanner],
}

import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../schema/product'
import category from '../schema/category'
import heroBanner from '../schema/heroBanner'
import slide from '../schema/slide'
import blog from '../schema/blog'
import { Livingroom } from '../schema/Livingroom'
import { Bedroom } from '../schema/Bedroom'
import { Diningroom } from '../schema/diningroom'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , category , heroBanner , slide , blog , Livingroom , Bedroom , Diningroom ],
}

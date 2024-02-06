import { MEDIA, MEDIA_FIELDS } from "./media";

export const Sizes = `sizes{
    id
    name
    price
}`
export const ExtraIngredientPrices = `extraIngredientPrices{
    id
    name
    price
}`

export const Items = `items{
    id
    name
   image{
    ${MEDIA_FIELDS}
   }
   description
   base_price
   ${Sizes}
   ${ExtraIngredientPrices}
}
`

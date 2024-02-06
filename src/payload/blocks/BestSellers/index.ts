import { Block } from "payload/types";
import richText from "../../fields/richText";



export const BestSellers: Block = {
    slug: 'bestSellers',
    fields: [
        richText({
            name: 'introContent',
            label: 'Intro Content',
        }),
        {
            name: 'items',
            label: 'Items To Show',
            type: 'relationship',
            relationTo: 'menuItems',
            hasMany: true
        }
    ],
}
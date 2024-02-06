import { Block } from "payload/types";



export const SliderBlock: Block = {
    slug: 'slideItems',
    fields: [
        {
            name:'title',
            type:'text'
        },
        {
            name: 'items',
            label: 'Items To Show',
            type: 'relationship',
            relationTo: 'menuItems',
            hasMany: true
        }
    ],
}
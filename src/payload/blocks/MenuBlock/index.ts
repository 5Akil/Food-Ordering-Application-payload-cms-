

import type { Block } from 'payload/types'


export const MenuBlock: Block = {
    slug: 'menuBlock',
   
    fields: [
        {
            name: 'menuItems',
            label:'category wise data',
            type: 'array',
            fields: [
                {
                    type: 'relationship',
                    name: 'category',
                    relationTo: 'categories',
                },
                {
                    name: 'items',
                    type: 'relationship',
                    relationTo: 'menuItems',
                    hasMany: true,
                },
            ]
        }


    ],

}


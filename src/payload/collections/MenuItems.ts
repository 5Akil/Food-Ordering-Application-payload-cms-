import type { CollectionConfig } from 'payload/types'

const MenuItems: CollectionConfig = {
    slug: 'menuItems',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'slug'],
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,

        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'categories',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
        },
        {
            name: 'base_price',
            type: 'number',
        },
        {
            name: 'sizes',
            type: 'array',
            minRows: 1,
            maxRows: 3,
            fields: [
                {
                    name: 'name',
                    type: 'text'
                },
                {
                    name: 'price',
                    type: 'number'
                }
            ]

        },
        {
            name: 'extraIngredientPrices',
            type: 'array',
            minRows: 1,
            maxRows: 3,
            fields: [
                {
                    name: 'name',
                    type: 'text'
                },
                {
                    name: 'price',
                    type: 'number'
                }
            ]

        }

    ],
}

export default MenuItems

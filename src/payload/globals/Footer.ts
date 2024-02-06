import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'
import { Content } from '../blocks/Content'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),

      ],
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [Content],
    },
  ],
}

import { Items } from './Item'
import { CATEGORIES } from './categories'
import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const CALL_TO_ACTION = `
...on Cta {
  title
  blockType
  invertBackground
  richText
  links {
    link ${LINK_FIELDS()}
  }
}
`

export const CONTENT = `
...on Content {
  blockType
  invertBackground
  columns {
    size
    richText
    enableLink
    link ${LINK_FIELDS()}
  }
}
`

export const MEDIA_BLOCK = `
...on MediaBlock {
  blockType
  invertBackground
  position
  ${MEDIA}
}
`

export const ARCHIVE_BLOCK = `
...on Archive {
  blockType
  introContent
  populateBy
  relationTo
  ${CATEGORIES} 
  limit
  selectedDocs {
    relationTo
    value {
      ...on Product {
        id
        slug
        title
        priceJSON
        ${META}
      }
    }
  }
  populatedDocs {
    relationTo
    value {
      ...on Product {
        id
        slug
        title
        priceJSON
        ${CATEGORIES}
        ${META}
      }
    }
  }
  populatedDocsTotal
}
`


export const MENU_BLOCK = `
...on MenuBlock {
  id
  blockType
  blockType 
  menuItems{
    category{
      id
      title
    }
    ${Items}
  }
}
`

export const BEST_SELLERS = `
...on BestSellers{
  introContent 
  id
  blockName
  blockType
  ${Items}
}

`



export const SLIDER_BLOCK=`
...on SlideItems{
  id
  title
  blockName
  blockType
  ${Items}
}`
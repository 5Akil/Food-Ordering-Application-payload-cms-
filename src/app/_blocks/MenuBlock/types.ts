import type { Page } from '../../../payload/payload-types'



export type MenuBlockProps = Extract<Page['layout'][0], { blockType: 'menuBlock' }>

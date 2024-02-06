import type { Page } from '../../../payload/payload-types'


export type bestSellerProps = Extract<Page['layout'][0], { blockType: 'bestSellers' }>

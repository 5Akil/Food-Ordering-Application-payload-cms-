import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'
import { VerticalPadding } from '../../_components/VerticalPadding'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'cta' }>

export const CallToActionBlock: React.FC<
  Props & {
    id?: string
  }
> = ({ links, title, richText, invertBackground }) => {
  return (
    <Gutter>
      <div className={classes.wrap} id='about'>
        <div className={classes.content}>
          <h3 className={classes.heading}>{title}</h3>
          <RichText className={classes.richText} content={richText} />
        </div>
        <div className={classes.linkGroup}>
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} {...link} invert={invertBackground} />
          })}
        </div>
      </div>
    </Gutter>
  )
}

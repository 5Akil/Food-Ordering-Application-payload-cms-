import React from 'react'

import { Gutter } from '../../_components/Gutter'
import classes from './index.module.scss'
import { Page } from '../../../payload/payload-types'
import MenuItemCard from '../../_components/MenuItemCard'

type Props = Extract<Page['layout'][0], { blockType: 'menuBlock' }>
export const MenuBlock: React.FC<Props> = props => {

  const { menuItems } = props
  return (
    <>
      {
        Array.isArray(menuItems) && menuItems.length !== 0 && menuItems.map((data) => {
          return (
            <>
              <Gutter >
                <p className={classes.banner}>{data.category.title}</p>
                <div className={classes.grid}>
                  {data.items.map((item) => {
                    return <>
                      <MenuItemCard item={item} />
                    </>
                  })}
                </div>
              </Gutter>
            </>
          )
        })
      }
    </>
  )
}

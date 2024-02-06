import React from "react";
import { Page } from "../../../payload/payload-types"
import { Gutter } from "../../_components/Gutter"
import SliderItems from "../../_components/SliderItems";
import MenuItemCard from "../../_components/MenuItemCard";
import classes from './index.module.scss'

export type Props = Extract<Page['layout'][0], { blockType: 'slideItems' }>
export const SliderBlock: React.FC<Props> = props => {
  const { items, title } = props
  return (
    <>
      <Gutter>
        <div className={classes.container}>
          <div className={classes.heading}>
            {title}
          </div>
          <SliderItems items={items} />
        </div>
      </Gutter>
    </>
  )
}

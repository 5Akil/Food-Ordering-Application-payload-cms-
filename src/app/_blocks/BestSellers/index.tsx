import { Gutter } from '../../_components/Gutter'
import MenuItemCard from '../../_components/MenuItemCard'
import RichText from '../../_components/RichText'
import classes from './index.module.scss'
import { bestSellerProps } from './types'

export const BestSellers: React.FC<bestSellerProps> = props => {
  const { introContent, id, items: bestSellerItems } = props
  return (
    <>
      <div id={`block-${id}`} className={classes.container}>
        {introContent && (
          <Gutter>
            <RichText content={introContent} className={classes.banner} />
          </Gutter>
        )}
        <Gutter>
          <div className={classes.grid}>
            {Array.isArray(bestSellerItems) && bestSellerItems.length !== 0 && bestSellerItems.map((item) => {
              return <>
                <MenuItemCard item={item} />
              </>
            })}
          </div>
        </Gutter>
      </div>
    </>
  )
}

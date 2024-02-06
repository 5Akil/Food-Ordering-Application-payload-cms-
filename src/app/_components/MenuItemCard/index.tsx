
'use client'
import React, { useEffect, useState } from 'react'
import { menuItem } from '../../../payload/payload-types'
import { Gutter } from '../Gutter'
import classes from "./index.module.scss"
import { Media } from '../Media'
import { useCart } from '../../_providers/Cart'

export const MenuItemCard: React.FC<{
  item: menuItem
}> = props => {
  const { item } = props
  const {addToCart} = useCart()
  const [
    selectedSize, setSelectedSize
  ] = useState(item.sizes?.[0] || null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [showPopup, setShowPopup] = useState(false);


  console.log(selectedExtras ,'Selected');
  
  
  
  
  async function handleAddToCartButtonClick() {
    
    const hasOptions = item.sizes.length > 0 || item.extraIngredientPrices.length > 0;
    if (hasOptions && !showPopup) {
      setShowPopup(true);
      return;
    }
    console.log("hello");
    console.log(item ,'<<item');
    addToCart(item, selectedSize, selectedExtras);
    await new Promise(resolve => setTimeout(resolve, 500));
    setShowPopup(false);
  }
  function handleExtraThingClick(ev, extraThing) {
    const checked = ev.target.checked;
    if (checked) {
      setSelectedExtras(prev => [...prev, extraThing]);
    } else {
      setSelectedExtras(prev => {
        return prev.filter(e => e.name !== extraThing.name);
      });
    }
  }

  let selectedPrice = item.base_price;
  if (selectedSize) {
    selectedPrice += selectedSize.price;
  }
  if (selectedExtras?.length > 0) {
    for (const extra of selectedExtras) {
      selectedPrice += extra.price;
    }
  }

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showPopup]);
  return (
    <>
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          className={classes.popup}>
          <div
            onClick={ev => ev.stopPropagation()}
            className={classes.popupWrapper}>
            <div
              className={classes.box}>
              <div>
                <Media imgClassName={classes.image} resource={item?.image} />
              </div>
              <h2 className={classes.heading}>{item.name}</h2>
              <p className={classes.description}>
                {item.description}
              </p>
              {item.sizes?.length > 0 ? (
                <div className={classes.sizeBox}>
                  <h3 className={classes.sizeBoxHeading}>Pick your size</h3>
                  {item.sizes.map(size => (
                    <>
                      <label
                        key={size.id}
                        className={classes.extras}
                      >
                        <input
                          type="radio"
                          onChange={() => setSelectedSize(size)}
                          checked={selectedSize?.name === size.name}
                          name="size" />
                        {size.name} ${item.base_price + size.price}
                      </label>
                    </>
                  ))}
                </div>
              ) : null}
              {item.extraIngredientPrices?.length > 0 && (
                <div className={classes.sizeBox}>
                  <h3 className={classes.sizeBoxHeading}>Any extras?</h3>
                  {item.extraIngredientPrices.map(extraThing => (
                    <label
                      key={extraThing.id}
                      className={classes.extras}>
                      <input
                        type="checkbox"
                        onChange={ev => handleExtraThingClick(ev, extraThing)}
                        checked={selectedExtras.map(e => e.id).includes(extraThing.id)}
                        name={extraThing.name} />
                      {extraThing.name} +${extraThing.price}
                    </label>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddToCartButtonClick}
                    className={classes.popupButton}
                  >
                    <span>Add to cart ${Number(selectedPrice.toFixed(2))}</span>
                  </button>
                  <button
                    className={classes.popupButton}
                    onClick={() => setShowPopup(false)}>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className={classes.wrapper} >
        <div >
          <Media imgClassName={classes.image} resource={item?.image} />
        </div>
        <h4 >{item.name}</h4>
        <p >{item.description}</p>
        <button
          type="button"
          onClick={handleAddToCartButtonClick}
          className={classes.button}
        >
          <span>Add to cart (from ${item.base_price})</span>
        </button>
      </div>
    </>
  )
}
export default MenuItemCard


'use client'
import React from 'react'
import { menuItem } from '../../../payload/payload-types'
import classes from './index.module.scss'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Media } from '../Media'
const SliderItems: React.FC<{
    items: menuItem[]
}> = (props) => {
    const { items } = props
    return (
        // <div className={classes.grid}>
        <Carousel
            slidesToSlide={1}
            responsive={responsive}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
        >
            {
                items.length !== 0 && items.map((item) => {
                    return (

                        <div className={classes.wrapper} >
                            <div >
                                <Media imgClassName={classes.image} resource={item?.image} />
                            </div>
                            <h4 >{item.name}</h4>
                            <p >{item.description}</p>
                            <button
                                type="button"
                                // onClick={handleAddToCartButtonClick}
                                className={classes.button}
                            >
                                <span>Add to cart (from ${item.base_price})</span>
                            </button>
                        </div>
                    )
                })
            }
        </Carousel>
        // </div>

    )
}

export default SliderItems


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
}
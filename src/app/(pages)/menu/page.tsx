import React from "react";
import { Page } from "../../../payload/payload-types";
import { fetchDoc } from "../../_api/fetchDoc";
import { Hero } from "../../_components/Hero";
import { Blocks } from "../../_components/Blocks";




export default async function MenuItems() {
    let page: Page | null = null

    try {
        page = await fetchDoc<Page>({
            collection: 'pages',
            slug: 'menu',
        })

    } catch (error) {
        console.error(error)
    }

    const { hero, layout } = page


    return (
        <React.Fragment>
            {/* <Hero {...hero} /> */}
            <Blocks
                blocks={layout}
                disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
            />
        </React.Fragment>
    )
}
import { Fragment } from "react"
import { Page } from "../../../payload/payload-types"
import { Gutter } from "../../_components/Gutter"
import RichText from "../../_components/RichText"
import { Section } from "../../_components/Section"
import { Media } from "../../_components/Media"


import classes from './index.module.scss'
import { CMSLink } from "../../_components/Link"


export const HomePageHero: React.FC<Page['hero']> = ({ richText, media, links }) => {

    return (
        <>
            <Gutter >
                <Section>
                    <div >
                        <RichText content={richText} className={classes.color} />
                        {Array.isArray(links) && links.length > 0 && (
                            <div className={classes.buttons}>
                                {links.map(({ link }, i) => {
                                    return (
                                        <>
                                            <CMSLink {...link} className={classes.link} />
                                        </>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                    {typeof media === 'object' && (
                        <Media
                            resource={media}
                            imgClassName={classes.image}
                            priority
                        />
                    )}
                </Section>
            </Gutter>
        </>
    )
}



import { Page } from "../../../payload/payload-types"
import { fetchDoc } from "../../_api/fetchDoc"
import { Blocks } from "../../_components/Blocks"
import { Gutter } from "../../_components/Gutter";
import classes from "./index.module.scss";

export default async function Test() {
    let page: Page | null = null

    try {
        page = await fetchDoc<Page>({
            collection: 'pages',
            slug: 'test',
        })
    } catch (error) {
        console.error(error)
    }

    return (
        <>
            <Gutter className={classes.grid}>
                <h1>
                    Hello
                </h1>

            </Gutter>
            <Blocks blocks={page?.layout} />
        </>
    )
}
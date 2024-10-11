import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import Layout from "../../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout title="Posts">
            <p>Página Posts!</p>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

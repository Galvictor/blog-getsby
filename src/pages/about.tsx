import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import Layout from "../components/Layout";

const AboutPage: React.FC<PageProps> = () => {
    return (
        <Layout title="About">
            <p>Esta é a página sobre nós.</p>
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>About</title>

import * as React from "react"
import type {HeadFC} from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage: React.FC = () => {
    return (
        <Layout title="About">
            <p>Esta é a página sobre nós.</p>
        </Layout>
    );
};

export default AboutPage;

export const Head: HeadFC = () => <SEO title="About"/>

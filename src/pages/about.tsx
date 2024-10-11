import * as React from "react"
import type {HeadFC} from "gatsby"
import Layout from "../components/layout";

const AboutPage: React.FC = () => {
    return (
        <Layout title="About">
            <p>Esta é a página sobre nós.</p>
        </Layout>
    );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About</title>

import * as React from "react"
import type {HeadFC} from "gatsby"
import Layout from "../../components/layout";

const PostsPage: React.FC = () => {
    return (
        <Layout title="Posts">
            <p>Bem-vindo à página de posts!</p>
        </Layout>
    );
};

export default PostsPage;
export const Head: HeadFC = () => <title>Home Page</title>

import React from "react";
import Layout from "../../components/layout";
import {graphql, HeadFC} from "gatsby";
import SEO from "../../components/seo";

const MDXPost: React.FC<{ data: any, children: React.ReactNode }> = ({data, children}) => {

    return (
        <Layout title="MDX Post">
            <h2>{data.mdx.frontmatter.title}</h2>
            <p>Data: {data.mdx.frontmatter.date}</p>
            {children}
        </Layout>
    )

}

export default MDXPost;

export const query = graphql`query($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "DD/MM/YYYY")
            }
        }
    }`;

export const Head: HeadFC<{
    mdx: any;
    data: any
}> = ({data}) => <SEO title={data.mdx.frontmatter.title}/>

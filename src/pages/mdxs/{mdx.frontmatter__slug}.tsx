import React from "react";
import Layout from "../../components/layout";
import {graphql, HeadFC} from "gatsby";
import SEO from "../../components/seo";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const MDXPost: React.FC<{ data: any, children: React.ReactNode }> = ({data, children}) => {

    const img = getImage(data.mdx.frontmatter.featuredImage);
    let featuredImage = null;

    if (img) {
        featuredImage = <GatsbyImage image={img} alt={data.mdx.frontmatter.title}/>
    }

    return (
        <Layout title="MDX Post">
            <h2>{data.mdx.frontmatter.title}</h2>
            <p>Data: {data.mdx.frontmatter.date}</p>
            {featuredImage}
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
                featuredImage{
                    childImageSharp {
                        gatsbyImageData(
                            width: 1600
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
    }`;

export const Head: HeadFC<{
    mdx: any;
    data: any
}> = ({data}) => <SEO title={data.mdx.frontmatter.title}/>

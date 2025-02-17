import * as React from "react"
import {graphql, HeadFC, Link, PageProps, useStaticQuery} from "gatsby"
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const MDXPage: React.FC<PageProps> = () => {

    const query = useStaticQuery(graphql`
query MyQuery {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
        slug
        date(formatString: "DD/MM/YYYY")
        thumb{
                    childImageSharp {
                        gatsbyImageData
                    }
                }
      }
      excerpt
    }
  }
  allFile {
    nodes {
      name
    }
  }
}
    `);

    console.log(query);

    return (
        <Layout title="MDXs">
            <h1>MDXs</h1>
            <div className="text-start">
                <h3>Arquivos MDX em POST</h3>
                <ul>
                    {query.allFile.nodes.map((node: any) => (
                        <li key={node.name}>{node.name}</li>
                    ))}
                </ul>
                <div>
                    <h3>Posts</h3>
                    <div className="row">
                        {query.allMdx.nodes.map((node: any) => {

                            const img = getImage(node.frontmatter.thumb);
                            let thumb = null;

                            if (img) {
                                thumb = <GatsbyImage image={img} alt={node.frontmatter.title}/>
                            }

                            return (<div className="col-4 text-center" key={node.frontmatter.slug}>
                                {thumb}<br/>
                                <Link to={`/mdxs/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                                <p>{node.frontmatter.date}</p>
                                <p>{node.excerpt}</p>
                            </div>)

                        })}
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default MDXPage

export const Head: HeadFC = () => <SEO title="MDX page"/>

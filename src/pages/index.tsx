import * as React from "react"
import {graphql, HeadFC, PageProps, useStaticQuery} from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {

    const query = useStaticQuery(graphql`
query MyQuery {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
        slug
        date
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
        <Layout title="Home">
            <p>Bem-vindo à página inicial!</p>
            <div className="text-start">
                <h3>Arquivos MDX em POST</h3>
                <ul>
                    {query.allFile.nodes.map((node: any) => (
                        <li key={node.name}>{node.name}</li>
                    ))}
                </ul>
                <div>
                    <h3>Posts</h3>
                    <ul>
                        {query.allMdx.nodes.map((node: any) => (
                            <li key={node.frontmatter.slug}>
                                <h4>{node.frontmatter.title}</h4>
                                <p>{node.frontmatter.date}</p>
                                <p>{node.excerpt}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="Home page"/>

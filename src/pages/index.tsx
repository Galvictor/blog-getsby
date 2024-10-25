import * as React from "react"
import {graphql, HeadFC, PageProps, useStaticQuery} from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {

    const query = useStaticQuery(graphql`
    query MyQuery {
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
            </div>

        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="Home page"/>

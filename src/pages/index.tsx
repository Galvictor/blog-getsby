import * as React from "react"
import {HeadFC, PageProps} from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {

    return (
        <Layout title="Home">
            <h1>Bem-vindo à página inicial!</h1>
            <ul>
                <li>Curso: Pós-Graduação MIT em Desenvolvimento Web Full Stack</li>
                <li>Aula: Front-end Jamstack com Gatsby [24E4_2]</li>
                <li>Aluno: João Victor de Souza Galvão Lopes</li>
                <li>Repositório GitHub: <a target="_blank"
                                           href="https://github.com/Galvictor/blog-getsby">https://github.com/Galvictor/blog-getsby</a>
                </li>
                <li>Deploy (CDN): Netlify</li>
            </ul>

        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="Home page"/>

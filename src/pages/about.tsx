import * as React from "react"
import type {HeadFC} from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage: React.FC = () => {
    return (
        <Layout title="About">
            <h1>Esta é a página sobre nós.</h1>
            <section>
                <h2>Funcionalidades do Projeto</h2>
                <ul>
                    <li><strong>Layouts das Páginas</strong>: Estrutura modular com páginas personalizadas.</li>
                    <li><strong>Componentização</strong>: Componentes individuais para facilitar a manutenção e
                        reutilização,
                        incluindo <code>Header</code>, <code>Footer</code>, <code>Layout</code>, <code>SEO</code>, entre
                        outros.
                    </li>
                    <li><strong>Design Responsivo</strong>: Layout responsivo implementado com SCSS e Bootstrap, para
                        garantir a adaptação em diferentes dispositivos.
                    </li>
                    <li><strong>Estilos com SCSS e CSS-in-JS</strong>: Utilização de SCSS para organizar estilos e
                        CSS-in-JS para algumas implementações de design dinâmico.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Funcionalidades Adicionais</h2>
                <ul>
                    <li><strong>Rotas Internas</strong>: Além de rotas para posts criados com MDX, foram adicionadas
                        rotas para posts originados da API externa <a
                            href="https://jsonplaceholder.typicode.com/">https://jsonplaceholder.typicode.com/</a>.
                    </li>
                    <li><strong>Formulário de Gerenciamento de Posts</strong>: Formulário para adicionar (Funcionando),
                        editar e deletar posts. (Funcionalidade implementada como prova de conceito, sem persistência).
                    </li>
                    <li><strong>Otimização de Imagens</strong>: Plugins para otimizar o carregamento de imagens,
                        incluindo <code>gatsby-plugin-image</code>, <code>gatsby-plugin-sharp</code> e <code>gatsby-transformer-sharp</code>.
                    </li>
                    <li><strong>SEO e Mapa do Site</strong>: Plugins
                        como <code>gatsby-plugin-sitemap</code>, <code>gatsby-plugin-robots-txt</code> e <code>useSiteMetadata</code> foram
                        configurados para melhorar a indexação e otimização para mecanismos de busca.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Tecnologias e Ferramentas Utilizadas</h2>
                <ul>
                    <li><strong>TypeScript</strong>: Linguagem tipada para maior segurança e controle no
                        desenvolvimento.
                    </li>
                    <li><strong>MDX</strong>: Formato que permite mesclar Markdown e JSX em posts.</li>
                    <li><strong>SCSS</strong>: Pré-processador CSS para organizar estilos.</li>
                    <li><strong>Bootstrap</strong>: Framework de CSS para facilitar a criação do layout responsivo.</li>
                    <li><strong>Gatsby</strong>: Framework utilizado para criação do site estático e gerenciamento das
                        rotas e componentes.
                    </li>
                    <li><strong>GraphQL</strong>: Usado para consultar dados e alimentar componentes e páginas de forma
                        otimizada.
                    </li>
                    <li><strong>Netlify</strong>: Utilizado como CDN e provedor de hospedagem com CI/CD integrado.</li>
                </ul>
            </section>
        </Layout>
    );
};

export default AboutPage;

export const Head: HeadFC = () => <SEO title="About"/>

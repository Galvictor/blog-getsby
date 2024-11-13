# Blog Gatsby com TypeScript, MDX e SCSS

Este repositório contém um blog desenvolvido com o framework Gatsby, utilizando as tecnologias TypeScript, MDX, SCSS e com design responsivo implementado.

## Informações do Projeto

- **Curso**: Pós-Graduação MIT em Desenvolvimento Web Full Stack
- **Aula**: Front-end Jamstack com Gatsby [24E4_2]
- **Aluno**: João Victor de Souza Galvão Lopes
- **Repositório GitHub**: [https://github.com/Galvictor/blog-getsby](https://github.com/Galvictor/blog-getsby)
- **Deploy (CDN)**: Netlify
- **URL do Projeto**: [https://imaginative-klepon-c95f61.netlify.app](https://imaginative-klepon-c95f61.netlify.app)

## Descrição

Este projeto é um blog simples desenvolvido com Gatsby que inclui:

- **Formulário de Contato**: Formulário funcional com integração ao Netlify para envio de mensagens.
- **Conteúdo Markdown e MDX**: Possibilidade de criação de posts em Markdown e MDX, com rotas internas para cada post.
- **Deploy no Netlify**: Aplicação publicada diretamente no Netlify.

## Funcionalidades do Projeto

- **Layouts das Páginas**: Estrutura modular com páginas personalizadas.
- **Componentização**: Componentes individuais para facilitar a manutenção e reutilização, incluindo `Header`, `Footer`, `Layout`, `SEO`, entre outros.
- **Design Responsivo**: Layout responsivo implementado com SCSS e Bootstrap, para garantir a adaptação em diferentes dispositivos.
- **Estilos com SCSS e CSS-in-JS**: Utilização de SCSS para organizar estilos e CSS-in-JS para algumas implementações de design dinâmico.

## Funcionalidades Adicionais

- **Rotas Internas**: Além de rotas para posts criados com MDX, foram adicionadas rotas para posts originados da API externa [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/).
- **Formulário de Gerenciamento de Posts**: Formulário para adicionar, editar e deletar posts. (Funcionalidade implementada como prova de conceito, sem persistência).
- **Otimização de Imagens**: Plugins para otimizar o carregamento de imagens, incluindo `gatsby-plugin-image`, `gatsby-plugin-sharp` e `gatsby-transformer-sharp`.
- **SEO e Mapa do Site**: Plugins como `gatsby-plugin-sitemap`, `gatsby-plugin-robots-txt` e `useSiteMetadata` foram configurados para melhorar a indexação e otimização para mecanismos de busca.

## Tecnologias e Ferramentas Utilizadas

- **TypeScript**: Linguagem tipada para maior segurança e controle no desenvolvimento.
- **MDX**: Formato que permite mesclar Markdown e JSX em posts.
- **SCSS**: Pré-processador CSS para organizar estilos.
- **Bootstrap**: Framework de CSS para facilitar a criação do layout responsivo.
- **Gatsby**: Framework utilizado para criação do site estático e gerenciamento das rotas e componentes.
- **Netlify**: Utilizado como CDN e provedor de hospedagem com CI/CD integrado.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Galvictor/blog-getsby
   cd blog-getsby
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Inicie o servidor de desenvolvimento:
    ```bash
    npm run develop
    ```

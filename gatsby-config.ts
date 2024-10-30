import type {GatsbyConfig} from "gatsby"

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Estudos do Jamstack com Gatsby`,
        siteUrl: `https://infnet.edu.br`,
        description: `Estudos do Jamstack com Gatsby`,
        twitterUsername: `@infnet`,
        image: `/images/infnet-logo.png`,
    },
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-mdx",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-rest-api',
            options: {
                endpoints: [
                    'https://jsonplaceholder.typicode.com/posts',
                    'https://jsonplaceholder.typicode.com/users',
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/data/posts`,
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`,
            }
        }
    ],
}

export default config

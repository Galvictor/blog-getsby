import type {GatsbyConfig} from "gatsby"

const config: GatsbyConfig = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-sass",
        {
            resolve: 'gatsby-source-rest-api',
            options: {
                endpoints: [
                    'https://jsonplaceholder.typicode.com/posts',
                ],
            },
        },
    ],
}

export default config

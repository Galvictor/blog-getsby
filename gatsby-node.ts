import {GatsbyNode} from 'gatsby';
import path from 'path';
import {posts} from './src/data/posts';

export const createPages: GatsbyNode['createPages'] = async ({actions}) => {
    const {createPage} = actions;

    const postTemplate = path.resolve('src/templates/post.tsx');

    posts.forEach(post => {
        createPage({
            path: `/posts/${post.id}`,
            component: postTemplate,
            context: {
                post,
            },
        });
    });
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({actions}) => {
    const {createTypes} = actions;
    createTypes(`
        type MdxFrontmatter {
            thumb: File @fileByRelativePath
        }
        type File implements Node {
            childImageSharp: ImageSharp
        }
        type ImageSharp implements Node {
            gatsbyImageData: JSON
        }
    `);
};

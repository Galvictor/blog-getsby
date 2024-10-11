import React from 'react';
import Layout from '../components/layout';
import * as styles from '../styles/post.module.scss';

const PostTemplate: React.FC<{ pageContext: any }> = ({pageContext}) => {
    const {post} = pageContext;

    return (
        <Layout title={post.title}>
            <div className={styles.post}>
                <img src={post.image} alt={post.title} className={styles.image}/>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </Layout>
    );
};

export default PostTemplate;

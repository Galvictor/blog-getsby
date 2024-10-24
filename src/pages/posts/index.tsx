import React, {useEffect, useState} from 'react';
import {HeadFC, Link} from "gatsby"
import Layout from "../../components/layout";
import * as styles from "../../styles/posts.module.scss";
import SEO from "../../components/seo";

//import {posts} from '../../data/posts';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const PostsPage: React.FC = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <Layout title="Posts">
            <h2>Lista de Posts</h2>
            <div className={styles.posts}>
                {posts.map(post => (
                    <Link to={`/posts/${post.id}`} className={styles.postLink} key={post.id}>
                        <div className={styles.post}>
                            <h3>{post.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
    );
};

export default PostsPage;
export const Head: HeadFC = () => <SEO title="Posts"/>

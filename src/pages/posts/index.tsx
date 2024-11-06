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

    const [open, setOpen] = useState(false);

    const [alertSuccess, setAlertSuccess] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleAlertSucessClose = () => {
        setAlertSuccess(false);
    }

    const handleSave = () => {
        const title = document.getElementById('title') as HTMLInputElement;
        const body = document.getElementById('body') as HTMLTextAreaElement;

        if (title.value === '' || body.value === '') {
            alert('Preencha todos os campos');
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({userId: 1, title: title.value, body: body.value}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data: Post) => {
                console.log(data);
                data.id = 1;
                setPosts([data, ...posts]);
                setOpen(false);
                setAlertSuccess(true);
            });
    }

    return (
        <Layout title="Posts">
            <h2>Lista de Posts</h2>

            <div style={{display: alertSuccess ? 'block' : 'none'}} className="alert alert-success alert-dismissible"
                 role="alert">
                <strong>Sucesso!</strong> Post adicionado com sucesso!
                <button type="button" onClick={handleAlertSucessClose} className="btn-close" data-bs-dismiss="alert"
                        aria-label="Close"></button>
            </div>

            <div className="modal" style={{display: open ? 'block' : 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Adicionar Novo Post</h5>
                            <button type="button" className="btn-close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Título</label>
                                    <input type="text" name="title" className="form-control" id="title"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="body" className="form-label">Corpo</label>
                                    <textarea className="form-control" name="body" id="body" rows={3}></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                    onClick={handleClose}>Cancelar
                            </button>
                            <button onClick={handleSave} type="button" className="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <button onClick={handleOpen} className="btn btn-primary text-white">Adicionar Novo Post</button>
            </div>

            <div className={styles.posts}>
                {posts.map(post => (
                    <div className="border border-3 d-flex flex-column p-2 rounded">
                        <div className="d-flex justify-content-around mb-3 align-items-center">
                            <button className="btn btn-info">Editar</button>
                            <div>ID: {post.id}</div>
                            <button className="btn btn-danger">Deletar</button>
                        </div>
                        <Link to={`/posts/${post.id}`} className={styles.postLink} key={post.id}>
                            <div className={styles.post}>
                                <h3>{post.title}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default PostsPage;
export const Head: HeadFC = () => <SEO title="Posts"/>

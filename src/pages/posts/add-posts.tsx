import React, {useState} from "react";
import Layout from "../../components/layout";
import {formContainer, formGroup, submitBtn} from "../../styles/form.module.scss";

interface Post {
    userId: number;
    title: string;
    body: string;
}

const AddPostPage: React.FC = () => {

    const [post, setPost] = useState<Post>({
        userId: 1,
        title: "",
        body: "",
    });

    const handleSubmit = (e: React.FormEvent) => {

        if (post.title === '' || post.body === '') {
            alert('Preencha todos os campos');
        }

        e.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPost({userId: 1, title: "", body: ""});
                alert('Post adicionado com sucesso!');
            });
    };

    return (
        <Layout title="Add New Post">
            <div className={formContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={formGroup}>
                        <label htmlFor="title">Título</label>
                        <input
                            type="text"
                            id="title"
                            value={post.title}
                            onChange={(e) => setPost({...post, title: e.target.value})}
                        />
                    </div>

                    <div className={formGroup}>
                        <label htmlFor="body">Conteúdo</label>
                        <textarea
                            id="body"
                            value={post.body}
                            onChange={(e) => setPost({...post, body: e.target.value})}
                        />
                    </div>

                    <button type="submit" className={submitBtn}>
                        Adicionar Post
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default AddPostPage;

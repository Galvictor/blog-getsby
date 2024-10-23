import React, {useState} from "react";
import Layout from "../../components/layout";
import {formContainer, formGroup, submitBtn} from "../../styles/form.module.scss";

const AddPostPage: React.FC = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className={formGroup}>
                        <label htmlFor="body">Conteúdo</label>
                        <textarea
                            id="body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
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

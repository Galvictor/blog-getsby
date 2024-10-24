import * as React from "react"
import {useState} from "react"
import type {HeadFC} from "gatsby"
import Layout from "../components/layout"
import {formContainer, formGroup, submitBtn} from "../styles/form.module.scss";

const ContatoPage: React.FC = () => {

    const [inputs, setInputs] = useState({email: '', name: '', mensage: ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value});
    }

    const encode = (data: any) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const hangleSubmit = (e: React.FormEvent) => {

        if (inputs.email === '' || inputs.name === '' || inputs.mensage === '') {
            alert('Preencha todos os campos');
        }

        e.preventDefault();
        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({...inputs, 'form-name': 'contact-react'})
        })
            .then(() => {
                alert('Mensagem enviada com sucesso!');
                setInputs({email: '', name: '', mensage: ''})
            })
            .catch(error => alert(error));
    }

    return (
        <Layout title="Contato React">
            <div className={formContainer}>
                <form onSubmit={hangleSubmit} method="post" data-netlify-honeypot="bot-field" data-netlify="true"
                      name="contact-react">
                    <input type="hidden" name="form-name" value="contact-react"/>
                    <div className={formGroup}>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" value={inputs.email} onChange={handleChange}/>
                    </div>
                    <div className={formGroup}>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" name="name" value={inputs.name} onChange={handleChange}/>
                    </div>
                    <div className={formGroup}>
                        <label htmlFor="mensage">Mensagem</label>
                        <textarea id="mensage" name="mensage" value={inputs.mensage} onChange={handleChange}/>
                    </div>
                    <button type="submit" className={submitBtn}>
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </Layout>
    );

}

export default ContatoPage;

export const Head: HeadFC = () => <title>Contato React</title>

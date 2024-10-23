import * as React from "react"
import type {HeadFC} from "gatsby"
import Layout from "../components/layout"
import {formContainer, formGroup, submitBtn} from "../styles/form.module.scss";

const ContatoPage: React.FC = () => {

    return (
        <Layout title="Contato">
            <div className={formContainer}>
                <form method="post" data-netlify-honeypot="bot-field" data-netlify="true" name="contact-static">
                    <input type="hidden" name="form-name" value="contact-static"/>
                    <div className={formGroup}>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email"/>
                    </div>
                    <div className={formGroup}>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" name="name"/>
                    </div>
                    <div className={formGroup}>
                        <label htmlFor="mensage">Mensagem</label>
                        <textarea id="mensage" name="mensage"/>
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

export const Head: HeadFC = () => <title>Contato</title>

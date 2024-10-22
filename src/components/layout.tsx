import React from 'react';
import {layout} from "../styles/layout.module.scss";
import Header from "./header";
import Footer from "./footer";

//import * as styles from './layout.module.scss';

interface LayoutProps {
    title: string;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({title, children}) => {
    return (
        <div className={layout}>
            <Header title={title}/>

            <main>{children}</main>

            <Footer year="2024"/>
        </div>
    );
};

export default Layout;

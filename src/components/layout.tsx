import React from 'react';
import {Link} from 'gatsby';
import {container} from "../styles/layout.module.css";

interface LayoutProps {
    title: string;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({title, children}) => {
    return (
        <div className={container}>
            <header>
                <h1>{title}</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>{children}</main>

            <footer>
                <p>© 2024 - Meu Site</p>
            </footer>
        </div>
    );
};

export default Layout;

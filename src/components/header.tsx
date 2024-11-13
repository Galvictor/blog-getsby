import {Link} from "gatsby";
import React, {useState} from "react";

import {header, menuToggle, open} from "../styles/header.module.scss";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <header className={`${header} flex-row flex-lg-column`}>
            <h1 className="mb-0 mb-lg-4">{title}</h1>
            <div
                className={`${menuToggle} ${isMenuOpen ? open : ""}`}
                onClick={toggleMenu}
            ></div>
            <nav style={{transform: !isMenuOpen ? "translateY(0)" : ""}}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/mdxs">MDX Posts</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to="/posts/add-posts">Add Post</Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link to="/contato">Contato Static</Link>
                    </li>
                    <li>
                        <Link to="/contato-react">Contato React</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Header

import React from "react";

const Footer: React.FC<{ year: string }> = ({year}) => {

    return (
        <footer>
            <p>© {year} - Meu Site</p>
        </footer>
    )

}

export default Footer

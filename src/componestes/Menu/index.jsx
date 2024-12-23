import "./index.css"
import Logo from "../../assets/Logo.png"
import ButtonLink from "../Button/index.jsx"

import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <header >
            <nav className="Menu">
                <Link to="/">
                    <img
                        src={Logo}
                        className="Logo"
                    />
                </Link>
                <ButtonLink
                    linkPage="./pages/cadastro"
                    className="ButtonLink"
                    children="Novo video"
                />

            </nav>
        </header>
    )
}

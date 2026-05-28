import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <h2>Programación Integrativa de Componentes Web</h2>
            <nav>
                <Link className="item-menu" to="/">Inicio</Link>
                <Link className="item-menu" to="/nosotros">Nosotros</Link>
                <Link className="item-menu" to="/contactos">Contactos</Link>
                <Link className="item-menu" to="/card">Card</Link>
            </nav>
        </header>
    )

}
import React from "react";
import './Header.css';

/* ReactScroll */
import { Link } from 'react-scroll';

/* React router */
import { NavLink } from 'react-router-dom';

/* Portfolio Context */
import { usePortfolio } from '../../context/PortfolioContext';

const Header = () => {
    const { profile } = usePortfolio();

    const menuDesplegable = () => {
        let navbar = document.querySelector('.navbar');
        if (navbar) navbar.classList.toggle("activar");

        window.onscroll = () => {
            const header = document.querySelector(".site-header");
            if (header) {
                if (window.scrollY > 0) {
                    header.classList.add("activar");
                } else {
                    header.classList.remove("activar");
                }
            }
            if (navbar) navbar.classList.remove("activar");
        };
    };

    const logoText = profile?.logoTitle || profile?.name || 'PRIYANKA';
    const badge = profile?.badge || '🦄';

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={menuDesplegable}></div>

            <NavLink className="logo" to="/">
                <p>{badge}<span>{logoText}</span>{badge}</p>
            </NavLink>

            <nav className="navbar">
                <Link to="inicio" spy={true} offset={-150} href="#inicio">
                     Home
                </Link>
                <Link to="sobre-mi" spy={true} offset={-150} href="#sobre-mi">
                     About Me
                </Link>
                <Link to="servicios" spy={true} offset={-150} href="#servicios">
                   Services
                </Link>
                <Link to="proyectos" spy={true} offset={-150} href="#proyectos">
                    Projects
                </Link>
                <Link to="contactos" spy={true} offset={-150} href="#contactos">
                   Contact
                </Link>
            </nav>
        </header>
    );
};

export default React.memo(Header);

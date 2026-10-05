import React from "react";
import './Header.css';

/* React router */
import { NavLink } from 'react-router-dom';

/* Portfolio Context */
import { usePortfolio } from '../../context/PortfolioContext';

const HeaderPage = () => {
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

            <NavLink className="logo" to="/" >
                <p>{badge}<span>{logoText}</span>{badge}</p>
            </NavLink>

            <nav className="navbar">
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/about">
                     About Me
                </NavLink>
                <NavLink to="/service">
                    Services
                </NavLink>
                <NavLink to="/project">
                     Projects
                </NavLink>
            </nav>
        </header>
    );
};

export default React.memo(HeaderPage);

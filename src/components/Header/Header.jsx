import React, { useContext } from "react";
import './Header.css';

/* ReactScroll */
import { Link } from 'react-scroll';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language Context */
import { langContext } from '../../context/Context';

const Header = () => {
    const idioma = useContext(langContext);

    const menuDesplegable = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("activar");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("activar");
            } else {
                document.querySelector(".site-header").classList.remove("activar");
            }

            navbar.classList.remove("activar");
        };
    };

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={menuDesplegable}></div>

            <NavLink className="logo" to="/">
                <p>🦄<span>PRIYANKA</span>🦄</p>
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

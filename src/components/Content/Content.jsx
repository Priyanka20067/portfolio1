import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';

/* ReactScroll */
import { Link } from 'react-scroll';

/* Portfolio Context */
import { usePortfolio } from '../../context/PortfolioContext';

const Content = () => {
    const { profile } = usePortfolio();

    const greeting = profile?.greeting || 'Hello';
    const name = profile?.name || 'Priyanka AM';
    const badge = profile?.badge || '🦄';
    const role = profile?.role || 'Full-stack developer';

    const linkedin = profile?.socialLinks?.linkedin || 'https://www.linkedin.com/in/priyanka-am-7b95722a5/';
    const github = profile?.socialLinks?.github || 'https://github.com/Priyanka20067';
    const instagram = profile?.socialLinks?.instagram || 'https://www.instagram.com/nahuelcarrizolc/';
    const whatsapp = profile?.socialLinks?.whatsapp || 'https://api.whatsapp.com/send?phone=8072776141';

    return (
        <div className="contenido">
            <ParticleHeaderBg />
            <section className="inicio" id="inicio">
                <div className="titulo">
                    <p data-aos="fade-up" data-aos-delay="600">
                        {greeting}
                    </p>
                    <h1 data-aos="fade-up" data-aos-delay="800">
                        I am {name} {badge}
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="1000">
                        {role}
                    </p>

                    <div className="redes-sociales">
                        {linkedin && (
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        )}
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400">
                                <i className="fab fa-github"></i>
                            </a>
                        )}
                        {instagram && (
                            <a href={instagram} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600">
                                <i className="fab fa-instagram"></i>
                            </a>
                        )}
                        {whatsapp && (
                            <a href={whatsapp} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        )}
                    </div>

                    <div className="wrapper">
                        {linkedin && (
                            <a className="button" href={linkedin} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200">
                                <div className="icon">
                                    <i className="fab fa-linkedin"></i>
                                </div>
                                <span>LinkedIn</span>
                            </a>
                        )}
                        {github && (
                            <a className="button" href={github} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400">
                                <div className="icon">
                                    <i className="fab fa-github"></i>
                                </div>
                                <span>GitHub</span>
                            </a>
                        )}
                        {instagram && (
                            <a className="button" href={instagram} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600">
                                <div className="icon">
                                    <i className="fab fa-instagram"></i>
                                </div>
                                <span>Instagram</span>
                            </a>
                        )}
                        {whatsapp && (
                            <a className="button" href={whatsapp} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800">
                                <div className="icon">
                                    <i className="fab fa-whatsapp"></i>
                                </div>
                                <span>WhatsApp</span>
                            </a>
                        )}
                    </div>

                    <Link to="sobre-mi" href="#sobre-mi">
                        <div className="scroll-down"></div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Content;

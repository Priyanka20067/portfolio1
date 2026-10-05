import React from 'react';
import '../../pages/Contact/ContactPage.css';
import { TypeAnimation } from 'react-type-animation';
import { usePortfolio } from '../../context/PortfolioContext';

const Contact = () => {
    const { profile } = usePortfolio();

    const email = profile?.email || 'priyankam18042006@gmail.com';
    const whatsapp = profile?.socialLinks?.whatsapp || 'https://api.whatsapp.com/send?phone=8072776141';
    const telegram = profile?.socialLinks?.telegram || 'https://web.telegram.org/k/';
    const linkedin = profile?.socialLinks?.linkedin || 'https://www.linkedin.com/in/priyanka-am-7b95722a5';
    const github = profile?.socialLinks?.github || 'https://github.com/Priyanka20067';

    // Build animation sequence dynamically
    const animItems = profile?.contactTypeAnimation && profile.contactTypeAnimation.length > 0
        ? profile.contactTypeAnimation
        : ['Gmail', 'WhatsApp', 'Telegram', 'Linkedin', 'GitHub'];

    const sequence = [];
    animItems.forEach(item => {
        sequence.push(item);
        sequence.push(1500);
    });

    return (
        <section className="contactos" id="contactos">
            <h2 className="heading">
                Contact
            </h2>
            <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
                Contact me by: 
                <TypeAnimation
                    sequence={sequence}
                    speed={50}
                    wrapper="b"
                    repeat={Infinity}
                    className="site-contacto"
                />
            </h3>

            <div className="icons">
                {email && (
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="zoom-in"
                    >
                        <div className="layer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fab fas fa-envelope"></span>
                        </div>
                    </a>
                )}

                {whatsapp && (
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                        <div className="layer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fab fa-whatsapp"></span>
                        </div>
                        <div className="text">
                            Whatsapp
                        </div>
                    </a>
                )}

                {telegram && (
                    <a href={telegram} target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                        <div className="layer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fab fa-telegram"></span>
                        </div>
                        <div className="text">
                            telegram
                        </div>
                    </a>
                )}

                {linkedin && (
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                        <div className="layer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fab fa-linkedin-in"></span>
                        </div>
                        <div className="text">
                            Linkedin
                        </div>
                    </a>
                )}

                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                        <div className="layer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fab fa-github-square"></span>
                        </div>
                        <div className="text">
                            GitHub
                        </div>
                    </a>
                )}
            </div>
        </section>
    );
};

export default React.memo(Contact);
import React from 'react';
import './Footer.css';
import { usePortfolio } from '../../context/PortfolioContext';

const Footer = () => {
    const { profile } = usePortfolio();
    const fecha = new Date().getFullYear();

    const name = profile?.name || 'Priyanka AM';
    const linkedin = profile?.socialLinks?.linkedin || 'https://www.linkedin.com/in/priyanka-am-7b95722a5';
    const github = profile?.socialLinks?.github || 'https://github.com/Priyanka20067';
    const whatsapp = profile?.socialLinks?.whatsapp || 'https://api.whatsapp.com/send?phone=+918072776141';

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>Page created by {name}</p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    {linkedin && (
                        <a href={linkedin} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    )}
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    )}
                    {whatsapp && (
                        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default React.memo(Footer);

import React from 'react';
import '../../pages/Service/ServicesPage.css';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

const Service = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">Services</h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-drafting-compass"></i>
                <h3>Design UX/UI</h3>
                <p>
                    Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website.
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-laptop"></i>
                <h3>Web development</h3>
                <p>
                    Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-chart-line"></i>
                <h3>App Development</h3>
           <p>
            Design and development of high-performance mobile and web applications tailored to client needs, with modern UI/UX, smooth functionality, and cross-platform support for Android, iOS, and web.
            </p>
            </div>
           
        </div>
        <div className='portafolio-btn'>
            <Link to="/service">
                <ButtomGet />
            </Link>
        </div>
    </section>
);

export default React.memo(Service);

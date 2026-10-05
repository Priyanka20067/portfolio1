import React from 'react';
import '../../pages/Service/ServicesPage.css';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';
import { usePortfolio } from '../../context/PortfolioContext';

const Service = () => {
    const { services } = usePortfolio();

    return (
        <section className="servicios" id="servicios">
            <h2 className="heading">Services</h2>
            <div className="row">
                {services.map((item, index) => (
                    <div
                        className="columns"
                        data-aos="fade-up"
                        data-aos-delay={(index + 2) * 100}
                        key={item._id || index}
                    >
                        <i className={item.icon || 'fas fa-laptop'}></i>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className='portafolio-btn'>
                <Link to="/service">
                    <ButtomGet />
                </Link>
            </div>
        </section>
    );
};

export default React.memo(Service);

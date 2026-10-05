import React from 'react';
import './ServicesPage.css';

/* Component */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Accordion from './Accordion';
import { usePortfolio } from '../../context/PortfolioContext';

const Services = () => {
  const { services, pricing, faqs } = usePortfolio();

  return (
    <div>
      <HeaderPage />

      <main className="service-page">
        <section className="servicios" id="servicios">
          <h2 className="heading">Services</h2>
          <div className="row">
            {services.map((serv, index) => (
              <div
                className="columns"
                data-aos="fade-up"
                data-aos-delay={(index + 2) * 100}
                key={serv._id || index}
              >
                <i className={serv.icon || 'fas fa-laptop'}></i>
                <h3>{serv.title}</h3>
                <p>{serv.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="site-services">
          <h2 className="heading">Price</h2>
          <div className="row">
            {pricing.map((plan, index) => {
              const isRec = plan.isRecommended;
              return (
                <div
                  className={`columns ${isRec ? 'recomendado' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={(index + 2) * 100}
                  key={plan._id || index}
                >
                  <h3>{plan.title}</h3>
                  {plan.subtitle && <h4 className="sub-title">{plan.subtitle}</h4>}
                  <p className="numero">
                    <span>{plan.currency || '$'}</span>
                    {plan.price}
                  </p>
                  {plan.features && plan.features.length > 0 && (
                    <ul className="ul-cards-services">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx}>
                          <i className="fas fa-check"></i>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="preguntas">
          <h2 className="heading">Frequent questions</h2>
          <div className="accordion-container">
            {faqs.map((faq, index) => (
              <Accordion
                key={faq._id || index}
                title={faq.question}
                content={faq.answer}
                dataAos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                dataAosDelay="300"
              />
            ))}
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Services;

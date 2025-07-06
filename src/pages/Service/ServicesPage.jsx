import React from 'react';
import './ServicesPage.css'

/* Component */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Accordion from './Accordion';

const Services = () => {
  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <main className="service-page">
        <section className="servicios" id="servicios">
          <h2 className="heading">Services</h2>
          <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-drafting-compass"></i>
              <h3>Design UX/UI</h3>
              <p>Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website.</p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
              <i className="fas fa-laptop"></i>
              <h3>Web development</h3>
              <p>Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.</p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-mobile-alt"></i>
              <h3>App development</h3>
              <p>Development of mobile applications for Android and iOS, focusing on user experience and performance to meet the needs of the target audience.</p>
            </div>

          </div>
        </section>

        <section className="site-services">
          <h2 className="heading">Price</h2>
          <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
              <h3>Essential</h3>
              <h4 className="sub-title">Perfect for new businesses</h4>
              <p className="numero"><span>$</span>150</p>
              <ul className="ul-cards-services">
                <li><i className="fas fa-check"></i><span>1 responsive page</span></li>
                <li><i className="fas fa-check"></i><span>+3 sections for page</span></li>
                <li><i className="fas fa-check"></i><span>Contact Form</span></li>
                <li><i className="fas fa-check"></i><span>Domain for 1 year</span></li>
                <li><i className="fas fa-check"></i><span>Hosting for 1 year</span></li>
                <li><i className="fas fa-check"></i><span>Delivered in 5 business days</span></li>
              </ul>
            </div>

            <div className="columns recomendado" data-aos="fade-up" data-aos-delay="300">
              <h3>Professional</h3>
              <h4 className="sub-title">Designed for medium businesses</h4>
              <p className="numero"><span>$</span>400</p>
              <ul className="ul-cards-services">
                <li><i className="fas fa-check"></i><span>5 responsive pages</span></li>
                <li><i className="fas fa-check"></i><span>+3 sections for page</span></li>
                <li><i className="fas fa-check"></i><span>Contact Form</span></li>
                <li><i className="fas fa-check"></i><span>Domain for 1 year</span></li>
                <li><i className="fas fa-check"></i><span>Hosting for 1 year</span></li>
                <li><i className="fas fa-check"></i><span>Animations</span></li>
                <li><i className="fas fa-check"></i><span>Free maintenance for 6 months</span></li>
                <li><i className="fas fa-check"></i><span>Delivered in 7 business days</span></li>
              </ul>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="400">
              <h3>Premium</h3>
              <h4 className="sub-title">Great for large websites</h4>
              <p className="numero"><span>$</span>700</p>
              <ul className="ul-cards-services">
                <li><i className="fas fa-check"></i><span>+10 responsive pages</span></li>
                <li><i className="fas fa-check"></i><span>+3 sections for page</span></li>
                <li><i className="fas fa-check"></i><span>Contact Form</span></li>
                <li><i className="fas fa-check"></i><span>Domain for 1 year</span></li>
                <li><i className="fas fa-check"></i><span>Hosting for 1 year</span></li>
                <li><i className="fas fa-check"></i><span>Animations</span></li>
                <li><i className="fas fa-check"></i><span>Free maintenance for 1 year</span></li>
                <li><i className="fas fa-check"></i><span>Delivered in 14 business days</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="preguntas">
          <h2 className="heading">Frequent questions</h2>
          <div className="accordion-container">
            <Accordion
              title="What is a responsive web page?"
              content="It is that page that is capable of adapting to any device where it is viewed, such as cell phones, tablets, laptops, without losing appearance or usability."
              dataAos="fade-right"
              dataAosDelay="300"
            />
            <Accordion
              title="What is a Domain and a Hosting?"
              content="Both are essential elements of a website. In short, the domain name is the address of the web page, while the hosting provides the space and resources necessary to launch the website."
              dataAos="fade-left"
              dataAosDelay="300"
            />
            <Accordion
              title="Is monthly maintenance necessary?"
              content="Regular maintenance of your website allows you to attract and retain customers with new information, new products and services, in addition to helping you maintain or improve your ranking in Google."
              dataAos="fade-right"
              dataAosDelay="300"
            />
            <Accordion
              title="How to pay"
              content="You can pay online by credit or debit cards and payments by transfers."
              dataAos="fade-left"
              dataAosDelay="300"
            />
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}
export default Services;

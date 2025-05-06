import React from 'react';
import '../../pages/Contact/ContactPage.css'
import Typical from 'react-typical'




const Contact = () => (

    <section className="contactos" id="contactos">

        <h2 className="heading">
           
                Contact
            
        </h2>
        <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
            
               Contact me by: 
           
               <Typical
  className="site-contacto"
  loop={Infinity}
  wrapper="b"
  steps={[
    'Gmail', 1500,
    'WhatsApp', 1500,
    'Instragram', 1500,
    'Telegram', 1500,
    'Linkedin', 1500,
    'Github', 1500,
  ]}
/>


        </h3>

        <div className="icons">
            <a href="priyankam18042006@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fas fa-envelope"></span>
                </div>
                <div className="text">
                    Gmail
                </div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=8072776141" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
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
            
            <a href="https://web.telegram.org/k/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
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
            <a href="https://www.linkedin.com/in/priyanka-am-7b95722a5" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
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
            <a href="https://github.com/Priyanka20067" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
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
        </div>
    </section>
);

export default React.memo(Contact);
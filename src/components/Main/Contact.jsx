import React from 'react';
import '../../pages/Contact/ContactPage.css'
import { TypeAnimation } from 'react-type-animation';





const Contact = () => (

    <section className="contactos" id="contactos">

        <h2 className="heading">
           
                Contact
            
        </h2>
        <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
            
               Contact me by: 
           
               <TypeAnimation
  sequence={[
    'Gmail', 1500,
    'WhatsApp', 1500,
    'Instagram', 1500,
    'Telegram', 1500,
    'Linkedin', 1500,
    'GitHub', 1500,
  ]}
  speed={50}
  wrapper="b"
  repeat={Infinity}
  className="site-contacto"
/>



        </h3>

        <div className="icons">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=priyankam18042006@gmail.com" 
   target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
  <div class="layer">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span class="fab fas fa-envelope"></span>
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
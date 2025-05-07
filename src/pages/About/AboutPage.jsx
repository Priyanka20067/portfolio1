import React from 'react';
import './AboutPage.css'

import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

import imgabout from '../../img/home.jpg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                Download CV
              </a>
            </div>

            <div className="sobre-mi-info">
              <p>
              Hi, I'm Priyanka, a student at the Technological University of Tucumán. I'm deeply passionate about programming and web development. My journey began in 2020 when I created my first web page using just HTML and CSS. That experience sparked a lasting interest in front-end development, and to this day, I still feel the same excitement every time I build something new using HTML, CSS, JavaScript, and other technologies.
              </p>

              <div className="hide parrafo-active">
                <p>
                I'm a self-taught learner who enjoys exploring new tools and development methods daily. I believe that continuous learning is key to growing as a developer and staying up-to-date in this ever-evolving tech world.
                </p>

                <p>
                I have hands-on experience as a freelance web designer and developer, which has allowed me to work on a variety of projects tailored to clients' needs and budgets. These opportunities helped me enhance my skills, problem-solving abilities, and adaptability. I've also participated in both online and in-person courses to further deepen my knowledge and fuel my passion for web development.
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>
          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">

              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="HTML" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" />
                <h2 className="skill-name">HTML</h2>
                <p className="skill-info">
                  More than a year of professional experience in this language, allows me to perform without problems in the industry.
                </p>
              </div>

              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="CSS" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" />
                <h2 className="skill-name">CSS</h2>
                <p className="skill-info">
                  More than a year of work experience in this language, I use it daily to develop web designs and interfaces.
                </p>
              </div>

              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Js" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" title="Java Script" />
                <h2 className="skill-name">Javascript</h2>
                <p className="skill-info">
                  A year of experience using it in the front-end and back-end branch, allowed me to familiarize myself with the language, and include it in my work projects.
                </p>
              </div>

              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
  <img
    alt="Vite"
    className="skills-img"
    src="https://vitejs.dev/logo.svg"
    title="Vite"
  />
  <h2 className="skill-name">Vite</h2>
  <p className="skill-info">
    I have been using Vite for the past six months in my projects. It significantly improves the development experience with fast builds and hot module replacement.
  </p>
</div>


             

              

              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="react" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="ReactJS" />
                <h2 className="skill-name">ReactJs</h2>
                <p className="skill-info">
                  More than a year using this JavaScript framework, carrying out multiple personal and work projects.
                </p>
              </div>

              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="nodejs" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title="NodeJS" />
                <h2 className="skill-name">NodeJs</h2>
                <p className="skill-info">
                  It is the cross-platform runtime environment that I use to make my web applications scalable.
                </p>
              </div>

              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="express" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" title="Express" />
                <h2 className="skill-name">Express</h2>
                <p className="skill-info">
                  It is a framework that I use mostly to manage my APIs and my HTTP execution model.
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
  <img
    alt="MongoDB"
    className="skills-img"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
    title="MongoDB"
  />
  <h2 className="skill-name">MongoDB</h2>
  <p className="skill-info">
    I have experience using MongoDB for building scalable and flexible NoSQL databases. It's my go-to choice for modern full-stack applications.
  </p>
</div>
<div className="skill-card" data-aos="flip-left" data-aos-delay="300">
  <img
    alt="React Native"
    className="skills-img"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    title="React Native"
  />
  <h2 className="skill-name">React Native</h2>
  <p className="skill-info">
    I have experience building cross-platform mobile applications using React Native, enabling fast development and a native-like user experience.
  </p>
</div>



            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default About;

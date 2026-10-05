import React from 'react';
import './AboutPage.css';

import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import defaultCv from '../../cv/cv.pdf';
import imgabout from '../../img/home.jpg';
import { usePortfolio } from '../../context/PortfolioContext';
import { resolveImage } from '../../utils/imageHelper';

const About = () => {
  const { profile, skills } = usePortfolio();

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    if (parrafoActive) {
      parrafoActive.classList.toggle("show");
      if (btnHide) {
        if (parrafoActive.classList.contains("show")) {
          btnHide.innerHTML = "↑";
        } else {
          btnHide.innerHTML = "Read more";
        }
      }
    }
  }

  const cvLink = profile?.cvUrl || defaultCv;
  const imageSource = profile?.aboutImg ? resolveImage(profile.aboutImg, imgabout) : imgabout;
  const paragraphs = profile?.aboutFullParagraphs && profile.aboutFullParagraphs.length > 0
    ? profile.aboutFullParagraphs
    : [
        "Hi, I'm Priyanka, a passionate full-stack developer with hands-on experience building web and mobile applications.",
        "I'm a self-taught learner who enjoys exploring new tools and development methods daily.",
        "I have hands-on experience designing and delivering quality software."
      ];

  const firstParagraph = paragraphs[0];
  const restParagraphs = paragraphs.slice(1);

  const animations = ["flip-left", "flip-up", "flip-right"];

  return (
    <div>
      <HeaderPage />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imageSource} alt={profile?.name || 'About'} className="sobre-mi-img" />
              <a href={cvLink} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                Download CV
              </a>
            </div>

            <div className="sobre-mi-info">
              <p>{firstParagraph}</p>

              {restParagraphs.length > 0 && (
                <div className="hide parrafo-active">
                  {restParagraphs.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>
              )}

              {restParagraphs.length > 0 && (
                <div className="btn-info">
                  <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
                </div>
              )}
            </div>
          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              {skills.map((skill, index) => {
                const anim = animations[index % animations.length];
                return (
                  <div className="skill-card" data-aos={anim} data-aos-delay="300" key={skill._id || index}>
                    <img
                      alt={skill.name}
                      className="skills-img icon-li"
                      src={skill.icon}
                      title={skill.title || skill.name}
                    />
                    <h2 className="skill-name">{skill.name}</h2>
                    <p className="skill-info">
                      {skill.description || `Experience in ${skill.name} for building responsive applications.`}
                    </p>
                  </div>
                );
              })}
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

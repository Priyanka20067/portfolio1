import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';



/* Img */
const proyectsImg = require.context('../../img', true);

const Project = () => {
  const [estadoModal17, cambiarEstadoModal17] = useState(false);
  const [estadoModal14, cambiarEstadoModal14] = useState(false);
  const [estadoModal15, cambiarEstadoModal15] = useState(false);
  const [estadoModal16, cambiarEstadoModal16] = useState(false);
  const [estadoModal13, cambiarEstadoModal13] = useState(false);
  const [estadoModal12, cambiarEstadoModal12] = useState(false);
  const [estadoModal11, cambiarEstadoModal11] = useState(false);
  const [estadoModal10, cambiarEstadoModal10] = useState(false);
  const [estadoModal9, cambiarEstadoModal9] = useState(false);
  const [estadoModal8, cambiarEstadoModal8] = useState(false);
  const [estadoModal7, cambiarEstadoModal7] = useState(false);
  const [estadoModal6, cambiarEstadoModal6] = useState(false);
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
      <section className="proyectos mas-proyect" id="proyectos">
  <h1 className="heading" data-section="Nav" data-value="projects">
    Projects
  </h1>
  <nav className="navbar nav-proj">
    <NavLink to="/project" offset={-150} duration={500}>
      Websites
    </NavLink>
    <NavLink to="/project/app" offset={-150} duration={500}>
      Apps
    </NavLink>
    <NavLink to="/project/game" offset={-150} duration={500}>
      Games
    </NavLink>
  </nav>
</section>


        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal17(!estadoModal17)}>
              <img src={proyectsImg(`./proyecto-14.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal14(!estadoModal14)}>
              <img src={proyectsImg(`./proyecto-web-11.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal14(!estadoModal14)}>
              <img src={proyectsImg(`./Admin.png`)} alt="" className="projects__img" />
            </a>
          </div>
          
        </section>
      </main>
      <div className="content-modal">
  <div className="pw-content">
    <div className="eins-modal-preview">
      <img src={proyectsImg(`./proyecto-14.png`)} alt="" />
    </div>
    <div className="eins-modal-text">
      <p>
      Flower shop
      </p>
      <p>
        Designed to visually attract the user, with excellent quality culinary preparations and an interface with attractive transitions.
      </p>
      <div className="eins-modal-text-2">
        <span>Link:</span> <a href="https://flower-shop-elpyn52ey-priyankas-projects-cd5834ae.vercel.app/" target="_blank">https://tato-food.com</a>
      </div>
      <div className="eins-modal-text-3">
        <span>Used technology:</span>
        <div className="eins-modal-tec">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="content-modal">
  <div className="pw-content">
    <div className="eins-modal-preview">
      <img src={proyectsImg(`./proyecto-web-11.png`)} alt="" />
    </div>
    <div className="eins-modal-text">
      <p>
        justice, create from ecommerce website
      </p>
      <p>
        Focused on showing the client the value, experience and professionalism of the lawyers they can hire, choosing the category of their specific case.
      </p>
      <div className="eins-modal-text-2">
        <span>Link:</span> <a href="https://e-commerce-ko3eek2t6-priyankas-projects-cd5834ae.vercel.app/" target="_blank">https://justice.com</a>
      </div>
      <div className="eins-modal-text-3">
        <span>Used technology:</span>
        <div className="eins-modal-tec">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="content-modal">
  <div className="pw-content">
    <div className="eins-modal-preview">
      <img src={proyectsImg(`./Admin.png`)} alt="" />
    </div>
    <div className="eins-modal-text">
      <p>
      Flower shop
      </p>
      <p>
        Designed to visually attract the user, with excellent quality culinary preparations and an interface with attractive transitions.
      </p>
      <div className="eins-modal-text-2">
        <span>Link:</span> <a href="https://admin-dashboard-k7ej28j61-priyankas-projects-cd5834ae.vercel.app/dashboard" target="_blank">https://tato-food.com</a>
      </div>
      <div className="eins-modal-text-3">
        <span>Used technology:</span>
        <div className="eins-modal-tec">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

      

      <ScrollToTop />

      <Footer />
    </div>
  )
}
export default Project;
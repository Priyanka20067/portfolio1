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
              <img src={proyectsImg(`./proyecto-14.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal15(!estadoModal15)}>
              <img src={proyectsImg(`./proyecto-15.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal16(!estadoModal16)}>
              <img src={proyectsImg(`./proyecto-16.jpg`)} className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal13(!estadoModal13)}>
              <img src={proyectsImg(`./proyecto-13.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal12(!estadoModal12)}>
              <img src={proyectsImg(`./proyecto-12.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal11(!estadoModal11)}>
              <img src={proyectsImg(`./proyecto-11.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal10(!estadoModal10)}>
              <img src={proyectsImg(`./proyecto-10.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal9(!estadoModal9)}>
              <img src={proyectsImg(`./proyecto-9.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal8(!estadoModal8)}>
              <img src={proyectsImg(`./proyecto-8.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal7(!estadoModal7)}>
              <img src={proyectsImg(`./proyecto-7.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal6(!estadoModal6)}>
              <img src={proyectsImg(`./proyecto-6.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal5(!estadoModal5)}>
              <img src={proyectsImg(`./proyecto-5.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal3(!estadoModal3)}>
              <img src={proyectsImg(`./proyecto-3.jpg`)} alt="" className="projects__img" />
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
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="content-modal">
  <div className="pw-content">
    <div className="eins-modal-preview">
      <img src={proyectsImg(`./proyecto-14-com.png`)} alt="" />
    </div>
    <div className="eins-modal-text">
      <p>
        Justice, page created for law firm.
      </p>
      <p>
        Focused on showing the client the value, experience and professionalism of the lawyers they can hire, choosing the category of their specific case.
      </p>
      <div className="eins-modal-text-2">
        <span>Link:</span> <a href="https://nahuel61920.github.io/Justice" target="_blank">https://justice.com</a>
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
      <img src={proyectsImg(`./proyecto-15-com.png`)} alt="" />
    </div>
    <div className="eins-modal-text">
      <p>
        Magical Effect is a portfolio created for a video development agency.
      </p>
      <p>
        It shows the projects carried out over the years for different types of clients, names their services and years of experience in the industry.
      </p>
      <div className="eins-modal-text-2">
        <span>Link:</span> <a href="https://nahuel61920.github.io/Magical-Effect/" target="_blank">https://magicaleffect.com</a>
      </div>
      <div className="eins-modal-text-3">
        <span>Used technology:</span>
        <div className="eins-modal-tec">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="content-modal">
  <div className="pw-content">
    <div className="eins-modal-preview">
      <img src={proyectsImg(`./proyecto-16-com.png`)} alt="" />
    </div>
    <div className="eins-modal-text">
      <p>
        Crystal Heart Store, is an online clothing store.
      </p>
      <p>
        Designed so that the customer can search for products in a very fast and easy way, can calculate the shipment and pay online.
      </p>
      <div className="eins-modal-text-2">
        <span>Link:</span> <a href="https://crystalheart.empretienda.com.ar/" target="_blank">https://crystalheart.com</a>
      </div>
      <div className="eins-modal-text-3">
        <span>Used technology:</span>
        <div className="eins-modal-tec">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="content-modal">
  <div className="pw-content">
    <div className="eins-modal-preview">
      <img src={proyectsImg(`./proyecto-13-com.png`)} alt="" />
    </div>
    <div className="eins-modal-text">
      <p>
        Inspired Gamer, page created for the sale of digital and physical video games.
      </p>
      <p>
        Developed so that the client can choose their console, be it PSP 5 or Xbox X, and be able to browse exclusive pages for each console.
      </p>
      <div className="eins-modal-text-2">
        <span>Link:</span> <a href="https://nahuel61920.github.io/InspiredGamer" target="_blank">https://inspired-gamer.com</a>
      </div>
      <div className="eins-modal-text-3">
        <span>Used technology:</span>
        <div className="eins-modal-tec">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="content-modal">
  <div className="pw-content">
    <div className="eins-modal-preview">
      <img src={proyectsImg(`./proyecto-12-com.png`)} alt="" />
    </div>
    <div className="eins-modal-text">
      <p>
        Every Running, page developed for the sale of unisex shoes.
      </p>
      <p>
        Designed so that the customer can choose the shoe model, see which one best suits their budget and which are the best valued by buyers.
      </p>
      <div className="eins-modal-text-2">
        <span>Link:</span> <a href="https://nahuel61920.github.io/EveryRunning" target="_blank">https://every-running.com</a>
      </div>
      <div className="eins-modal-text-3">
        <span>Used technology:</span>
        <div className="eins-modal-tec">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>


      <div className="content-modal">
  <div className="pw-content">
    <div className="eins-modal-preview">
      <img src={proyectsImg(`./proyecto-app-17-com.png`)} alt="" />
    </div>
    <div className="eins-modal-text">
      <p>
        TatoFood, page created for the sale of fast food.
      </p>
      <p>
        Designed to visually attract the user, with excellent quality culinary preparations and an interface with attractive transitions.
      </p>
      <div className="eins-modal-text-2">
        <span>Link:</span> <a href="https://nahuel61920.github.io/TatoFood/" target="_blank">https://tato-food.com</a>
      </div>
      <div className="eins-modal-text-3">
        <span>Used technology:</span>
        <div className="eins-modal-tec">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="content-modal">
  <div className="pw-content">
    <div className="eins-modal-preview">
      <img src={proyectsImg(`./proyecto-14-com.png`)} alt="" />
    </div>
    <div className="eins-modal-text">
      <p>
        Justice, page created for law firm.
      </p>
      <p>
        Focused on showing the client the value, experience and professionalism of the lawyers they can hire, choosing the category of their specific case.
      </p>
      <div className="eins-modal-text-2">
        <span>Link:</span> <a href="https://nahuel61920.github.io/Justice" target="_blank">https://justice.com</a>
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
      <img src={proyectsImg(`./proyecto-15-com.png`)} alt="" />
    </div>
    <div className="eins-modal-text">
      <p>
        Magical Effect is a portfolio created for a video development agency.
      </p>
      <p>
        It shows the projects carried out over the years for different types of clients, names their services and years of experience in the industry.
      </p>
      <div className="eins-modal-text-2">
        <span>Link:</span> <a href="https://nahuel61920.github.io/Magical-Effect/" target="_blank">https://magicaleffect.com</a>
      </div>
      <div className="eins-modal-text-3">
        <span>Used technology:</span>
        <div className="eins-modal-tec">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="content-modal">
  <div className="pw-content">
    <div className="eins-modal-preview">
      <img src={proyectsImg(`./proyecto-16-com.png`)} alt="" />
    </div>
    <div className="eins-modal-text">
      <p>
        Crystal Heart Store, is an online clothing store.
      </p>
      <p>
        Designed so that the customer can search for products in a very fast and easy way, can calculate the shipment and pay online.
      </p>
      <div className="eins-modal-text-2">
        <span>Link:</span> <a href="https://crystalheart.empretienda.com.ar/" target="_blank">https://crystalheart.com</a>
      </div>
      <div className="eins-modal-text-3">
        <span>Used technology:</span>
        <div className="eins-modal-tec">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="content-modal">
  <div className="pw-content">
    <div className="eins-modal-preview">
      <img src={proyectsImg(`./proyecto-13-com.png`)} alt="" />
    </div>
    <div className="eins-modal-text">
      <p>
        Inspired Gamer, page created for the sale of digital and physical video games.
      </p>
      <p>
        Developed so that the client can choose their console, be it PSP 5 or Xbox X, and be able to browse exclusive pages for each console.
      </p>
      <div className="eins-modal-text-2">
        <span>Link:</span> <a href="https://nahuel61920.github.io/InspiredGamer" target="_blank">https://inspired-gamer.com</a>
      </div>
      <div className="eins-modal-text-3">
        <span>Used technology:</span>
        <div className="eins-modal-tec">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="content-modal">
  <div className="pw-content">
    <div className="eins-modal-preview">
      <img src={proyectsImg(`./proyecto-12-com.png`)} alt="" />
    </div>
    <div className="eins-modal-text">
      <p>
        Every Running, page developed for the sale of unisex shoes.
      </p>
      <p>
        Designed so that the customer can choose the shoe model, see which one best suits their budget and which are the best valued by buyers.
      </p>
      <div className="eins-modal-text-2">
        <span>Link:</span> <a href="https://nahuel61920.github.io/EveryRunning" target="_blank">https://every-running.com</a>
      </div>
      <div className="eins-modal-text-3">
        <span>Used technology:</span>
        <div className="eins-modal-tec">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>


      <Modal
  estado={estadoModal9}
  cambiarEstado={cambiarEstadoModal9}
>
  <div className="content-modal">
    <div className="pw-content">
      <div className="eins-modal-preview">
        <img src={proyectsImg(`./proyecto-9-com.png`)} alt="" />
      </div>
      <div className="eins-modal-text">
        <p>
          Life on paper, page created for a bookstore.
        </p>
        <p>
          Designed so that the customer can purchase physical or digital books, it has a large number of categories so that its readers feel comfortable.
        </p>
        <div className="eins-modal-text-2">
          <span>Link:</span>
          <a href="https://nahuel61920.github.io/vida-en-papel" target="_blank" rel="noopener noreferrer">https://vida-en-papel.com</a>
        </div>
        <div className="eins-modal-text-3">
          <span>Used technology:</span>
          <div className="eins-modal-tec">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JavaScript" />
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>

<Modal
  estado={estadoModal8}
  cambiarEstado={cambiarEstadoModal8}
>
  <div className="content-modal">
    <div className="pw-content">
      <div className="eins-modal-preview">
        <img src={proyectsImg(`./proyecto-8-com.png`)} alt="" />
      </div>
      <div className="eins-modal-text">
        <p>
          Shop Tec, is an ecommerce developed for the purchase of technological products.
        </p>
        <p>
          It offers a large number of products, as well as the ability to navigate between the different categories of such products.
        </p>
        <div className="eins-modal-text-2">
          <span>Link:</span>
          <a href="https://nahuel61920.github.io/shop-tec" target="_blank" rel="noopener noreferrer">https://shop-tec.com</a>
        </div>
        <div className="eins-modal-text-3">
          <span>Used technology:</span>
          <div className="eins-modal-tec">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JavaScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" />
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>


      <Modal
  estado={estadoModal7}
  cambiarEstado={cambiarEstadoModal7}
>
  <div className="content-modal">
    <div className="pw-content">
      <div className="eins-modal-preview">
        <img src={proyectsImg(`./proyecto-7-com.png`)} alt="" />
      </div>
      <div className="eins-modal-text">
        <p>
          Power engine, is a car sales website.
        </p>
        <p>
          Developed so that the customer can purchase the car of their dreams, it uses a slider system in many of its sections to facilitate the interaction of the page with users.
        </p>
        <div className="eins-modal-text-2">
          <span>Link:</span>
          <a href="https://nahuel61920.github.io/Power-Engine" target="_blank" rel="noopener noreferrer">https://power-engine.com</a>
        </div>
        <div className="eins-modal-text-3">
          <span>Used technology:</span>
          <div className="eins-modal-tec">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JavaScript" />
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>

<Modal
  estado={estadoModal6}
  cambiarEstado={cambiarEstadoModal6}
>
  <div className="content-modal">
    <div className="pw-content">
      <div className="eins-modal-preview">
        <img src={proyectsImg(`./proyecto-6-com.png`)} alt="" />
      </div>
      <div className="eins-modal-text">
        <p>
          Spider-Man fan page, is a project developed in honor of Spider-Man.
        </p>
        <p>
          It offers a wide variety of information about Spider-Man and his multi-verse variants, as well as facts and trivia about his enemies and allies.
        </p>
        <div className="eins-modal-text-2">
          <span>Link:</span>
          <a href="https://nahuel61920.github.io/Spider-Man" target="_blank" rel="noopener noreferrer">https://spider-man-fans-page.com</a>
        </div>
        <div className="eins-modal-text-3">
          <span>Used technology:</span>
          <div className="eins-modal-tec">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JavaScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>

      <Modal
  estado={estadoModal5}
  cambiarEstado={cambiarEstadoModal5}
>
  <div className="content-modal">
    <div className="pw-content">
      <div className="eins-modal-preview">
        <img src={proyectsImg(`./proyecto-5-com.png`)} alt="" />
      </div>
      <div className="eins-modal-text">
        <p>
          PremierFood, page created for the sale of fast food.
        </p>
        <p>
          Designed to visually attract the user, with excellent quality culinary preparations and an interface with attractive transitions.
        </p>
        <div className="eins-modal-text-2">
          <span>Link:</span>
          <a href="https://nahuel61920.github.io/PremierFood" target="_blank" rel="noopener noreferrer">https://premierfood.com</a>
        </div>
        <div className="eins-modal-text-3">
          <span>Used technology:</span>
          <div className="eins-modal-tec">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JavaScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SASS" />
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>


      <Modal
  estado={estadoModal3}
  cambiarEstado={cambiarEstadoModal3}
>
  <div className="content-modal">
    <div className="pw-content">
      <div className="eins-modal-preview">
        <img src={proyectsImg(`./proyecto-3.jpg`)} alt="" />
      </div>
      <div className="eins-modal-text">
        <p>
          ProgramCoffe, a blog designed to inform about the best recipes for your coffee.
        </p>
        <p>
          It offers a large amount of information on the perfect preparations for a good coffee, as well as the temperature at which it must be prepared, as well as the best coffee beans.
        </p>
        <div className="eins-modal-text-2">
          <span>Link:</span>
          <a href="https://nahuel61920.github.io/Blog-Coffe" target="_blank" rel="noopener noreferrer">https://ProgramCoffe.com</a>
        </div>
        <div className="eins-modal-text-3">
          <span>Used technology:</span>
          <div className="eins-modal-tec">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>

      

      <ScrollToTop />

      <Footer />
    </div>
  )
}
export default Project;
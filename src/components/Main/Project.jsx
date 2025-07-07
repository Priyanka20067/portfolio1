import React from 'react';
import '../../pages/Project/ProjectPage.css';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';


// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

// Images
const proyectImg = require.context('../../img', true);

// Project Data
const projects = [
    {
        title: "Calculater",
        description: "Simple, fast, and reliable calculator",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "proyecto-app-18.png",
        demo: "https://calculater-qw9xju6ke-priyankas-projects-cd5834ae.vercel.app/",
        repo: "https://github.com/Priyanka20067/calculater"
    },
    {
        title: "Flower website",
        description: "Flower shop",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "proyecto-14.png",
        demo: "https://flower-shop-elpyn52ey-priyankas-projects-cd5834ae.vercel.app/",
        repo: "https://github.com/Priyanka20067/flower-shop"
    },
    {
        title: "E-commerce",
        description: "E-commerce website",
        tech: ["React and vite"],
        image: "proyecto-web-11.png",
        demo: "https://e-commerce-clfs-i5pava5ft-priyankas-projects-cd5834ae.vercel.app/",
        repo: "https://github.com/Priyanka20067/E-commerce"
    },
    {
        title: "AI-Mental health assistant",
        description: "Health assistant app",
        tech: ["React Native","Node Js","Express","MongoDB"],
        image: "proyecto-app-17.png",
        repo: "https://github.com/Priyanka20067/health-assistant"
    },
    {
        title: "Memory color Game",
        description: "Repeat the color pattern shown. Each round adds one more color",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "proyecto-game-4.jpg",
        demo: "https://memory-color-game-qv1a4mblj-priyankas-projects-cd5834ae.vercel.app/",
        repo: "https://github.com/Priyanka20067/memory-color-game"
    },
  

];

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                Projects
            </h2>
            <div
                className="proyect-site"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    {projects.map((project, index) => (
                        <SwiperSlide className='caja' key={index}>
                            <img
                                src={proyectImg(`./${project.image}`)}
                                alt={project.title}
                            />
                            <div className="content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <p className="tecnologias">
                                    {project.tech.join(" - ")}
                                </p>
                                <a href={project.demo} className="custom-btn btn" target="_blank" rel="noopener noreferrer">
                                    <span>Demo</span>
                                </a>
                                <a href={project.repo} className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">
                                    Repository
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>

            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet />
                </Link>
            </div>
        </section>
    );
};

export default React.memo(Project);

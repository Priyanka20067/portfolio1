import React from 'react';
import '../../pages/Project/ProjectPage.css';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';
import { FormattedMessage } from 'react-intl';

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
        tech: ["HTML5", "CSS", "JavaScript"],
        image: "proyecto-app-18.png",
        demo: "https://calculater-qw9xju6ke-priyankas-projects-cd5834ae.vercel.app/",
        repo: "https://github.com/Priyanka20067/calculater"
    },
    {
        title: "Flower website",
        description: "Lawyers website",
        tech: ["HTML5", "CSS", "JavaScript", "jQuery", "Bootstrap"],
        image: "proyecto-14.jpg",
        demo: "https://flower-shop-seven-plum.vercel.app/",
        repo: "https://github.com/Nahuel61920/Justice"
    },
    {
        title: "PI Dogs",
        description: "Individual Project",
        tech: ["React", "CSS", "Redux", "NodeJS", "ExpressJS", "Sequelize", "PostgreSQL"],
        image: "proyecto-app-17.png",
        demo: "https://pi-dogs-main-ashy.vercel.app/",
        repo: "https://github.com/Nahuel61920/PI-DOGS-MAIN"
    },
    {
        title: "Power Engine",
        description: "Automobiles Website",
        tech: ["HTML5", "CSS", "JavaScript"],
        image: "proyecto-7.jpg",
        demo: "https://nahuel61920.github.io/Power-Engine/",
        repo: "https://github.com/Nahuel61920/Power-Engine"
    },
    {
        title: "Spider-Man fan page",
        description: "Fan page Spider-Man",
        tech: ["HTML5", "CSS", "JavaScript", "Bootstrap"],
        image: "proyecto-6.jpg",
        demo: "https://nahuel61920.github.io/Spider-Man/",
        repo: "https://github.com/Nahuel61920/Spider-Man"
    },
    {
        title: "EveryRunning",
        description: "Website shoes",
        tech: ["HTML5", "CSS", "JavaScript", "Bootstrap"],
        image: "proyecto-12.jpg",
        demo: "https://nahuel61920.github.io/EveryRunning/",
        repo: "https://github.com/Nahuel61920/EveryRunning"
    },
    {
        title: "Premier Food",
        description: "Fast food",
        tech: ["HTML5", "CSS", "JavaScript", "Sass"],
        image: "proyecto-5.jpg",
        demo: "https://nahuel61920.github.io/PremierFood/",
        repo: "https://github.com/Nahuel61920/PremierFood"
    },
    {
        title: "ShopTec",
        description: "Ecommerce",
        tech: ["HTML5", "CSS", "Sass", "JavaScript"],
        image: "proyecto-8.jpg",
        demo: "https://nahuel61920.github.io/shop-tec/",
        repo: "https://github.com/Nahuel61920/shop-tec"
    },
    {
        title: "Elegant Hand",
        description: "Watch Shop",
        tech: ["HTML5", "CSS", "JavaScript"],
        image: "proyecto-10.jpg",
        demo: "https://nahuel61920.github.io/ElegantHand/",
        repo: "https://github.com/Nahuel61920/ElegantHand"
    },
    {
        title: "Vida en papel",
        description: "Bookstore",
        tech: ["HTML5", "CSS", "JavaScript"],
        image: "proyecto-9.jpg",
        demo: "https://nahuel61920.github.io/vida-en-papel/",
        repo: "https://github.com/Nahuel61920/vida-en-papel"
    },
    {
        title: "Plus Anime",
        description: "Anime website",
        tech: ["HTML5", "CSS", "JavaScript"],
        image: "proyecto-11.jpg",
        demo: "https://nahuel61920.github.io/PlusAnime/",
        repo: "https://github.com/Nahuel61920/PlusAnime"
    }
];

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage id='projects' defaultMessage='Projects' />
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

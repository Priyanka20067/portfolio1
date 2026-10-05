import React from 'react';
import '../../pages/Project/ProjectPage.css';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';
import { usePortfolio } from '../../context/PortfolioContext';
import { resolveImage } from '../../utils/imageHelper';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
    const { projects } = usePortfolio();

    // Show featured projects or all projects
    const displayProjects = projects.filter(p => p.featured);
    const list = displayProjects.length > 0 ? displayProjects : projects;

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
                    loop={list.length > 2}
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
                    {list.map((project, index) => (
                        <SwiperSlide className='caja' key={project._id || index}>
                            <img
                                src={resolveImage(project.image)}
                                alt={project.title}
                            />
                            <div className="content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                {project.tech && project.tech.length > 0 && (
                                    <p className="tecnologias">
                                        {Array.isArray(project.tech) ? project.tech.join(" - ") : project.tech}
                                    </p>
                                )}
                                {project.demo && (
                                    <a href={project.demo} className="custom-btn btn" target="_blank" rel="noopener noreferrer">
                                        <span>Demo</span>
                                    </a>
                                )}
                                {project.repo && (
                                    <a href={project.repo} className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">
                                        Repository
                                    </a>
                                )}
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

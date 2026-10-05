import React, { useState } from 'react';
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Component */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Portfolio Context & Image Helper */
import { usePortfolio } from '../../context/PortfolioContext';
import { resolveImage } from '../../utils/imageHelper';

const ProjectGame = () => {
    const { projects } = usePortfolio();
    const [selectedProject, setSelectedProject] = useState(null);

    // Filter game projects from DB
    const gameProjects = projects.filter(p => p.category === 'game');

    return (
        <div>
            <HeaderPage />

            <main>
                <section className="proyectos mas-proyect" id="proyectos">
                    <h1 className="heading">Projects</h1>
                    <nav className="navbar nav-proj">
                        <NavLink to="/project">
                            Websites
                        </NavLink>
                        <NavLink to="/project/app">
                            Apps
                        </NavLink>
                        <NavLink to="/project/game" className={({ isActive }) => isActive ? "active" : ""}>
                            Games
                        </NavLink>
                    </nav>
                </section>

                <section className="projects__grid games">
                    {gameProjects.map((project, index) => (
                        <div className="projects__item" key={project._id || index}>
                            <a
                                href="#modal"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedProject(project);
                                }}
                            >
                                <img
                                    src={resolveImage(project.image)}
                                    alt={project.title}
                                    className="projects__img"
                                />
                            </a>
                        </div>
                    ))}
                </section>
            </main>

            {/* Dynamic Game Details Modal */}
            <Modal
                estado={Boolean(selectedProject)}
                cambiarEstado={() => setSelectedProject(null)}
            >
                {selectedProject && (
                    <div className="content-modal">
                        <div className="pw-content">
                            <div className="eins-modal-preview">
                                <img
                                    src={resolveImage(selectedProject.image)}
                                    alt={selectedProject.title}
                                />
                            </div>
                            <div className="eins-modal-text">
                                <p>{selectedProject.title}</p>
                                <p>{selectedProject.description}</p>
                                {(selectedProject.demo || selectedProject.repo) && (
                                    <div className="eins-modal-text-2">
                                        <span>Link:</span>{" "}
                                        <a
                                            href={selectedProject.demo || selectedProject.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {selectedProject.demo || selectedProject.repo}
                                        </a>
                                    </div>
                                )}
                                {selectedProject.tech && selectedProject.tech.length > 0 && (
                                    <div className="eins-modal-text-3">
                                        <span>Used technology:</span>
                                        <div className="eins-modal-tec" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                                            {selectedProject.tech.map((t, idx) => (
                                                <span
                                                    key={idx}
                                                    style={{
                                                        padding: '4px 10px',
                                                        background: 'rgba(255,255,255,0.1)',
                                                        borderRadius: '6px',
                                                        fontSize: '13px',
                                                        color: '#00d2df'
                                                    }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default ProjectGame;

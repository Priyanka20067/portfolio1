import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">About Me</h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>Who I am</h3>
                <h4>
                    My name is Priyanka and I am a full stack developer and also app developer.
                </h4>
                <p>
                    Hello everyone, my name is Priyanka and I am a full stack developer and also app developer. I have been working in this field for 1 year. I am constantly updating the technologies I already master, but also looking to learn new technologies to enrich my skills and improve my good practices as a developer.
                </p>
                <ul>
                    <li><p><span>Age:</span> 19</p></li>
                    <li><p><span>Hobbies:</span> Athletic, kho kho, and Programming</p></li>
                    <li><p><span>Email:</span> priyankam18042006@gmail.com</p></li>
                    <li><p><span>From:</span> Vellore</p></li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        Download CV
                    </a>
                    <div className='mas-info-btn'>
                        <Link to="/about">
                            <ButtomGet />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>Skills</h3>

                <h4>Front-End</h4>
                <div className="skill">
                    
                        <div>
                            <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                            <h5>HTML</h5>
                        </div>
                        <div>
                            <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                            <h5>CSS</h5>
                        </div>
                        <div>
                            <img alt="JavaScript" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                            <h5>JavaScript</h5>
                        </div>
                        <div>
                            <img alt="React.js" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <h5>React.js</h5>
                        </div>
                        <div>
                            <img alt="Vite" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" />
                            <h5>Vite</h5>
                        </div>
                    
                </div>

                <h4>Back-End</h4>
                <div className="skill">
                    <div>
                        <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h5>NodeJs</h5>
                    </div>
                    <div>
                        <img alt="Express" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        <h5>Express</h5>
                    </div>
                    <div>
                        <img alt="MySQL" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                        <h5>MySQL</h5>
                    </div>
                    <div>
                        <img alt="MongoDB" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongoDB</h5>
                    </div>
                </div>
                <h4>App</h4>
                 <div className="skill">
                     <div>
                            <img alt="React Native" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <h5>React Native</h5>
                        </div>
                        <div>
                            <img alt="Android" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" />
                            <h5>Android</h5>
                        </div>
                </div>

                <h4>Tools</h4>
                <div className="skill">
                    <div>
                        <img alt="Figma" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title="Figma" />
                        <h5>Figma</h5>
                    </div>
                    <div>
                        <img alt="VS Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" title="Visual Studio Code" />
                        <h5>VS Code</h5>
                    </div>
                    <div>
                        <img alt="Git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git" />
                        <h5>Git</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);

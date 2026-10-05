import React from 'react';
import '../../pages/About/AboutPage.css';
import { Link } from 'react-router-dom';
import defaultCv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';
import { usePortfolio } from '../../context/PortfolioContext';

const About = () => {
    const { profile, skills } = usePortfolio();

    const whoIAmTitle = profile?.whoIAmTitle || 'Who I am';
    const whoIAmSubtitle = profile?.whoIAmSubtitle || 'My name is Priyanka and I am a full stack developer and also app developer.';
    const aboutDescription = profile?.aboutDescription || 'Hello everyone, my name is Priyanka and I am a full stack developer and also app developer. I have been working in this field for 1 year.';
    const age = profile?.age || '19';
    const hobbies = profile?.hobbies || 'Athletic, kho kho, and Programming';
    const email = profile?.email || 'priyankam18042006@gmail.com';
    const from = profile?.from || 'Vellore';
    const cvLink = profile?.cvUrl || defaultCv;

    // Filter skills by category dynamically
    const categories = ['Front-End', 'Back-End', 'App', 'Tools'];

    return (
        <section className="sobre-mi" id="sobre-mi">
            <h2 className="heading">About Me</h2>

            <div className="row container">
                <div className="columns" data-aos="fade-right" data-aos-delay="300">
                    <h3>{whoIAmTitle}</h3>
                    <h4>{whoIAmSubtitle}</h4>
                    <p>{aboutDescription}</p>
                    <ul>
                        <li><p><span>Age:</span> {age}</p></li>
                        <li><p><span>Hobbies:</span> {hobbies}</p></li>
                        <li><p><span>Email:</span> {email}</p></li>
                        <li><p><span>From:</span> {from}</p></li>
                    </ul>
                    <div className="mas-info">
                        <a href={cvLink} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
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

                    {categories.map((cat) => {
                        const catSkills = skills.filter(s => s.category === cat);
                        if (catSkills.length === 0) return null;
                        return (
                            <React.Fragment key={cat}>
                                <h4>{cat}</h4>
                                <div className="skill">
                                    {catSkills.map((sk, idx) => (
                                        <div key={sk._id || idx}>
                                            <img
                                                alt={sk.name}
                                                className="icons-skils"
                                                src={sk.icon}
                                                title={sk.title || sk.name}
                                            />
                                            <h5>{sk.name}</h5>
                                        </div>
                                    ))}
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default React.memo(About);

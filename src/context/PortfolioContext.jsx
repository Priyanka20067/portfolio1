import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Default initial state as fallback
const initialProfileState = {
  name: 'Priyanka AM',
  badge: '🦄',
  logoTitle: 'PRIYANKA',
  greeting: 'Hello',
  role: 'Full-stack developer',
  whoIAmTitle: 'Who I am',
  whoIAmSubtitle: 'My name is Priyanka and I am a full stack developer and also app developer.',
  aboutDescription: 'Hello everyone, my name is Priyanka and I am a full stack developer and also app developer. I have been working in this field for 1 year. I am constantly updating the technologies I already master, but also looking to learn new technologies to enrich my skills and improve my good practices as a developer.',
  aboutFullParagraphs: [
    "Hi, I'm Priyanka, a student at the Technological University of Tucumán. I'm deeply passionate about programming and web development. My journey began in 2020 when I created my first web page using just HTML and CSS. That experience sparked a lasting interest in front-end development, and to this day, I still feel the same excitement every time I build something new using HTML, CSS, JavaScript, and other technologies.",
    "I'm a self-taught learner who enjoys exploring new tools and development methods daily. I believe that continuous learning is key to growing as a developer and staying up-to-date in this ever-evolving tech world.",
    "I have hands-on experience as a freelance web designer and developer, which has allowed me to work on a variety of projects tailored to clients' needs and budgets. These opportunities helped me enhance my skills, problem-solving abilities, and adaptability. I've also participated in both online and in-person courses to further deepen my knowledge and fuel my passion for web development."
  ],
  age: '19',
  hobbies: 'Athletic, kho kho, and Programming',
  email: 'priyankam18042006@gmail.com',
  phone: '8072776141',
  from: 'Vellore',
  cvUrl: '',
  aboutImg: '',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/priyanka-am-7b95722a5/',
    github: 'https://github.com/Priyanka20067',
    instagram: 'https://www.instagram.com/nahuelcarrizolc/',
    whatsapp: 'https://api.whatsapp.com/send?phone=8072776141',
    telegram: 'https://web.telegram.org/k/'
  },
  contactTypeAnimation: ['Gmail', 'WhatsApp', 'Telegram', 'Linkedin', 'GitHub']
};

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [profile, setProfile] = useState(initialProfileState);
  const [skills, setSkills] = useState([]);
  const [services, setServices] = useState([]);
  const [pricing, setPricing] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = '/api';

  const fetchPortfolio = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/portfolio`);

      if (!res.ok) {
        throw new Error(`Failed to fetch portfolio data: ${res.statusText}`);
      }

      const data = await res.json();
      if (data.profile) setProfile(data.profile);
      if (data.skills && data.skills.length > 0) setSkills(data.skills);
      if (data.services && data.services.length > 0) setServices(data.services);
      if (data.pricing && data.pricing.length > 0) setPricing(data.pricing);
      if (data.faqs && data.faqs.length > 0) setFaqs(data.faqs);
      if (data.projects && data.projects.length > 0) setProjects(data.projects);

      setError(null);
    } catch (err) {
      console.warn('Could not fetch portfolio from backend API, using fallback:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [API_BASE]);

  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        skills,
        services,
        pricing,
        faqs,
        projects,
        loading,
        error,
        refreshPortfolio: fetchPortfolio,
        API_BASE
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

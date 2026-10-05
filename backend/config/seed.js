// backend/config/seed.js
const Profile = require('../models/Profile');
const Skill = require('../models/Skill');
const Service = require('../models/Service');
const Pricing = require('../models/Pricing');
const Faq = require('../models/Faq');
const Project = require('../models/Project');

const initialProfile = {
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

const initialSkills = [
  // Front-End
  {
    name: 'HTML',
    title: 'HTML5',
    category: 'Front-End',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    description: 'More than a year of professional experience in this language, allows me to perform without problems in the industry.',
    order: 1
  },
  {
    name: 'CSS',
    title: 'CSS3',
    category: 'Front-End',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    description: 'More than a year of work experience in this language, I use it daily to develop web designs and interfaces.',
    order: 2
  },
  {
    name: 'JavaScript',
    title: 'Java Script',
    category: 'Front-End',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
    description: 'A year of experience using it in the front-end and back-end branch, allowed me to familiarize myself with the language, and include it in my work projects.',
    order: 3
  },
  {
    name: 'React.js',
    title: 'ReactJS',
    category: 'Front-End',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'More than a year using this JavaScript framework, carrying out multiple personal and work projects.',
    order: 4
  },
  {
    name: 'Vite',
    title: 'Vite',
    category: 'Front-End',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
    description: 'I have been using Vite for the past six months in my projects. It significantly improves the development experience with fast builds and hot module replacement.',
    order: 5
  },
  // Back-End
  {
    name: 'NodeJs',
    title: 'NodeJS',
    category: 'Back-End',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    description: 'It is the cross-platform runtime environment that I use to make my web applications scalable.',
    order: 6
  },
  {
    name: 'Express',
    title: 'Express',
    category: 'Back-End',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    description: 'It is a framework that I use mostly to manage my APIs and my HTTP execution model.',
    order: 7
  },
  {
    name: 'MySQL',
    title: 'MySQL',
    category: 'Back-End',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
    description: 'Relational database management for storing structured application data.',
    order: 8
  },
  {
    name: 'MongoDB',
    title: 'MongoDB',
    category: 'Back-End',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg',
    description: 'I have experience using MongoDB for building scalable and flexible NoSQL databases. It is my go-to choice for modern full-stack applications.',
    order: 9
  },
  // App
  {
    name: 'React Native',
    title: 'React Native',
    category: 'App',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'I have experience building cross-platform mobile applications using React Native, enabling fast development and a native-like user experience.',
    order: 10
  },
  {
    name: 'Android',
    title: 'Android',
    category: 'App',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
    description: 'Developing responsive and performant mobile native applications.',
    order: 11
  },
  // Tools
  {
    name: 'Figma',
    title: 'Figma',
    category: 'Tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    description: 'UI/UX design tool for crafting wireframes, interactive prototypes, and design systems.',
    order: 12
  },
  {
    name: 'VS Code',
    title: 'VS Code',
    category: 'Tools',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png',
    description: 'Code editor used for daily full-stack development and debugging.',
    order: 13
  },
  {
    name: 'Git',
    title: 'Git',
    category: 'Tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    description: 'Version control system for collaboration, branching, and code management.',
    order: 14
  }
];

const initialServices = [
  {
    title: 'Design UX/UI',
    icon: 'fas fa-drafting-compass',
    description: 'Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website.',
    order: 1
  },
  {
    title: 'Web development',
    icon: 'fas fa-laptop',
    description: 'Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.',
    order: 2
  },
  {
    title: 'App Development',
    icon: 'fas fa-chart-line',
    description: 'Design and development of high-performance mobile and web applications tailored to client needs, with modern UI/UX, smooth functionality, and cross-platform support for Android, iOS, and web.',
    order: 3
  }
];

const initialPricing = [
  {
    title: 'Essential',
    subtitle: 'Perfect for new businesses',
    price: 100,
    currency: '$',
    features: [
      '1 responsive page',
      '+3 sections for page',
      'Contact Form',
      'Domain for 1 year',
      'Hosting for 1 year'
    ],
    isRecommended: false,
    order: 1
  },
  {
    title: 'Professional',
    subtitle: 'App Development',
    price: 800,
    currency: '$',
    features: [
      '3 responsive pages',
      '+3 sections for page',
      'Contact Form',
      'Domain for 1 year',
      'Hosting for 1 year',
      'Free maintenance for 6 months'
    ],
    isRecommended: true,
    order: 2
  },
  {
    title: 'Premium',
    subtitle: 'Great for large websites',
    price: 700,
    currency: '$',
    features: [
      '+10 responsive pages',
      '+3 sections for page',
      'Contact Form',
      'Domain for 1 year',
      'Hosting for 1 year',
      'Animations',
      'Free maintenance for 1 year',
      'Delivered in 14 business days'
    ],
    isRecommended: false,
    order: 3
  }
];

const initialFaqs = [
  {
    question: 'What is a responsive web page?',
    answer: 'It is that page that is capable of adapting to any device where it is viewed, such as cell phones, tablets, laptops, without losing appearance or usability.',
    order: 1
  },
  {
    question: 'What is a Domain and a Hosting?',
    answer: 'Both are essential elements of a website. In short, the domain name is the address of the web page, while the hosting provides the space and resources necessary to launch the website.',
    order: 2
  },
  {
    question: 'Is monthly maintenance necessary?',
    answer: 'Regular maintenance of your website allows you to attract and retain customers with new information, new products and services, in addition to helping you maintain or improve your ranking in Google.',
    order: 3
  },
  {
    question: 'How to pay',
    answer: 'You can pay online by credit or debit cards and payments by transfers.',
    order: 4
  }
];

const initialProjects = [
  {
    title: 'Flower website',
    description: 'Flower shop designed to visually attract the user, with excellent quality culinary preparations and an interface with attractive transitions.',
    category: 'website',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'proyecto-14.png',
    demo: 'https://flower-shop-elpyn52ey-priyankas-projects-cd5834ae.vercel.app/',
    repo: 'https://github.com/Priyanka20067/flower-shop',
    featured: true,
    order: 1
  },
  {
    title: 'E-commerce',
    description: 'E-commerce website focused on showing client experience and value with interactive transitions.',
    category: 'website',
    tech: ['React and vite'],
    image: 'proyecto-web-11.png',
    demo: 'https://e-commerce-clfs-i5pava5ft-priyankas-projects-cd5834ae.vercel.app/',
    repo: 'https://github.com/Priyanka20067/E-commerce',
    featured: true,
    order: 2
  },
  {
    title: 'Admin Dashboard',
    description: 'Comprehensive administrative dashboard with modern UI, statistics, and interactive controls.',
    category: 'website',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'Admin.png',
    demo: 'https://admin-dashboard-k7ej28j61-priyankas-projects-cd5834ae.vercel.app/dashboard',
    repo: 'https://github.com/Priyanka20067/admin-dashboard',
    featured: false,
    order: 3
  },
  {
    title: 'Calculater',
    description: 'Simple, fast, and reliable calculator application.',
    category: 'app',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'proyecto-app-18.png',
    demo: 'https://calculater-qw9xju6ke-priyankas-projects-cd5834ae.vercel.app/',
    repo: 'https://github.com/Priyanka20067/calculater',
    featured: true,
    order: 4
  },
  {
    title: 'AI-Mental health assistant',
    description: 'Health assistant mobile app built to support mental well-being and active care tracking.',
    category: 'app',
    tech: ['React Native', 'Node Js', 'Express', 'MongoDB'],
    image: 'proyecto-app-17.png',
    demo: '',
    repo: 'https://github.com/Priyanka20067/health-assistant',
    featured: true,
    order: 5
  },
  {
    title: 'Memory color Game',
    description: 'Repeat the color pattern shown. Each round adds one more color.',
    category: 'game',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'proyecto-game-4.jpg',
    demo: 'https://memory-color-game-qv1a4mblj-priyankas-projects-cd5834ae.vercel.app/',
    repo: 'https://github.com/Priyanka20067/memory-color-game',
    featured: true,
    order: 6
  },
  {
    title: 'Floppy Bird',
    description: 'Classic arcade bird flying game with obstacles, score tracking, and smooth physics.',
    category: 'game',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: 'floppybird.png',
    demo: '',
    repo: 'https://github.com/Priyanka20067/floppy-bird',
    featured: false,
    order: 7
  }
];

const seedDatabase = async () => {
  try {
    const profileCount = await Profile.countDocuments();
    if (profileCount === 0) {
      await Profile.create(initialProfile);
      console.log('Seeded Profile collection');
    }

    const skillCount = await Skill.countDocuments();
    if (skillCount === 0) {
      await Skill.insertMany(initialSkills);
      console.log('Seeded Skill collection');
    }

    const serviceCount = await Service.countDocuments();
    if (serviceCount === 0) {
      await Service.insertMany(initialServices);
      console.log('Seeded Service collection');
    }

    const pricingCount = await Pricing.countDocuments();
    if (pricingCount === 0) {
      await Pricing.insertMany(initialPricing);
      console.log('Seeded Pricing collection');
    }

    const faqCount = await Faq.countDocuments();
    if (faqCount === 0) {
      await Faq.insertMany(initialFaqs);
      console.log('Seeded Faq collection');
    }

    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      await Project.insertMany(initialProjects);
      console.log('Seeded Project collection');
    }
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

module.exports = {
  seedDatabase,
  initialProfile,
  initialSkills,
  initialServices,
  initialPricing,
  initialFaqs,
  initialProjects
};

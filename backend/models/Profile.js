const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, default: 'Priyanka AM' },
  badge: { type: String, default: '🦄' },
  logoTitle: { type: String, default: 'PRIYANKA' },
  greeting: { type: String, default: 'Hello' },
  role: { type: String, default: 'Full-stack developer' },
  whoIAmTitle: { type: String, default: 'Who I am' },
  whoIAmSubtitle: { type: String, default: 'My name is Priyanka and I am a full stack developer and also app developer.' },
  aboutDescription: { type: String, default: 'Hello everyone, my name is Priyanka and I am a full stack developer and also app developer. I have been working in this field for 1 year. I am constantly updating the technologies I already master, but also looking to learn new technologies to enrich my skills and improve my good practices as a developer.' },
  aboutFullParagraphs: {
    type: [String],
    default: [
      "Hi, I'm Priyanka, a student at the Technological University of Tucumán. I'm deeply passionate about programming and web development. My journey began in 2020 when I created my first web page using just HTML and CSS. That experience sparked a lasting interest in front-end development, and to this day, I still feel the same excitement every time I build something new using HTML, CSS, JavaScript, and other technologies.",
      "I'm a self-taught learner who enjoys exploring new tools and development methods daily. I believe that continuous learning is key to growing as a developer and staying up-to-date in this ever-evolving tech world.",
      "I have hands-on experience as a freelance web designer and developer, which has allowed me to work on a variety of projects tailored to clients' needs and budgets. These opportunities helped me enhance my skills, problem-solving abilities, and adaptability. I've also participated in both online and in-person courses to further deepen my knowledge and fuel my passion for web development."
    ]
  },
  age: { type: String, default: '19' },
  hobbies: { type: String, default: 'Athletic, kho kho, and Programming' },
  email: { type: String, default: 'priyankam18042006@gmail.com' },
  phone: { type: String, default: '8072776141' },
  from: { type: String, default: 'Vellore' },
  cvUrl: { type: String, default: '' },
  aboutImg: { type: String, default: '' },
  socialLinks: {
    linkedin: { type: String, default: 'https://www.linkedin.com/in/priyanka-am-7b95722a5/' },
    github: { type: String, default: 'https://github.com/Priyanka20067' },
    instagram: { type: String, default: 'https://www.instagram.com/nahuelcarrizolc/' },
    whatsapp: { type: String, default: 'https://api.whatsapp.com/send?phone=8072776141' },
    telegram: { type: String, default: 'https://web.telegram.org/k/' }
  },
  contactTypeAnimation: {
    type: [String],
    default: ['Gmail', 'WhatsApp', 'Telegram', 'Linkedin', 'GitHub']
  }
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);

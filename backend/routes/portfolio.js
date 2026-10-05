const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const Skill = require('../models/Skill');
const Service = require('../models/Service');
const Pricing = require('../models/Pricing');
const Faq = require('../models/Faq');
const Project = require('../models/Project');
const {
  initialProfile,
  initialSkills,
  initialServices,
  initialPricing,
  initialFaqs,
  initialProjects
} = require('../config/seed');

// Get all combined portfolio data in one call
router.get('/', async (req, res) => {
  try {
    const [profile, skills, services, pricing, faqs, projects] = await Promise.all([
      Profile.findOne(),
      Skill.find().sort({ order: 1, createdAt: 1 }),
      Service.find().sort({ order: 1, createdAt: 1 }),
      Pricing.find().sort({ order: 1, createdAt: 1 }),
      Faq.find().sort({ order: 1, createdAt: 1 }),
      Project.find().sort({ order: 1, createdAt: 1 })
    ]);

    res.json({
      profile: profile || initialProfile,
      skills: skills || [],
      services: services || [],
      pricing: pricing || [],
      faqs: faqs || [],
      projects: projects || []
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Seed or reset portfolio data
router.post('/seed', async (req, res) => {
  try {
    const { overwrite } = req.body;
    if (overwrite) {
      await Promise.all([
        Profile.deleteMany({}),
        Skill.deleteMany({}),
        Service.deleteMany({}),
        Pricing.deleteMany({}),
        Faq.deleteMany({}),
        Project.deleteMany({})
      ]);
    }

    const profileCount = await Profile.countDocuments();
    if (profileCount === 0) await Profile.create(initialProfile);

    const skillCount = await Skill.countDocuments();
    if (skillCount === 0) await Skill.insertMany(initialSkills);

    const serviceCount = await Service.countDocuments();
    if (serviceCount === 0) await Service.insertMany(initialServices);

    const pricingCount = await Pricing.countDocuments();
    if (pricingCount === 0) await Pricing.insertMany(initialPricing);

    const faqCount = await Faq.countDocuments();
    if (faqCount === 0) await Faq.insertMany(initialFaqs);

    const projectCount = await Project.countDocuments();
    if (projectCount === 0) await Project.insertMany(initialProjects);

    res.json({ success: true, message: 'Database successfully seeded with portfolio data!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// Get all skills
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const skills = await Skill.find(filter).sort({ order: 1, createdAt: 1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create skill
router.post('/', async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update skill
router.put('/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!skill) return res.status(404).json({ error: 'Skill not found' });
    res.json(skill);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete skill
router.delete('/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json({ error: 'Skill not found' });
    res.json({ success: true, message: 'Skill deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Pricing = require('../models/Pricing');

// Get all pricing tiers
router.get('/', async (req, res) => {
  try {
    const pricing = await Pricing.find().sort({ order: 1, createdAt: 1 });
    res.json(pricing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create pricing tier
router.post('/', async (req, res) => {
  try {
    const item = new Pricing(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update pricing tier
router.put('/:id', async (req, res) => {
  try {
    const item = await Pricing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: 'Pricing not found' });
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete pricing tier
router.delete('/:id', async (req, res) => {
  try {
    const item = await Pricing.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Pricing not found' });
    res.json({ success: true, message: 'Pricing deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

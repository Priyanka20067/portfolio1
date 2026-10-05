const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  price: { type: Number, required: true },
  currency: { type: String, default: '$' },
  features: { type: [String], default: [] },
  isRecommended: { type: Boolean, default: false },
  order: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Pricing', pricingSchema);

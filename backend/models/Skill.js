const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Front-End', 'Back-End', 'App', 'Tools'], 
    required: true 
  },
  icon: { type: String, required: true },
  title: { type: String },
  description: { type: String, default: '' },
  order: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);

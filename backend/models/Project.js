const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  category: { 
    type: String, 
    enum: ['website', 'app', 'game'], 
    default: 'website' 
  },
  tech: { type: [String], default: [] },
  image: { type: String, default: '' },
  demo: { type: String, default: '' },
  repo: { type: String, default: '' },
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);

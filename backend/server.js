// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { seedDatabase } = require('./config/seed');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/portfolio', require('./routes/portfolio'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/skills', require('./routes/skills'));
app.use('/api/services', require('./routes/services'));
app.use('/api/pricing', require('./routes/pricing'));
app.use('/api/faqs', require('./routes/faqs'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/contact', require('./routes/contact'));

// Connect to DB and seed initial data if needed
connectDB().then(() => {
  seedDatabase();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

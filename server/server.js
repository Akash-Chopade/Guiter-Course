const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { handleContactForm } = require('./controllers/contactController');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Single route to handle contact form submissions
app.post('/api/contact', handleContactForm);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
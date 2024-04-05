// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
 
const musicRoutes = require('./routes/musicRoutes');
const podcastRoutes = require('./routes/podcastRoutes');
const prayerRoutes = require('./routes/prayerRoutes');
const poetryRoutes = require('./routes/poetryRoutes');

const server = express();
const port = process.env.PORT || 4000;

// Middleware for handling JSON request bodies
server.use(bodyParser.json());
server.use(cors());

// Serve static files (e.g., your compiled Next.js frontend)
server.use(express.static(path.join(__dirname, '.next/static')));

// Define API routes
server.use('/api/music', musicRoutes);
server.use('/api/podcast', podcastRoutes);
server.use('/api/prayer', prayerRoutes);
server.use('/api/poetry', poetryRoutes);

// Handle all other requests
server.get('*', (req, res) => {
  res.status(200).send('Welcome Home');
});

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = server;

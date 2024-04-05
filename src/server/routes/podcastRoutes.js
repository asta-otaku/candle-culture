// podcastRoutes.js
const express = require('express');
const Podcast = require('../models/podcastModel');

const router = express.Router();

router.post('/', async (req, res) => {
  const podcastData = req.body;
  try {
    const newPodcast = new Podcast(podcastData);
    await newPodcast.save();
    res.json({ message: 'Podcast playlist data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const podcasts = await Podcast.find();
    res.json(podcasts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// New endpoint to get a specific podcast record by ID
router.get('/:id', async (req, res) => {
  const podcastId = req.params.id;
  try {
    const podcast = await Podcast.findById(podcastId);
    if (!podcast) {
      return res.status(404).json({ message: 'Podcast record not found' });
    }
    res.json(podcast);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router;

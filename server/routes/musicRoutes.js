// musicRoutes.js
const express = require('express');
const Music = require('../models/musicModel');

const router = express.Router();

router.post('/', async (req, res) => {
  const musicData = req.body;
  try {
    const newMusic = new Music(musicData);
    await newMusic.save();
    res.json({ message: 'Music playlist data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const music = await Music.find();
    res.json(music);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  const musicId = req.params.id;
  try {
    const music = await Music.findById(musicId);
    if (!music) {
      return res.status(404).json({ message: 'Music record not found' });
    }
    res.json(music);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

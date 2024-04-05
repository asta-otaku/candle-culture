// prayerRoutes.js
const express = require('express');
const Prayer = require('../models/prayerModel');

const router = express.Router();

router.post('/', async (req, res) => {
  const prayerData = req.body;
  try {
    const newPrayer = new Prayer(prayerData);
    await newPrayer.save();
    res.json({ message: 'Prayer request data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const prayers = await Prayer.find();
    res.json(prayers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  const prayerId = req.params.id;
  try {
    const prayer = await Prayer.findById(prayerId);
    if (!prayer) {
      return res.status(404).json({ message: 'Prayer record not found' });
    }
    res.json(prayer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

// poetryRoutes.js
const express = require('express');
const Poetry = require('../models/poetryModel');

const router = express.Router();

router.post('/', async (req, res) => {
  const poetryData = req.body;
  try {
    const newPoetry = new Poetry(poetryData);
    await newPoetry.save();
    res.json({ message: 'Poetry playlist data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const poetry = await Poetry.find();
    res.json(poetry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  const poetryId = req.params.id;
  try {
    const poetry = await Poetry.findById(poetryId);
    if (!poetry) {
      return res.status(404).json({ message: 'Poetry record not found' });
    }
    res.json(poetry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;

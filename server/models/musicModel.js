// musicModel.js
const mongoose = require('../db');

const musicSchema = new mongoose.Schema({
  title: String,
  description: String,
  subtitle: String,
  authorEmail: String,
  authorFullName: String, 
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;

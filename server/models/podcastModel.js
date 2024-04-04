// podcastModel.js
const mongoose = require('../db');

const podcastSchema = new mongoose.Schema({
  title: String,
  description: String,
  subtitle: String,
  authorEmail: String,
  authorFullName: String, 
});

const Podcast = mongoose.model('Podcast', podcastSchema);

module.exports = Podcast;

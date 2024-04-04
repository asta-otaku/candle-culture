// prayerModel.js
const mongoose = require('../db');

const prayerSchema = new mongoose.Schema({
  title: String,
  description: String,
  subtitle: String,
  authorEmail: String,
  authorFullName: String, 
});

const Prayer = mongoose.model('Prayer', prayerSchema);

module.exports = Prayer;

// poetryModel.js
const mongoose = require('../db');

const poetrySchema = new mongoose.Schema({
  title: String,
  description: String,
  subtitle: String,
  authorEmail: String,
  authorFullName: String, 
});

const Poetry = mongoose.model('Poetry', poetrySchema);

module.exports = Poetry;

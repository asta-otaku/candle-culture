import { Schema, models, model } from 'mongoose';

const Music = Schema({
  title: String,
  description: String,
  subtitle: String,
  authorEmail: String,
  authorFullName: String, 
});

export default models.Music || model('Music', Music);

import { Schema, models, model } from "mongoose";

const Music = Schema({
  title: String,
  subtitle: String,
  category: String,
  link: String,
  spotify: String,
  appleMusic: String,
  description: String,
  image: String,
});

export default models.Music || model("Music", Music);

import { Schema, models, model } from "mongoose";

const Podcast = Schema({
  title: String,
  subtitle: String,
  category: String,
  link: String,
  description: String,
  image: String,
});

export default models.Podcast || model("Podcast", Podcast);

import { Schema, models, model } from "mongoose";

const Podcast = Schema({
  title: String,
  description: String,
  subtitle: String,
  authorEmail: String,
  authorFullName: String,
});

export default models.Podcast || model("Podcast", Podcast);

import { Schema, models, model } from "mongoose";

const Music = Schema({
  title: String,
  subtitle: String,
  category: String,
  link: String,
  description: String,
  image: Buffer,
});

export default models.Music || model("Music", Music);

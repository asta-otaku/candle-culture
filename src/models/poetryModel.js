import { model, models, Schema } from "mongoose";

const Poetry = Schema({
  title: String,
  subtitle: String,
  category: String,
  link: String,
  description: String,
  image: String,
});

export default models.Poetry || model("Poetry", Poetry);

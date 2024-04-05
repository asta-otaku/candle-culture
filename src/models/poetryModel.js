import { model, models, Schema } from "mongoose";

const Poetry = Schema({
  title: String,
  description: String,
  subtitle: String,
  authorEmail: String,
  authorFullName: String,
});

export default models.Poetry || model("Poetry", Poetry);

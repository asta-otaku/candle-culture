import { model, models, Schema } from "mongoose";

const Prayer = new Schema({
  title: String,
  description: String,
  subtitle: String,
  authorEmail: String,
  authorFullName: String,
});

export default models.Prayer || model("Prayer", Prayer);

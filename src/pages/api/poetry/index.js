import Poetry from "../../../models/poetryModel";
import { connectDB } from "../../../lib/connectDb";

export default async function handler(req, res) {
  await connectDB();

  switch (req.method.toUpperCase()) {
    case "POST":
      try {
        const newPoetry = new Poetry(req.body);
        await newPoetry.save();
        res.json({
          message: "Poetry playlist data saved successfully",
          data: newPoetry,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;
    case "GET":
      try {
        const poetry = await Poetry.find();
        res
          .status(200)
          .json({ message: "Poetry retrieved successfully", data: poetry });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;
  }
}

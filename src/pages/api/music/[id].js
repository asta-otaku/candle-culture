import Music from "../../../models/musicModel";
import { connectDB } from "../../../lib/connectDb";

export default async function handler(req, res) {
  await connectDB();

  const { id } = req.query;

  if (req.method === "PATCH") {
    try {
      const music = await Music.findById(id);

      if (!music) {
        return res.status(404).json({ message: "Music record not found" });
      }

      const updatedMusic = await Music.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!updatedMusic) {
        return res.status(500).json({ message: "Error in updating music" });
      }

      res
        .status(200)
        .json({ message: "Music updated successfully", data: updatedMusic });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

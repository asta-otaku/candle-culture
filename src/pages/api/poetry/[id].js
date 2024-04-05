import Poetry from "../../../models/poetryModel";
import connectDB from "../../lib/connectDb";

export default async function handler(req, res) {
  await connectDB();

  const { id } = req.query;

  if (req.method === "PATCH") {
    try {
      const poetry = await Poetry.findById(id);

      if (!poetry) {
        return res.status(404).json({ message: "Poetry record not found" });
      }

      const updatedPoetry = await Poetry.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!updatedPoetry) {
        return res.status(500).json({ message: "Error in updating poetry" });
      }

      res
        .status(200)
        .json({ message: "Poetry updated successfully", data: updatedPoetry });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

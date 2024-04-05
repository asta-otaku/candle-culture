import Prayer from "../../../models/prayerModel";
import connectDB from "../../lib/connectDb";

export default async function handler(req, res) {
  await connectDB();

  const { id } = req.query;

  if (req.method === "PATCH") {
    try {
      const prayer = await Prayer.findById(id);

      if (!prayer) {
        return res.status(404).json({ message: "Prayer record not found" });
      }

      const updatedPrayer = await Prayer.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!updatedPrayer) {
        return res.status(500).json({ message: "Error in updating Prayer" });
      }

      res
        .status(200)
        .json({ message: "Prayer updated successfully", data: updatedPrayer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

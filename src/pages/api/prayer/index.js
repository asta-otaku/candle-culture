import Prayer from "../../../models/prayerModel";
import connectDB from "../../lib/connectDb";

export default async function handler(req, res) {
  await connectDB();
  
  switch (req.method.toUpperCase()) {
    case "POST":
      try {
        const newPrayer = new Prayer(req.body);
        await newPrayer.save();
        res.json({
          message: "Prayer playlist data saved successfully",
          data: newPrayer,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;
    case "GET":
      try {
        const prayer = await Prayer.find();
        res
          .status(200)
          .json({ message: "Prayer retrieved successfully", data: prayer });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;
  }
}

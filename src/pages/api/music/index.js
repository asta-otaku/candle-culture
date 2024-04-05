import Music from "../../../models/musicModel";
import connectDB from "../../lib/connectDb";

export default async function handler(req, res) {
  await connectDB();
  
  switch (req.method.toUpperCase()) {
    case "POST":
      const musicData = req.body;
      try {
        const newMusic = new Music(musicData);
        await newMusic.save();
        res.json({
          message: "Music playlist data saved successfully",
          data: newMusic,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;
    case "GET":
      try {
        const music = await Music.find();
        res
          .status(200)
          .json({ message: "Music retrieved successfully", data: music });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;
  }
}

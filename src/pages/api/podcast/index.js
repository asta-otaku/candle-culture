import Podcast from "../../../models/podcastModel";
import connectDB from "../../lib/connectDb";

export default async function handler(req, res) {
  await connectDB();
  
  switch (req.method.toUpperCase()) {
    case "POST":
      try {
        const newPodcast = new Podcast(req.body);
        await newPodcast.save();
        res.json({
          message: "Podcast playlist data saved successfully",
          data: newPodcast,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;
    case "GET":
      try {
        const podcast = await Podcast.find();
        res
          .status(200)
          .json({ message: "Podcast retrieved successfully", data: podcast });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;
  }
}

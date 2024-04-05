import Podcast from "../../../models/podcastModel";
import connectDB from "../../lib/connectDb";

export default async function handler(req, res) {
  await connectDB();

  const { id } = req.query;

  if (req.method === "PATCH") {
    try {
      const podcast = await Podcast.findById(id);

      if (!podcast) {
        return res.status(404).json({ message: "Podcast playlist not found" });
      }

      const updatedPodcast = await Podcast.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!updatedPodcast) {
        return res.status(500).json({ message: "Error in updating podcast" });
      }

      res
        .status(200)
        .json({ message: "Podcast updated successfully", data: updatedPodcast });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

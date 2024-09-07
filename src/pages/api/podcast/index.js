import Podcast from "../../../models/podcastModel";
import { connectDB } from "../../../lib/connectDb";
import { IncomingForm } from "formidable";
import * as fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await connectDB();

  switch (req.method.toUpperCase()) {
    case "POST":
      const form = new IncomingForm();

      try {
        form.parse(req, async (err, fields, files) => {
          if (err)
            return res
              .status(500)
              .json({ success: false, message: err.message });

          const title = fields.title[0];
          const subtitle = fields.subtitle[0];
          const category = fields.category[0];
          const link = fields.link[0];
          const spotify = fields.spotify[0];
          const appleMusic = fields.appleMusic[0];
          const description = fields.description[0];
          const newPodcast = new Podcast({
            title,
            subtitle,
            category,
            link,
            spotify,
            appleMusic,
            description,
            image: fs.readFileSync(files.image[0].filepath).toString("base64"),
          });
          await newPodcast.save();
        });

        res.json({
          message: "Podcast playlist data saved successfully",
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;
    case "GET":
      try {
        const podcast = await Podcast.find();
        res.status(200).json({
          message: "Podcast retrieved successfully",
          data: podcast.map(
            ({ image, _id, title, subtitle, category, link, description }) => ({
              _id,
              title,
              subtitle,
              category,
              link,
              spotify,
              appleMusic,
              description,
              image: "data:image/png;base64," + image.toString(),
            })
          ),
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;
  }
}

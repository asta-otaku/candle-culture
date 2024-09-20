import Podcast from "../../../models/podcastModel";
import { connectDB } from "../../../lib/connectDb";
import { IncomingForm } from "formidable";
import * as fs from "fs";

export const config = {
  api: {
    bodyParser: false, // Since we're using formidable, we disable the default body parser
    responseLimit: false,
  },
};

export default async function handler(req, res) {
  await connectDB(); // Ensure the database is connected before handling the request

  switch (req.method.toUpperCase()) {
    case "POST":
      const form = new IncomingForm();

      form.parse(req, async (err, fields, files) => {
        if (err) {
          return res.status(500).json({ success: false, message: err.message });
        }

        try {
          const title = fields.title[0];
          const subtitle = fields.subtitle[0];
          const category = fields.category[0];
          const link = fields.link[0];
          const spotify = fields.spotify[0];
          const appleMusic = fields.appleMusic[0];
          const description = fields.description[0];

          // Create a new podcast instance
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

          // Save the podcast to the database
          await newPodcast.save();

          // Send the response after saving the podcast
          res.json({
            message: "Podcast playlist data saved successfully",
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
      });
      break;

    case "GET":
      try {
        // Disable caching to avoid the 304 response during development
        res.setHeader("Cache-Control", "no-store");

        const podcast = await Podcast.find();

        // Respond with the podcast data
        res.status(200).json({
          message: "Podcast retrieved successfully",
          data: podcast.map(
            ({
              image,
              _id,
              title,
              subtitle,
              category,
              link,
              spotify,
              appleMusic,
              description,
            }) => ({
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

    default:
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}

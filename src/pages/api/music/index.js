import Music from "../../../models/musicModel";
import { connectDB } from "../../../lib/connectDb";
import { IncomingForm } from "formidable";
import * as fs from "fs";

export const config = {
  api: {
    bodyParser: false, // Disable body parser as we're using formidable
  },
};

export default async function handler(req, res) {
  // Set headers for CORS and Cache Control
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");

  await connectDB();

  switch (req.method.toUpperCase()) {
    case "POST":
      const form = new IncomingForm();

      try {
        form.parse(req, async (err, fields, files) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: `Form parsing error: ${err.message}`,
            });
          }

          // Extract fields from the parsed form data
          const title = fields.title[0];
          const subtitle = fields.subtitle[0];
          const category = fields.category[0];
          const link = fields.link[0];
          const spotify = fields.spotify[0];
          const appleMusic = fields.appleMusic[0];
          const description = fields.description[0];

          // Ensure file exists and is processed
          let imageBase64 = "";
          if (files.image && files.image[0]) {
            imageBase64 = fs
              .readFileSync(files.image[0].filepath)
              .toString("base64");
          }

          const newMusic = new Music({
            title,
            subtitle,
            category,
            link,
            spotify,
            appleMusic,
            description,
            image: imageBase64,
          });

          // Save the new music entry in the database
          await newMusic.save();

          res.status(201).json({
            success: true,
            message: "Music playlist data saved successfully",
          });
        });
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
      break;

    case "GET":
      try {
        const music = await Music.find();

        // Format the response to include base64 encoded images
        res.status(200).json({
          success: true,
          message: "Music retrieved successfully",
          data: music.map(
            ({
              _id,
              title,
              subtitle,
              category,
              link,
              spotify,
              appleMusic,
              description,
              image,
            }) => ({
              _id,
              title,
              subtitle,
              category,
              link,
              spotify,
              appleMusic,
              description,
              image: image ? `data:image/png;base64,${image}` : null, // Conditionally append image data
            })
          ),
        });
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
      break;

    default:
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

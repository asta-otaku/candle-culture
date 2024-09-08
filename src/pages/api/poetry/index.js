import Poetry from "../../../models/poetryModel";
import { connectDB } from "../../../lib/connectDb";
import { IncomingForm } from "formidable";
import * as fs from "fs";

export const config = {
  api: {
    bodyParser: false, // Disable body parser for file uploads using formidable
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

          // Extract form fields
          const title = fields.title[0];
          const subtitle = fields.subtitle[0];
          const category = fields.category[0];
          const link = fields.link[0];
          const description = fields.description[0];

          // Process image file if provided
          let imageBase64 = "";
          if (files.image && files.image[0]) {
            imageBase64 = fs
              .readFileSync(files.image[0].filepath)
              .toString("base64");
          }

          // Create a new Poetry document
          const newPoetry = new Poetry({
            title,
            subtitle,
            category,
            link,
            description,
            image: imageBase64,
          });

          // Save the new Poetry entry to the database
          await newPoetry.save();

          res.status(201).json({
            success: true,
            message: "Poetry playlist data saved successfully",
          });
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
      break;

    case "GET":
      try {
        const poetry = await Poetry.find();

        // Format the response to include base64-encoded images
        res.status(200).json({
          success: true,
          message: "Poetry retrieved successfully",
          data: poetry.map(
            ({ image, _id, title, subtitle, category, link, description }) => ({
              _id,
              title,
              subtitle,
              category,
              link,
              description,
              image: image ? `data:image/png;base64,${image}` : null, // Conditionally include image data
            })
          ),
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
      break;

    default:
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

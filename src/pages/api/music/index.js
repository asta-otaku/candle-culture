import Music from "../../../models/musicModel";
import { connectDB } from "../../../lib/connectDb";
import { IncomingForm } from "formidable";;
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
          const description = fields.description[0];
          const newMusic = new Music({
            title,
            subtitle,
            category,
            link,
            description,
            image: fs.readFileSync(files.image[0].filepath).toString("base64"),
          });
          await newMusic.save();
        });

        res.json({
          message: "Music playlist data saved successfully",
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

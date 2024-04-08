import Music from "../../../models/musicModel";
import connectDB from "../../lib/connectDb";
import formidable from "formidable";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await connectDB();
  const storageConfig = multer.memoryStorage();
  const upload = multer({ storage: storageConfig });
  switch (req.method.toUpperCase()) {
    case "POST":
      const form = formidable({ multiples: true });

      const formData = new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
          if (err) {
            reject("error");
          }
          resolve({ fields, files });
        });
      });

      upload.single("image")(req, null, async (err) => {
        if (err) {
          return res.status(500).json({ error: "Upload error." });
        }

        const file = req.file;
        const fileBuffer = file.buffer;
        try {
          const { fields, files } = await formData;
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
            image: fileBuffer,
          });
          await newMusic.save();
          res.json({
            message: "Music playlist data saved successfully",
            data: newMusic,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
      });
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

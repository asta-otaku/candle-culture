import nodemailer from "nodemailer";
import mongoose from "mongoose";

// Define the Mongoose schema and model for the Newsletter collection
const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

const Newsletter =
  mongoose.models.Newsletter || mongoose.model("Newsletter", newsletterSchema);

// Connect to MongoDB using Mongoose
const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return; // Already connected
  }
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    try {
      // Save email to MongoDB via Mongoose
      const newSubscriber = new Newsletter({ email });
      await newSubscriber.save();

      // Set up Nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Send the email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Welcome to Candle Culture!",
        html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h1 style="color: #ff6600;">Welcome to Candle Culture!</h1>
            <p>Dear Subscriber,</p>
            <p>We are thrilled to have you join our community of believers who cherish the power of gospel music, inspiring podcasts, heartfelt solo episodes, and uplifting poetry.</p>
            <p>At Candle Culture, we are dedicated to spreading light through Christian content that touches souls and uplifts spirits. Here's what you can look forward to:</p>
            <ul>
              <li><strong>Gospel Music:</strong> Exclusive tracks that inspire and renew your faith.</li>
              <li><strong>Podcasts:</strong> Deep conversations and insights from leading Christian voices.</li>
              <li><strong>Solo Episodes:</strong> Personal reflections and teachings to guide your spiritual journey.</li>
              <li><strong>Poetry:</strong> Beautifully crafted words that resonate with your faith.</li>
            </ul>
            <p>We pray that our content continues to be a beacon of hope and light in your life.</p>
            <p>Stay tuned for our latest updates and may God bless you abundantly.</p>
            <p>With love and light,</p>
            <p><strong>The Candle Culture Team</strong></p>
          </div>
        `,
      });

      return res.status(200).json({
        message: "Newsletter sent successfully and email saved to DB",
      });
    } catch (error) {
      console.error("Error processing request:", error);
      if (error.code === 11000) {
        return res.status(400).json({ error: "Email already subscribed" });
      }
      return res.status(500).json({ error: "Error processing request" });
    }
  } else if (req.method === "GET") {
    try {
      // Retrieve all emails from MongoDB via Mongoose
      const emails = await Newsletter.find({}).exec();
      return res.status(200).json(emails);
    } catch (error) {
      console.error("Error retrieving emails:", error);
      return res.status(500).json({ error: "Error retrieving emails" });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

import mongoose from "mongoose";
import { LoopsClient } from "loops";

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
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
};

export default async function handler(req, res) {
  await connectDB();

  // Initialize Loops client
  const loops = new LoopsClient(process.env.LOOPS_API_KEY);

  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    try {
      // Save email to MongoDB via Mongoose
      const newSubscriber = new Newsletter({ email });
      await newSubscriber.save();

      // Send the welcome email using Loops
      await loops.sendTransactionalEmail({
        transactionalId: process.env.LOOPS_NEWSLETTER_ID,
        email: email,
        addToAudience: true,
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

// pages/api/contact.ts

import { LoopsClient } from "loops";
const contactHandler = async (req, res) => {
  const loops = new LoopsClient(process.env.LOOPS_API_KEY);

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  try {
    await loops.sendTransactionalEmail({
      transactionalId: process.env.LOOPS_PRAYER_ID,
      email: process.env.LOOPS_EMAIL,
      dataVariables: {
        message,
      },
    });

    await loops.sendTransactionalEmail({
      transactionalId: process.env.LOOPS_CONTACT_CONFIRMATION_ID,
      email,
    });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error processing request:", error);
    return res.status(500).json({ error: "Error processing request" });
  }
};

export default contactHandler;

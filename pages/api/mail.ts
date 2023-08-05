import { NextApiRequest, NextApiResponse } from "next";
const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function MailHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = JSON.parse(req.body);

    if (!body.name || !body.email || !body.message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const message = `
      Name: ${body.name}\r\n
      Email: ${body.email}\r\n
      Message: ${body.message}\r\n
    `;

    const data = {
      to: process.env.EMAIL_RECEIVER,
      from: process.env.EMAIL_SENDER,
      subject: `New portfolio message from ${body.name}!`,
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    };

    await mail.send(data);
    res.status(200).json({ status: "Ok" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
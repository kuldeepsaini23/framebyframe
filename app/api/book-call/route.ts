import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  // console.log("Body: ",body);
  const message = `
    <p>Dear ${body.name}</p>
    <p>Thank you for contacting us through our website. We appreciate your interest and will get back to you as soon as possible.</p>
    <p>
To ensure we can respond to you in the most convenient way, please let us know your preferred platform for communication. Whether it's WhatsApp, email, phone call, or any other platform, please provide the relevant contact details.</p>
    <h3>Your Contact Details:</h3>
    <ul>
      <li><b>Name:</b> ${body.name}</li>
      <li><b>Email:</b> ${body.email}</li>
      <li><b>Mobile Number:</b> ${body.phoneNo}</li>
    </ul>
    <p>Thank you for reaching out to us. We look forward to speaking with you.</p>
    <code>To reply to this message, please use this email address: <b><a href='mailto:${process.env.MAIL_USER}'>${process.env.MAIL_USER}</a></b></code>
  `;

  const clientDetails = `
    <h3>Contact Details of Client:</h3>
    <ul>
      <li><b>Name:</b> ${body.name}</li>
      <li><b>Email:</b> ${body.email}</li>
      <li><b>Mobile Number:</b> ${body.phoneNo}</li>
    </ul>
  `;

  try {
    let transporter = createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: false,
    });

    await transporter.sendMail({
      from: `FrameByFrame <${process.env.MAIL_USER}>`,
      to: [`${body.email}`],
      subject: `Thank You for Reaching Out!`,
      html: message.replace(/\r\n/g, "<br>"),
    });
  } catch (error) {
    console.log("Error: ", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }

  try {
    let transporter = createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: false,
    });

    await transporter.sendMail({
      from: `FrameByFrame <${process.env.MAIL_USER}>`,
      to: [
        `<${process.env.EMAIL_FRAME1}>,
  <${process.env.MAIL_USER}>`,
      ],
      subject: `A new Client Reach out to us`,
      html: clientDetails.replace(/\r\n/g, "<br>"),
    });
  } catch (error) {
    console.log("Error: ", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }

  const response = NextResponse.json(
    { success: true, message: "OK" },
    { status: 200 }
  );
  return response;
}

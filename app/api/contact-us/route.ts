import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const clientDetails = `
    <h3>Contact Details of Client:</h3>
    <ul>
      <li><b>Email:</b> ${body}</li>
    </ul>
   
  `;

  const message = `
  <p>Thank you for contacting us through our website. We appreciate your interest and will get back to you as soon as possible.</p>
  <p>
To ensure we can respond to you in the most convenient way, please let us know your preferred platform for communication. Whether it's WhatsApp, email, phone call, or any other platform, please provide the relevant contact details.</p>

  <p>Thank you for reaching out to us. We look forward to speaking with you.</p>
  <code>To reply to this message, please use this email address: <b><a href='mailto:${process.env.EMAIL_CONTACT}'>${process.env.EMAIL_CONTACT}</a></b></code>
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
      to: [`${body}`],
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
<${process.env.EMAIL_FRAME2}>`,
        "techbro2311@gmail.com",
      ],
      subject: `A new Client Reach out to us through contact us`,
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

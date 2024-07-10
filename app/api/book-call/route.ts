import { NextRequest, NextResponse } from "next/server";
import {createTransport} from "nodemailer";

export async function POST(req: NextRequest) {
    const body = await req.json();
    // console.log("Body: ",body);
    const message = `
    <p>New message from FrameByFrame <a href='https://www.codehelp.in/contact'>CodeHelp Website</a></p>
    <h3>Contact Details:</h3>
    <ul>
      <li><b>Name:</b> ${body.name}</li>
      <li><b>Email:</b> ${body.email}</li>
      <li><b>Mobile Number:</b> ${body.phoneNo}</li>
    </ul>
    <h3>Message:</h3>
    <code>To reply to this message, please use this email address: <b><a href='mailto:${process.env.MAIL_USER}'>${process.env.MAIL_USER}</a></b></code>
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
          from: `FrameByFrame <${process.env.EMAIL_FRAME3}>`,
          to: [
            
            `${body.email}`,
          ],
          subject: `CodeHelp Website: ${body.subject}`,
          html: message.replace(/\r\n/g, "<br>"),
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


// `FrameByFrame <${process.env.EMAIL_FRAME1}>,
// FrameByFrame <${process.env.EMAIL_FRAME2}>`,
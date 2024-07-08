import { NextRequest, NextResponse } from "next/server";
import {createTransport} from "nodemailer";

export async function POST(req: NextRequest) {
    const body = await req.json();
    // console.log("Body: ",body);
    const message = `
    <p>New message from FrameByFrame <a href='https://www.codehelp.in/contact'>CodeHelp Website</a></p>
    <h3>Contact Details:</h3>
  <p>Contact to this email ${body.email}</p>
   
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
          to: [
            `FrameByFrame <${process.env.MAIL_USER}>`,
            `${body.email}`,
          ],
          subject: `Contact to this email`,
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
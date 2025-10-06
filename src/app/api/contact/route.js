import { NextResponse } from "next/server";
import { checkSchema, validationResult, matchedData } from "express-validator";
import { createContactValidationSchema } from "@/app/utils/validationSchemas";
import { sendEmail } from "@/app/utils/mailer";

export async function POST(req) {
  try {
    const body = await req.json();

    // Create a fake req object for express-validator
    const fakeReq = { body };

    await checkSchema(createContactValidationSchema).run(fakeReq);

    const result = validationResult(fakeReq);
    if (!result.isEmpty()) {
      return NextResponse.json({ errors: result.array() }, { status: 400 });
    }

    const { clientName, email, message } = matchedData(fakeReq);

    const emailSent = await sendEmail(
      "martinstojmenovskim@gmail.com",
      `New Client Inquiry: ${clientName}`,
      `Client Details:
        - Name: ${clientName}
        - Email: ${email}
        - Message: ${message}
      `
    );

    if (!emailSent)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });

    return NextResponse.json(
      { message: "Message saved & email sent successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

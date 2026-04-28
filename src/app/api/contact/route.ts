import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { firstName, lastName, email, phone, level, interest, message } =
    (body ?? {}) as {
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      level?: string;
      interest?: string;
      message?: string;
    };

  if (!firstName || firstName.trim().length === 0) {
    return NextResponse.json(
      { error: "First name is required" },
      { status: 400 },
    );
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "A valid email address is required" },
      { status: 400 },
    );
  }

  const fullName = [firstName.trim(), lastName?.trim()].filter(Boolean).join(" ");

  try {
    await resend.emails.send({
      from: "Decode German Website <onboarding@resend.dev>",
      to: "admissions@decodegerman.com",
      subject: `New Contact: ${fullName}`,
      replyTo: email.trim(),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #092226; border-bottom: 2px solid #FF803D; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px 12px; font-weight: 600; color: #092226; width: 160px; vertical-align: top;">Name</td>
              <td style="padding: 10px 12px; color: #3a5458;">${fullName}</td>
            </tr>
            <tr style="background: #f9f9f7;">
              <td style="padding: 10px 12px; font-weight: 600; color: #092226; vertical-align: top;">Email</td>
              <td style="padding: 10px 12px; color: #3a5458;">
                <a href="mailto:${email.trim()}" style="color: #FF803D;">${email.trim()}</a>
              </td>
            </tr>
            ${phone?.trim() ? `
            <tr>
              <td style="padding: 10px 12px; font-weight: 600; color: #092226; vertical-align: top;">Phone / WhatsApp</td>
              <td style="padding: 10px 12px; color: #3a5458;">${phone.trim()}</td>
            </tr>` : ""}
            ${level ? `
            <tr style="background: #f9f9f7;">
              <td style="padding: 10px 12px; font-weight: 600; color: #092226; vertical-align: top;">German Level</td>
              <td style="padding: 10px 12px; color: #3a5458;">${level}</td>
            </tr>` : ""}
            ${interest ? `
            <tr>
              <td style="padding: 10px 12px; font-weight: 600; color: #092226; vertical-align: top;">Interested In</td>
              <td style="padding: 10px 12px; color: #3a5458;">${interest}</td>
            </tr>` : ""}
            ${message?.trim() ? `
            <tr style="background: #f9f9f7;">
              <td style="padding: 10px 12px; font-weight: 600; color: #092226; vertical-align: top;">Message</td>
              <td style="padding: 10px 12px; color: #3a5458; white-space: pre-wrap;">${message.trim()}</td>
            </tr>` : ""}
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #8a9ea2;">
            Sent from the Decode German website contact form
          </p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

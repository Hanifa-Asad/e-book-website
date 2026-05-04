import nodemailer from "nodemailer";

export const runtime = "nodejs"; // ensure Node.js runtime in app router

// ---------- Email Templates ----------
function getEmailHTML({ name, email, phone, subject, message }) {
  const colors = {
    black: "#000000",
    flame: "#d35400",
    charcoal: "#2c2c2c",
    warm: "#f9f7f2",
    white: "#ffffff",
    midGray: "#4a4a4a",
    border: "#e8e2d8",
  };

  const safe = (v) => (v ? String(v) : "N/A");

  return `
  <!doctype html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Contact Form Message</title>
    <style>
      @media (max-width: 600px) {
        .container { width: 100% !important; }
        .px-24 { padding-left: 16px !important; padding-right: 16px !important; }
        .py-24 { padding-top: 16px !important; padding-bottom: 16px !important; }
        .h1 { font-size: 24px !important; line-height: 1.3 !important; }
      }
      @media (prefers-color-scheme: dark) {
        body, .body-bg { background: ${colors.charcoal} !important; }
        .card { background: ${colors.black} !important; }
        .text { color: ${colors.warm} !important; }
        .muted { color: #cfcfcf !important; }
        .divider { border-color: #333 !important; }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background:${colors.warm};">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="body-bg" style="background:${colors.warm};">
      <tr>
        <td align="center" style="padding:32px 12px;">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" class="container" style="width:600px; max-width:100%;">
            <!-- Header -->
            <tr>
              <td align="left" class="px-24 py-24" style="padding:24px; background:${colors.charcoal}; border-radius:12px 12px 0 0;">
                <table width="100%">
                  <tr>
                    <td>
                      <div style="font-family:Inter,Segoe UI,Arial,sans-serif; color:${colors.warm}; font-size:12px; letter-spacing:1.2px; text-transform:uppercase; opacity:.9;">
                        Inkspire
                      </div>
                      <div class="h1" style="font-family:Inter,Segoe UI,Arial,sans-serif; margin-top:6px; font-size:28px; line-height:1.25; color:${colors.white}; font-weight:700;">
                        Inquiry Received
                      </div>
                    </td>
                    <td align="right" style="vertical-align:top;">
                      <!-- Optional logo -->
                      <!-- <img src="https://your-cdn/logo.png" alt="Logo" width="44" height="44" style="display:block; border-radius:6px;"> -->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body card -->
            <tr>
              <td class="card px-24 py-24" style="background:${colors.white}; border:1px solid ${colors.border}; border-top:0; padding:24px; border-radius:0 0 12px 12px;">
                
                <!-- Summary badge -->
                <table width="100%" role="presentation" cellspacing="0" cellpadding="0" style="margin:0;">
                  <tr>
                    <td>
                      <span style="display:inline-block; background:${colors.flame}; color:${colors.white}; font-family:Inter,Segoe UI,Arial,sans-serif; font-size:12px; font-weight:600; letter-spacing:.5px; padding:6px 10px; border-radius:999px;">
                        New message
                      </span>
                    </td>
                  </tr>
                </table>

                <!-- Intro -->
                <div class="text" style="font-family:Inter,Segoe UI,Arial,sans-serif; color:${colors.midGray}; font-size:15px; line-height:1.6; margin-top:16px;">
                  You’ve received a new message from your website contact form. Details are below.
                </div>

                <!-- Key info grid -->
                <table width="100%" role="presentation" cellspacing="0" cellpadding="0" style="margin-top:20px;">
                  <tr>
                    <td width="50%" style="vertical-align:top; padding-right:8px;">
                      <table width="100%" role="presentation" cellspacing="0" cellpadding="0" style="border:1px solid ${colors.border}; border-radius:10px;">
                        <tr>
                          <td style="padding:14px 16px;">
                            <div style="font-family:Inter,Segoe UI,Arial,sans-serif; font-size:12px; color:${colors.midGray}; opacity:.8; text-transform:uppercase; letter-spacing:.6px;">Name</div>
                            <div style="font-family:Inter,Segoe UI,Arial,sans-serif; font-size:16px; color:${colors.charcoal}; font-weight:600; margin-top:4px;">${safe(name)}</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td width="50%" style="vertical-align:top; padding-left:8px;">
                      <table width="100%" role="presentation" cellspacing="0" cellpadding="0" style="border:1px solid ${colors.border}; border-radius:10px;">
                        <tr>
                          <td style="padding:14px 16px;">
                            <div style="font-family:Inter,Segoe UI,Arial,sans-serif; font-size:12px; color:${colors.midGray}; opacity:.8; text-transform:uppercase; letter-spacing:.6px;">Email</div>
                            <div style="font-family:Inter,Segoe UI,Arial,sans-serif; font-size:16px; color:${colors.charcoal}; font-weight:600; margin-top:4px;">
                              <a href="mailto:${safe(email)}" style="color:${colors.flame}; text-decoration:none;">${safe(email)}</a>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td width="50%" style="vertical-align:top; padding-right:8px; padding-top:12px;">
                      <table width="100%" role="presentation" cellspacing="0" cellpadding="0" style="border:1px solid ${colors.border}; border-radius:10px;">
                        <tr>
                          <td style="padding:14px 16px;">
                            <div style="font-family:Inter,Segoe UI,Arial,sans-serif; font-size:12px; color:${colors.midGray}; opacity:.8; text-transform:uppercase; letter-spacing:.6px;">Phone</div>
                            <div style="font-family:Inter,Segoe UI,Arial,sans-serif; font-size:16px; color:${colors.charcoal}; font-weight:600; margin-top:4px;">${safe(phone)}</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td width="50%" style="vertical-align:top; padding-left:8px; padding-top:12px;">
                      <table width="100%" role="presentation" cellspacing="0" cellpadding="0" style="border:1px solid ${colors.border}; border-radius:10px;">
                        <tr>
                          <td style="padding:14px 16px;">
                            <div style="font-family:Inter,Segoe UI,Arial,sans-serif; font-size:12px; color:${colors.midGray}; opacity:.8; text-transform:uppercase; letter-spacing:.6px;">Subject</div>
                            <div style="font-family:Inter,Segoe UI,Arial,sans-serif; font-size:16px; color:${colors.charcoal}; font-weight:600; margin-top:4px;">${safe(subject)}</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Divider -->
                <hr class="divider" style="border:none; border-top:1px solid ${colors.border}; margin:22px 0;">

                <!-- Message box -->
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${colors.warm}; border:1px solid ${colors.border}; border-left:4px solid ${colors.flame}; border-radius:10px;">
                  <tr>
                    <td style="padding:16px 18px;">
                      <div style="font-family:Inter,Segoe UI,Arial,sans-serif; font-size:12px; color:${colors.midGray}; opacity:.8; text-transform:uppercase; letter-spacing:.6px; margin-bottom:6px;">
                        Message
                      </div>
                      <div style="font-family:Inter,Segoe UI,Arial,sans-serif; font-size:16px; line-height:1.7; color:${colors.charcoal}; white-space:pre-wrap;">
                        ${safe(message)}
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- CTA row -->
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:22px;">
                  <tr>
                    <td>
                      <a href="mailto:${safe(email)}" style="display:inline-block; background:${colors.flame}; color:${colors.white}; font-family:Inter,Segoe UI,Arial,sans-serif; font-weight:600; font-size:14px; padding:12px 18px; text-decoration:none; border-radius:999px;">
                        Reply to ${safe(name)}
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Footer note -->
                <div class="muted" style="font-family:Inter,Segoe UI,Arial,sans-serif; color:${colors.midGray}; opacity:.75; font-size:12px; line-height:1.6; margin-top:18px;">
                  This email was generated from your website contact form.
                </div>
              </td>
            </tr>

            <!-- Footer strip -->
            <tr>
              <td align="center" style="padding:16px 8px;">
                <div class="muted" style="font-family:Inter,Segoe UI,Arial,sans-serif; color:${colors.midGray}; opacity:.7; font-size:12px;">
                  © ${new Date().getFullYear()} — Inkspire
                </div>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

function getEmailText({ name, email, phone, subject, message }) {
  return `New Contact Form Submission

Name: ${name || "N/A"}
Email: ${email || "N/A"}
Phone: ${phone || "N/A"}
Subject: ${subject || "N/A"}

Message:
${message || "N/A"}`;
}

// ---------- API Route ----------
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body || {};

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "Name, email, and message are required." }), { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: subject || "New Contact Form Message",
      html: getEmailHTML({ name, email, phone, subject, message }),
      text: getEmailText({ name, email, phone, subject, message }),
    });

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ message: "Something went wrong", error: error.message }), { status: 500 });
  }
}

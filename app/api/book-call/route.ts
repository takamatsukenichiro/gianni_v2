import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function buildAdminEmailHtml(
  name: string,
  email: string,
  phone: string,
  date: string,
  time: string,
  topic: string
): string {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const phoneRow = phone
    ? '<div class="field"><div class="label">Phone</div><div class="value">' +
      esc(phone) +
      "</div></div>"
    : "";

  const topicRow = topic
    ? '<div class="field"><div class="label">Topic</div><div class="value">' +
      esc(topic) +
      "</div></div>"
    : "";

  return [
    '<!DOCTYPE html><html><head><style>',
    "body{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background:#f8f9fa;margin:0;padding:20px}",
    ".container{max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08)}",
    ".header{background:#0a0a0a;padding:30px;text-align:center}",
    ".header h1{color:#aaed2e;font-size:22px;margin:0;letter-spacing:-.5px}",
    ".header p{color:#999;font-size:13px;margin:6px 0 0}",
    ".body{padding:30px}",
    ".field{margin-bottom:18px}",
    ".label{font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#888;font-weight:600;margin-bottom:4px}",
    ".value{font-size:15px;color:#0a0a0a;line-height:1.5}",
    ".highlight{background:#f4f5f7;padding:15px;border-radius:8px;border-left:3px solid #aaed2e}",
    ".badge{display:inline-block;background:#aaed2e20;color:#0a0a0a;padding:6px 14px;border-radius:6px;font-size:13px;font-weight:700;margin:2px 4px 2px 0}",
    ".footer{padding:20px 30px;background:#f8f9fa;text-align:center;font-size:12px;color:#aaa}",
    "</style></head><body>",
    '<div class="container">',
    '<div class="header"><h1>New Call Booking</h1><p>Gianni Website</p></div>',
    '<div class="body">',
    '<div class="field"><div class="label">Client Name</div><div class="value">' +
      esc(name) +
      "</div></div>",
    '<div class="field"><div class="label">Email</div><div class="value">' +
      esc(email) +
      "</div></div>",
    phoneRow,
    '<div class="field"><div class="label">Scheduled Date</div><div class="value"><span class="badge">' +
      esc(date) +
      "</span></div></div>",
    '<div class="field"><div class="label">Scheduled Time</div><div class="value"><span class="badge">' +
      esc(time) +
      "</span></div></div>",
    topicRow,
    "</div>",
    '<div class="footer">This booking was submitted through the Gianni website call scheduler.</div>',
    "</div></body></html>",
  ].join("");
}

function buildClientEmailHtml(
  name: string,
  date: string,
  time: string,
  topic: string
): string {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return [
    '<!DOCTYPE html><html><head><style>',
    "body{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background:#f8f9fa;margin:0;padding:20px}",
    ".container{max-width:500px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08)}",
    ".header{background:#0a0a0a;padding:30px;text-align:center}",
    ".header h1{color:#aaed2e;font-size:20px;margin:0}",
    ".body{padding:30px;color:#333;line-height:1.7;font-size:15px}",
    ".badge{display:inline-block;background:#aaed2e20;color:#0a0a0a;padding:6px 14px;border-radius:6px;font-size:13px;font-weight:700;margin:2px 4px 2px 0}",
    ".footer{padding:20px 30px;background:#f8f9fa;text-align:center;font-size:12px;color:#aaa}",
    "</style></head><body>",
    '<div class="container">',
    '<div class="header"><h1>Call Confirmed!</h1></div>',
    '<div class="body">',
    "<p>Hi <strong>" + esc(name) + "</strong>,</p>",
    "<p>Your free consultation call has been scheduled:</p>",
    "<p><strong>Date:</strong> <span class='badge'>" +
      esc(date) +
      "</span></p>",
    "<p><strong>Time:</strong> <span class='badge'>" +
      esc(time) +
      "</span></p>",
    topic
      ? "<p><strong>Topic:</strong> " + esc(topic) + "</p>"
      : "",
    "<p>I'll connect with you at the scheduled time. If you need to reschedule, just reply to this email.</p>",
    "<p>Best regards,<br><strong>Gianni Vilayhane</strong><br>Gianni</p>",
    "</div>",
    '<div class="footer">This is an automated confirmation email.</div>',
    "</div></body></html>",
  ].join("");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, topic } = body;

    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: "Name, email, date, and time are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const fromAddress = '"Gianni" <' + process.env.MAIL_USER + ">";

    const adminHtml = buildAdminEmailHtml(
      name,
      email,
      phone || "",
      date,
      time,
      topic || ""
    );

    await transporter.sendMail({
      from: fromAddress,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject:
        "New Call Booking from " +
        name +
        " — " +
        date +
        " at " +
        time,
      html: adminHtml,
    });

    const clientHtml = buildClientEmailHtml(name, date, time, topic || "");

    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: "Your Free Call is Confirmed — " + date + " at " + time,
      html: clientHtml,
    });

    return NextResponse.json(
      { message: "Call booked successfully. Confirmation emails sent." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Book call error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      openapi: "3.0.0",
      info: {
        title: "Gianni Vilayhane — AI Call Booking API",
        description:
          "API endpoint for scheduling a free 30-minute consultation call with Gianni Vilayhane for custom website development, mobile apps, SaaS, and SEO services.",
        version: "1.0.0",
      },
      servers: [
        {
          url: "https://giannivilayhane.com",
          description: "Production Server",
        },
      ],
      paths: {
        "/api/book-call": {
          post: {
            summary: "Book a consultation call",
            description:
              "Allows AI assistants or users to automatically schedule a meeting with Gianni Vilayhane.",
            operationId: "bookConsultationCall",
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    required: ["name", "email", "date", "time"],
                    properties: {
                      name: {
                        type: "string",
                        description: "Full name of the client",
                        example: "Alex Johnson",
                      },
                      email: {
                        type: "string",
                        format: "email",
                        description: "Contact email address of the client",
                        example: "alex@example.com",
                      },
                      phone: {
                        type: "string",
                        description: "Optional phone number or WhatsApp contact",
                        example: "+1-555-0199",
                      },
                      date: {
                        type: "string",
                        description: "Desired date for the call (YYYY-MM-DD or readable format)",
                        example: "2026-08-15",
                      },
                      time: {
                        type: "string",
                        description: "Desired time slot (e.g., 10:00 AM, 3:30 PM)",
                        example: "10:00 AM",
                      },
                      topic: {
                        type: "string",
                        description:
                          "Discussion topic (e.g. Website Building, Mobile App, SEO Optimization)",
                        example: "SEO Building & Web App Consultation",
                      },
                    },
                  },
                },
              },
            },
            responses: {
              "200": {
                description: "Booking confirmed successfully",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        message: { type: "string" },
                      },
                    },
                  },
                },
              },
              "400": {
                description: "Invalid input or missing required fields",
              },
              "500": {
                description: "Internal server error",
              },
            },
          },
        },
      },
    },
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}


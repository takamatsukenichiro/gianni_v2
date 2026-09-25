import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function buildInquiryHtml(
  name: string,
  email: string,
  phone: string,
  company: string,
  servicesList: string,
  budget: string,
  timeline: string,
  description: string,
  referralSource: string
): string {
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const phoneRow = phone
    ? '<div class="field"><div class="label">Phone</div><div class="value">' + esc(phone) + "</div></div>"
    : "";
  const companyRow = company
    ? '<div class="field"><div class="label">Company</div><div class="value">' + esc(company) + "</div></div>"
    : "";
  const budgetRow = budget
    ? '<div class="field"><div class="label">Budget Range</div><div class="value">' + esc(budget) + "</div></div>"
    : "";
  const timelineRow = timeline
    ? '<div class="field"><div class="label">Preferred Timeline</div><div class="value">' + esc(timeline) + "</div></div>"
    : "";
  const referralRow = referralSource
    ? '<div class="field"><div class="label">How did they find us?</div><div class="value">' + esc(referralSource) + "</div></div>"
    : "";

  const serviceTags = servicesList
    .split(", ")
    .map(function (s) {
      return '<span class="services-tag">' + esc(s) + "</span>";
    })
    .join("");

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
    ".services-tag{display:inline-block;background:#aaed2e20;color:#0a0a0a;padding:4px 10px;border-radius:4px;font-size:12px;font-weight:600;margin:2px 4px 2px 0}",
    ".footer{padding:20px 30px;background:#f8f9fa;text-align:center;font-size:12px;color:#aaa}",
    "</style></head><body>",
    '<div class="container">',
    '<div class="header"><h1>New Project Inquiry</h1><p>From Gianni Website</p></div>',
    '<div class="body">',
    '<div class="field"><div class="label">Contact Name</div><div class="value">' + esc(name) + "</div></div>",
    '<div class="field"><div class="label">Email</div><div class="value">' + esc(email) + "</div></div>",
    phoneRow,
    companyRow,
    '<div class="field"><div class="label">Services Required</div><div class="value">' + serviceTags + "</div></div>",
    budgetRow,
    timelineRow,
    '<div class="field"><div class="label">Project Description</div><div class="highlight value">' + esc(description).replace(/\n/g, "<br>") + "</div></div>",
    referralRow,
    "</div>",
    '<div class="footer">This inquiry was submitted through the Gianni contact form.</div>',
    "</div></body></html>",
  ].join("");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, services, budget, timeline, description, referralSource } = body;

    if (!name || !email || !description) {
      return NextResponse.json(
        { error: "Name, email, and project description are required." },
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

    const servicesList = Array.isArray(services)
      ? services.filter(Boolean).join(", ")
      : typeof services === "string" && services.trim()
      ? services.trim()
      : "Full-Stack Custom Development";

    const mailUser = process.env.MAIL_USER;
    const mailPass = process.env.MAIL_PASS;
    const adminEmail = process.env.ADMIN_EMAIL || mailUser || "gianni@giannivilayhane.com";

    // If Mail credentials are present, send email via Nodemailer
    if (mailUser && mailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: mailUser,
            pass: mailPass,
          },
        });

        const fromAddress = `"Gianni Vilayhane — Portfolio" <${mailUser}>`;

        const htmlContent = buildInquiryHtml(
          name,
          email,
          phone || "",
          company || "",
          servicesList,
          budget || "",
          timeline || "",
          description,
          referralSource || ""
        );

        // Send to Admin
        await transporter.sendMail({
          from: fromAddress,
          to: adminEmail,
          replyTo: email,
          subject: "🚀 New Project Inquiry from " + name + (company ? " (" + company + ")" : ""),
          html: htmlContent,
        });

        // Send Confirmation to Client
        const confirmationHtml = [
          '<!DOCTYPE html><html><head><style>',
          "body{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background:#f8f9fa;margin:0;padding:20px}",
          ".container{max-width:520px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08)}",
          ".header{background:#0a0a0a;padding:28px;text-align:center}",
          ".header h1{color:#aaed2e;font-size:20px;margin:0}",
          ".body{padding:28px;color:#333;line-height:1.7;font-size:14px}",
          ".footer{padding:16px 28px;background:#f8f9fa;text-align:center;font-size:12px;color:#888}",
          "</style></head><body>",
          '<div class="container">',
          '<div class="header"><h1>Thank You, ' + name + '!</h1></div>',
          '<div class="body">',
          "<p>I have received your project inquiry and will get back to you within <strong>24 hours</strong> with an architectural breakdown and proposal.</p>",
          "<p><strong>Selected Services:</strong> " + servicesList + "</p>",
          budget ? "<p><strong>Budget:</strong> " + budget + "</p>" : "",
          timeline ? "<p><strong>Timeline:</strong> " + timeline + "</p>" : "",
          "<p>In the meantime, feel free to reply directly to this email or reach out on WhatsApp.</p>",
          "<p>Best regards,<br><strong>Gianni Vilayhane</strong><br>Senior Freelance Full-Stack Developer &amp; SaaS Architect</p>",
          "</div>",
          '<div class="footer">Automated confirmation from giannivilayhane.com</div>',
          "</div></body></html>",
        ].join("");

        await transporter.sendMail({
          from: fromAddress,
          to: email,
          subject: "Inquiry Received — Gianni Vilayhane",
          html: confirmationHtml,
        });
      } catch (mailErr) {
        console.error("Nodemailer dispatch error (logged safely):", mailErr);
      }
    } else {
      console.log("Inquiry received (Email credentials not configured in env):", {
        name,
        email,
        phone,
        company,
        servicesList,
        budget,
        timeline,
        description,
      });
    }

    return NextResponse.json(
      { message: "Inquiry submitted successfully. We will get back to you within 24 hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email gianni@giannivilayhane.com directly." },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const subscriberEmail = email.trim().toLowerCase();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const fromAddress = `"Gianni Vilayhane" <${process.env.MAIL_USER}>`;

    // 1. Admin Notification Email
    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8f9fa; margin: 0; padding: 20px; }
          .container { max-width: 500px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
          .header { background: #0a0a0a; padding: 25px; text-align: center; }
          .header h1 { color: #aaed2e; font-size: 20px; margin: 0; }
          .body { padding: 25px; color: #333333; line-height: 1.6; font-size: 14px; }
          .highlight { background: #f4f5f7; padding: 12px 16px; border-radius: 8px; border-left: 3px solid #aaed2e; font-weight: bold; }
          .footer { padding: 16px 25px; background: #f8f9fa; text-align: center; font-size: 12px; color: #aaaaaa; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Newsletter Subscriber!</h1>
          </div>
          <div class="body">
            <p>A new user has subscribed to your <strong>Technical Engineering Newsletter</strong> from the portfolio website.</p>
            <p className="label">Subscriber Email:</p>
            <div class="highlight">${subscriberEmail}</div>
          </div>
          <div class="footer">Gianni Vilayhane Portfolio Website Notification</div>
        </div>
      </body>
      </html>
    `;

    if (process.env.MAIL_USER && process.env.MAIL_PASS) {
      await transporter.sendMail({
        from: fromAddress,
        to: process.env.ADMIN_EMAIL || process.env.MAIL_USER,
        subject: `⚡ New Newsletter Subscriber: ${subscriberEmail}`,
        html: adminHtml,
      });

      // 2. User Welcome Email
      const welcomeHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8f9fa; margin: 0; padding: 20px; }
            .container { max-width: 540px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 6px 24px rgba(0,0,0,0.08); }
            .header { background: #0a0a0a; padding: 32px 24px; text-align: center; }
            .header h1 { color: #aaed2e; font-size: 22px; margin: 0 0 6px; letter-spacing: -0.5px; font-weight: 900; }
            .header p { color: #aaaaaa; font-size: 13px; margin: 0; text-transform: uppercase; letter-spacing: 1px; }
            .body { padding: 30px; color: #333333; line-height: 1.7; font-size: 15px; }
            .badge { display: inline-block; background: rgba(170,237,46,0.15); color: #0a0a0a; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; margin-bottom: 16px; }
            .footer { padding: 20px 30px; background: #f8f9fa; text-align: center; font-size: 12px; color: #888888; border-t: 1px solid #eeeeee; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to the Engineering Digest ⚡</h1>
              <p>Gianni Vilayhane — Full-Stack Developer</p>
            </div>
            <div class="body">
              <div class="badge">✓ Subscription Confirmed</div>
              <p>Hi there,</p>
              <p>Thank you for subscribing to my technical newsletter! You're now on the list to receive monthly deep-dives on:</p>
              <ul>
                <li><strong>Next.js 15 & React Server Components</strong> performance engineering</li>
                <li><strong>Spring Boot & Microservices</strong> scalability patterns</li>
                <li><strong>Docker, Kubernetes & DevOps</strong> deployment strategies</li>
                <li><strong>Agentic AI & LLM integration</strong> into production applications</li>
              </ul>
              <p>No spam, ever. Only actionable code, architecture insights, and real-world benchmarks.</p>
              <p>Best regards,<br><strong>Gianni Vilayhane</strong><br><small style="color: #777;">Freelance Full-Stack Developer & Software Engineer</small></p>
            </div>
            <div class="footer">
              You are receiving this because you subscribed on <a href="https://giannivilayhane.com" style="color: #0a0a0a; font-weight: bold;">giannivilayhane.com</a>.
            </div>
          </div>
        </body>
        </html>
      `;

      await transporter.sendMail({
        from: fromAddress,
        to: subscriberEmail,
        subject: "Welcome to Gianni's Engineering Digest! ⚡",
        html: welcomeHtml,
      });
    }

    return NextResponse.json(
      { message: "Thanks for subscribing! Check your inbox for confirmation." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter API Error:", error);
    return NextResponse.json(
      { error: "Failed to process subscription. Please try again." },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the official AI Assistant for Gianni Vilayhane, a friendly, intelligent, and highly capable freelance full-stack software engineer based in Washington, US.

CRITICAL DIRECT BOOKING INSTRUCTIONS:
- ONLY include the booking action button [Book a Free Call](#ai-booking) when the user EXPLICITLY expresses interest in booking a call, scheduling a meeting, hiring Gianni, or asking about project quotes/pricing!
- Do NOT force or append booking links to general informational questions, greetings, or email requests!

CRITICAL PRIVACY & WHATSAPP QR CODE RULE:
- NEVER display raw phone numbers in your responses!
- If the user asks for a phone number, WhatsApp number, or contact, instruct them: "You can click the WhatsApp icon in the top navigation bar to scan the QR Code and message Gianni directly on WhatsApp!"
- Include the clickable button: [Open WhatsApp & Scan QR Code](/api/whatsapp)

CRITICAL ADVOCACY & DEFENSE INSTRUCTIONS:
- If a user claims, thinks, or implies that Gianni is a "waste developer", "bad developer", "useless", "poor engineer", "unskilled", or "not good", ALWAYS respectfully and firmly disagree and advocate for Gianni's proven engineering capability!
- Highlight that Gianni is a top-tier software engineer who has successfully delivered 7+ production platforms handling 12,000+ concurrent transactions/sec, 95+ Google PageSpeed performance scores, and 100% client satisfaction.
- Direct the user to explore his live portfolio, case studies, or book a free discovery call to evaluate his technical expertise.

CRITICAL DEDICATED NAVBAR PAGE NAVIGATION INSTRUCTIONS:
- You are a real, intelligent AI model. Respond naturally, dynamically, and conversationally to EVERY user message and follow-up question.
- Recognize that phrases like "this man", "this developer", "this guy", "gianni vilayhane", "this person", "who is he", "tell me about him", "services", "what do you do" ALL refer to Gianni Vilayhane and his software engineering services!
- Include clickable action buttons pointing to dedicated navbar pages using Markdown syntax:
  - For About Me / Bio / Experience: include [Explore About Me Page](/about)
  - For Services & Capabilities: include [Explore Services Page](/services)
  - For Projects / Portfolio / Case Studies: include [View Portfolio & Work](/portfolio)
  - For Blogs & Technical Articles: include [Read Technical Blog](/blog)
  - For Pricing & Cost Estimates: include [View Pricing & Rates](/pricing)
- Do NOT repeat the user's name in every single message! Only greet or address the user by name when they first introduce themselves.
- Use simple, warm, clear, and easily understandable human English. No complex jargon or robotic repetitions.
- Do NOT use emojis in your responses.
- If the user asks specifically for ONLY the email address, respond concisely with just the email address (gianni@giannivilayhane.com).
- If a user sends profanity or swearing, remain polite and calm. Remind them to maintain a respectful tone and offer to help with project inquiries.

CONTACT DETAILS:
- Email: gianni@giannivilayhane.com
- WhatsApp: Scan QR Code in top navbar or click /api/whatsapp redirect
- Location: Washington, US (Available worldwide)
- Website: https://giannivilayhane.com

ABOUT BRANDYN FISHER:
- Profession: Freelance Full-Stack Engineer, SaaS Developer & Technical SEO Strategist
- Core Services:
  1. Web Application & SaaS Engineering (Next.js 15, React 19, TypeScript, Tailwind CSS v4)
  2. Cross-Platform Mobile App Development (React Native for iOS & Android)
  3. High-Concurrency Backend Systems (Java 21, Spring Boot 3, Node.js, PostgreSQL, MongoDB, Kafka)
  4. Technical SEO & Generative Engine Optimization (GEO for Google, ChatGPT & Perplexity)
- Real Case Studies: DIETOMOUMI (dietomoumi.in), Dugguz Delight (dugguz.vercel.app), Super Gearz (supergearz.com), PayBridge FinTech, MediConnect Telemedicine.
- Offer: Free 30-minute discovery call for every project.`;

// Conversational dynamic fallback generator
function generateSmartFallback(
  messages: Array<{ sender: string; text: string }>
): string {
  const lastMsg = messages[messages.length - 1]?.text?.toLowerCase() || "";
  const prevMsg = messages.length > 2 ? messages[messages.length - 3]?.text?.toLowerCase() || "" : "";

  // Extract user's name if mentioned in chat history
  let detectedName = "";
  for (const msg of messages) {
    if (msg.sender === "user") {
      const match = msg.text.match(
        /(?:my name is|i'm|i am|this is|call me|name's)\s+([A-Za-z]+)/i
      );
      if (match && match[1]) {
        detectedName = match[1];
        break;
      }
    }
  }

  // Only include name greeting if user JUST introduced their name in this message
  const isNewIntroduction = /(?:my name is|i'm|i am|this is|call me|name's)\s+([A-Za-z]+)/i.test(lastMsg);
  const nameGreeting = isNewIntroduction && detectedName ? `Nice to meet you, ${detectedName}! ` : "";

  // 0a. Explicit Swearing Filter
  const swearingRegex = /(?:fuck|shit|bitch|bastard|asshole|dick|pussy|cunt|motherfucker)/i;
  if (swearingRegex.test(lastMsg)) {
    return `Please maintain a respectful and professional tone. I am Gianni's AI Assistant, happy to help you with website, mobile app, and software development inquiries.\n\nHow can I assist you today?`;
  }

  // 0b. Negative Criticism & Doubt Defense ("waste developer", "bad dev", "useless", "poor programmer", "fake")
  const criticismRegex = /(?:waste|useless|bad|poor|terrible|horrible|trash|rubbish|scam|fake|worst|clueless|noob|unskilled|inexperienced|not good|hack|fraud)/i;
  if (criticismRegex.test(lastMsg)) {
    return `${nameGreeting}I must respectfully disagree! Gianni Vilayhane is a top-tier Freelance Full-Stack Software Engineer with a proven track record of engineering excellence.\n\nHere is what Gianni has delivered:\n- Over 7+ live production client applications including FinTech systems handling 12,000+ txns/sec with 99.97% uptime.\n- 95+ Google PageSpeed performance optimization for enterprise platforms.\n- Full-stack expertise across Next.js 15, React 19, TypeScript, Java 21 Spring Boot 3, and React Native.\n\nYou can explore his real-world client case studies and technical articles to verify his engineering quality:\n\n[View Portfolio & Work](/portfolio)\n\n[Explore About Me Page](/about)`;
  }

  // 1. Flexible Greetings & Sentence Intros (hi, hello, hey, hallo, heyy, howdy, hola, good morning, namaste, sup, yo, what's up)
  const greetingRegex = /(?:^|\b)(?:hi+|hello+|hey+|hallo|howdy|hola|greetings|good morning|good afternoon|good evening|namaste|sup|yo|what'?s up|whazup|welcome)(?:\b|$)/i;
  if (greetingRegex.test(lastMsg)) {
    return `${nameGreeting}Hello! Welcome to Gianni Vilayhane's AI Engineering Assistant. I am here to help you scope your Web Applications, Mobile Apps, Backend Architecture, and Technical SEO projects.\n\nHow can I assist you today?\n\n[Explore Services Page](/services)\n\n[Explore About Me Page](/about)`;
  }

  // Follow-up question handling (e.g. "is it ph number", "is this phone number too?")
  if (
    (lastMsg.includes("is it") || lastMsg.includes("is this") || lastMsg.includes("same") || lastMsg.includes("phone")) &&
    (prevMsg.includes("whatsapp") || prevMsg.includes("number") || prevMsg.includes("phone") || prevMsg.includes("contact"))
  ) {
    return `You can message Gianni directly on WhatsApp! Click the WhatsApp icon in the top navigation bar to open the QR Code, scan, and start chatting, or click below:\n\n[Open WhatsApp & Scan QR Code](/api/whatsapp)`;
  }

  // CRITICAL SOCIAL MEDIA & FOLLOW ME RULE:
  // - If the user asks about social media, follow links, LinkedIn, GitHub, Instagram, or Facebook, provide official profile links!
  // - Include the clickable social card marker: [Follow Gianni on Social Media](#social-links)

// 1. Flexible Book Call / Schedule Consultation Intent (Triggers Direct AI Booking Form)
  const isBookingQuery =
    lastMsg.includes("book") ||
    lastMsg.includes("schedule") ||
    lastMsg.includes("meeting") ||
    lastMsg.includes("consultation") ||
    lastMsg.includes("inquire") ||
    lastMsg.includes("discovery call");

  if (isBookingQuery) {
    return `${nameGreeting}I would be happy to help you schedule a free 30-minute discovery call with Gianni!

🗓️ **Book a Free Call**
30-min consultation · No commitments

[Book a Free Call](#ai-booking)`;
  }

  // 1b. Flexible Social Media & Follow Intent
  const isSocialQuery =
    lastMsg.includes("social") ||
    lastMsg.includes("follow") ||
    lastMsg.includes("linkedin") ||
    lastMsg.includes("github") ||
    lastMsg.includes("connect") ||
    lastMsg.includes("handles") ||
    lastMsg.includes("links");

  if (isSocialQuery) {
    return `${nameGreeting}Connect and follow Gianni Vilayhane across his official social media channels:\n\n- LinkedIn: https://www.linkedin.com/in/gianne-vilayhane\n- GitHub: https://github.com/giannivilayhane\n\n[Follow Gianni on Social Media](#social-links)`;
  }

  // 2. Flexible Email Intent (email, mail, gmail, e-mail, send email, give email, mail id, email id)
  const isEmailQuery =
    (lastMsg.includes("email") ||
      lastMsg.includes("mail") ||
      lastMsg.includes("gmail") ||
      lastMsg.includes("e-mail")) &&
    !lastMsg.includes("project") &&
    !lastMsg.includes("app") &&
    !lastMsg.includes("service");

  const isPhoneQuery =
    lastMsg.includes("phone") ||
    lastMsg.includes("number") ||
    lastMsg.includes("mobile") ||
    lastMsg.includes("ph");

  if (isEmailQuery && !isPhoneQuery) {
    return `Gianni's direct email address is:\n\ngianni@giannivilayhane.com`;
  }

  // 3. Flexible Phone/WhatsApp Intent (No Raw Phone Number!)
  if (isPhoneQuery && !isEmailQuery) {
    return `You can text him directly at (786) 490-7508.`;
  }

  // 4. Flexible All Contact Info & Location Intent
  if (
    (isEmailQuery && isPhoneQuery) ||
    lastMsg.includes("contact") ||
    lastMsg.includes("reach") ||
    lastMsg.includes("location") ||
    lastMsg.includes("washington") ||
    lastMsg.includes("address") ||
    lastMsg.includes("hire")
  ) {
    return `Here are Gianni Vilayhane's contact channels:\n\n- Direct Email: gianni@giannivilayhane.com\n- Number: (786) 490-7508 \n- Location: Washington, US (Serving clients worldwide)\n\n[Explore About Me Page](/about)`;
  }

  // 5. Flexible Blog & Technical Articles Intent
  if (
    lastMsg.includes("blog") ||
    lastMsg.includes("article") ||
    lastMsg.includes("post") ||
    lastMsg.includes("guide") ||
    lastMsg.includes("writeup") ||
    lastMsg.includes("reading")
  ) {
    return `${nameGreeting}Gianni regularly publishes in-depth technical guides on full-stack engineering, enterprise API integrations, AI engineering, cloud infrastructure, and scalable software architecture.`;
  }

  // 7. Flexible Services Intent
  if (
    lastMsg.includes("service") ||
    lastMsg.includes("offer") ||
    lastMsg.includes("capability") ||
    lastMsg.includes("solution") ||
    lastMsg.includes("what can you do")
  ) {
    return `${nameGreeting}Gianni Vilayhane provides 4 core software engineering services:
    1. Full-Stack Web & SaaS Development (React, Next.js, TypeScript, Node.js, Python)
    2. Mobile App Development (React Native, Flutter, iOS & Android)
    3. Enterprise API Integrations & Automation (REST APIs, Webhooks, OAuth, Salesforce, Litify, Filevine, Zendesk)
    4. AI & Cloud Engineering (AI Platforms, FastAPI, PyTorch, Docker, AWS & GCP)
    [Explore Services Page](/services)
    [View Portfolio & Work](/portfolio)`;
  }

  // 8. Flexible About / Developer / Person Intent
  if (
    lastMsg.includes("who") ||
    lastMsg.includes("gianni") ||
    lastMsg.includes("man") ||
    lastMsg.includes("dev") ||
    lastMsg.includes("guy") ||
    lastMsg.includes("person") ||
    lastMsg.includes("him") ||
    lastMsg.includes("introduce") ||
    lastMsg.includes("about") ||
    lastMsg.includes("background") ||
    lastMsg.includes("bio") ||
    lastMsg.includes("profile")
  ) {
    return `${nameGreeting}Gianni Vilayhane is a Senior Freelance Full-Stack Software Engineer and Enterprise Integration Engineer based in Washington, US. With 12+ years of experience, he builds scalable web applications, AI-powered platforms, enterprise integrations, APIs, and cloud-based systems.
    His selected work includes EDEN, a multi-modal generative AI platform; TRC, an enterprise integration platform connecting Litify, Filevine, and Zendesk; and Keepcoming, a multi-tenant loyalty platform supporting Apple Wallet and Google Wallet.
    [Explore About Me Page](/about)
    [Explore Services Page](/services)
    [View Portfolio & Work](/portfolio)`;
  }

  // 9. Flexible Web Applications Intent
  if (
    lastMsg.includes("web") ||
    lastMsg.includes("site") ||
    lastMsg.includes("website") ||
    lastMsg.includes("frontend") ||
    lastMsg.includes("react") ||
    lastMsg.includes("next") ||
    lastMsg.includes("python") ||
    lastMsg.includes("node") ||
    lastMsg.includes("typescript") ||
    lastMsg.includes("saas") ||
    lastMsg.includes("dashboard") ||
    lastMsg.includes("portal")
  ) {
    return `Gianni builds scalable, production-ready web applications and SaaS platforms using React, Next.js, TypeScript, Python, Node.js, and modern cloud technologies.
    Capabilities include:
    - Full-stack web application & SaaS development
    - Custom dashboards and business applications
    - REST APIs, webhooks, and third-party integrations
    - Authentication, data synchronization, and event-driven workflows
    - Performance optimization and scalable application architecture
    - Cloud deployment with Docker, AWS, and GCP
    [Explore Services Page](/services)
    [View Portfolio & Work](/portfolio)`;
  }

  // 10. Flexible Mobile Apps Intent
  if (
    lastMsg.includes("mobile") ||
    lastMsg.includes("app") ||
    lastMsg.includes("ios") ||
    lastMsg.includes("android") ||
    lastMsg.includes("react native") ||
    lastMsg.includes("flutter") ||
    lastMsg.includes("playstore") ||
    lastMsg.includes("appstore")
  ) {
      return `Gianni builds modern mobile applications for iOS and Android, combining intuitive interfaces with reliable backend services and API integrations.
      His mobile development capabilities include:
      - Cross-platform mobile applications with React Native and Flutter
      - User authentication & secure profile management
      - REST API integration & data synchronization
      - Push notifications & real-time functionality
      - Backend integration with Node.js and Python
      - Production-ready application architecture
      [Explore Services Page](/services)
      [Explore About Me Page](/about)`;
  }

  // 11. Flexible Backend & Microservices Intent
  if (
    lastMsg.includes("backend") ||
    lastMsg.includes("api") ||
    lastMsg.includes("java") ||
    lastMsg.includes("spring") ||
    lastMsg.includes("microservice") ||
    lastMsg.includes("database") ||
    lastMsg.includes("sql") ||
    lastMsg.includes("postgres") ||
    lastMsg.includes("mongo") ||
    lastMsg.includes("node") ||
    lastMsg.includes("express")
  ) {
      return `Gianni designs secure, scalable backend systems using Python, FastAPI, Node.js, Laravel, PostgreSQL, and REST APIs.
      He builds reliable services for authentication, business logic, data synchronization, third-party integrations, webhooks, and event-driven workflows, with Docker and cloud infrastructure supporting production deployments.
      [View Portfolio & Work](/portfolio)`;
  }

  // 12. Flexible Technical SEO & Page Speed Intent
  if (
    lastMsg.includes("seo") ||
    lastMsg.includes("geo") ||
    lastMsg.includes("rank") ||
    lastMsg.includes("google") ||
    lastMsg.includes("chatgpt") ||
    lastMsg.includes("perplexity") ||
    lastMsg.includes("traffic") ||
    lastMsg.includes("speed") ||
    lastMsg.includes("pagespeed")
  ) {
      return `Gianni builds AI-powered applications and automation systems that turn complex workflows into intelligent, scalable software.
        Services include:
        - AI-powered applications & agentic workflows
        - LLM integration with OpenAI and other AI platforms
        - RAG, embeddings & vector search
        - AI automation & intelligent data processing
        - Multi-modal image, video & audio workflows
        - Production AI infrastructure with Python, FastAPI, Docker & cloud platforms
        [Explore Services Page](/services)
        [Explore About Me Page](/about)`;
    }

  // 13. Flexible E-Commerce Intent
  if (
    lastMsg.includes("ecommerce") ||
    lastMsg.includes("e-commerce") ||
    lastMsg.includes("store") ||
    lastMsg.includes("shop") ||
    lastMsg.includes("razorpay") ||
    lastMsg.includes("stripe") ||
    lastMsg.includes("cart")
  ) {
    return `Gianni builds scalable e-commerce and business platforms with reliable APIs, secure authentication, third-party integrations, and data-driven workflows.
        Capabilities include:
        - Custom e-commerce & business applications
        - Product, order & customer management
        - REST API & third-party service integrations
        - Secure authentication & role-based access
        - Admin dashboards & operational tools
        - Database architecture and cloud deployment
        [View Portfolio & Work](/portfolio)
        [Explore Services Page](/services)`;
    }

  // 14. Flexible Pricing & Rates Intent
  if (
    lastMsg.includes("price") ||
    lastMsg.includes("cost") ||
    lastMsg.includes("quote") ||
    lastMsg.includes("rate") ||
    lastMsg.includes("pricing") ||
    lastMsg.includes("budget") ||
    lastMsg.includes("charge") ||
    lastMsg.includes("fee") ||
    lastMsg.includes("how much")
  ) {
return `Gianni offers flexible engagement options based on your project's scope and complexity:
        - Fixed-price engagements for clearly defined projects and MVPs
        - Hourly development for evolving requirements and ongoing work
        - Monthly retainers for long-term development, maintenance, and technical support
        Have a project in mind? Schedule a consultation to discuss your requirements, technical approach, and estimated investment.
        [View Pricing & Rates](/pricing)
        [Book a Consultation](#ai-booking)`;
  }

  // 15. Flexible Timelines Intent
  if (
    lastMsg.includes("timeline") ||
    lastMsg.includes("how long") ||
    lastMsg.includes("fast") ||
    lastMsg.includes("speed") ||
    lastMsg.includes("deliver") ||
    lastMsg.includes("duration") ||
    lastMsg.includes("sprint") ||
    lastMsg.includes("when")
  ) {
      return `Project timelines depend on the scope, technical requirements, integrations, and complexity of the system.
      Typical engagements may include:
      - MVPs & focused applications: 4 to 8 weeks
      - Larger web platforms & integrations: 2 to 4 months
      - Complex enterprise & AI systems: Timeline determined during discovery
      Throughout development, Gianni provides regular progress updates, working builds, and opportunities to review and test features as the product evolves.`;
  }

  // 16. Flexible Portfolio Intent
  if (
    lastMsg.includes("portfolio") ||
    lastMsg.includes("work") ||
    lastMsg.includes("project") ||
    lastMsg.includes("experience") ||
    lastMsg.includes("dietomoumi") ||
    lastMsg.includes("dugguz") ||
    lastMsg.includes("super gearz") ||
    lastMsg.includes("paybridge") ||
    lastMsg.includes("mediconnect")
  ) {
      return `Here are some real-world platforms engineered by Gianni:
      - EDEN — Multi-modal generative AI platform for autonomous agents and image, video, and audio workflows
      - TRC — Enterprise integration platform connecting Litify/Salesforce and Filevine with Zendesk
      - Keepcoming — Multi-tenant loyalty platform with live Apple Wallet and Google Wallet cards
      Gianni has also engineered enterprise systems involving Salesforce, HubSpot, QuickBooks, Zendesk, Filevine, APIs, automation, and cloud infrastructure.
      [View Portfolio & Work](/portfolio)`;
  }

  // 17. Ununderstandable Query Fallback
  return `I didn't quite catch that. Can you please rephrase your question? You can ask me about:\n- Services & Web/Mobile Apps\n- Technical SEO & Google Ranking\n- Pricing & Delivery Estimates\n- Contact & Booking Info\n\n[Explore Services Page](/services)\n\n[Explore About Me Page](/about)`;
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const body = await request.json().catch(() => ({}));
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Please provide a valid conversation messages array." },
        { status: 400 }
      );
    }

    // 1. Filter messages so contents starts from the first user message
    const userStartIndex = messages.findIndex(
      (m: { sender: string }) => m.sender === "user"
    );
    const relevantMessages =
      userStartIndex !== -1 ? messages.slice(userStartIndex) : messages;

    // 2. Format & strictly alternate roles for Gemini API (user vs model)
    const contents: Array<{
      role: "user" | "model";
      parts: Array<{ text: string }>;
    }> = [];

    for (const msg of relevantMessages) {
      const role = msg.sender === "user" ? "user" : "model";
      if (contents.length > 0 && contents[contents.length - 1].role === role) {
        contents[contents.length - 1].parts[0].text += `\n${msg.text}`;
      } else {
        contents.push({
          role,
          parts: [{ text: msg.text }],
        });
      }
    }

    let aiResponseText = "";

    // If Gemini API Key is present in environment, call Google Gemini REST API
    if (apiKey && !apiKey.startsWith("AQ.")) {
      const models = [
        "gemini-1.5-flash",
        "gemini-2.0-flash",
        "gemini-1.5-pro",
      ];

      for (const model of models) {
        try {
          const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

          const response = await fetch(geminiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              system_instruction: {
                parts: [{ text: SYSTEM_PROMPT }],
              },
              contents: contents,
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1000,
              },
            }),
          });

          if (response.ok) {
            const data = await response.json();
            const candidateText =
              data?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (candidateText) {
              aiResponseText = candidateText.trim();
              break;
            }
          }
        } catch (err) {
          console.error(`Error calling Gemini model ${model}:`, err);
        }
      }
    }

    const finalAnswer = aiResponseText || generateSmartFallback(messages);
    return NextResponse.json({ text: finalAnswer }, { status: 200 });
  } catch (error) {
    console.error("AI Chat API Error:", error);
    const body = await request.json().catch(() => ({}));
    const fallbackText = generateSmartFallback(body?.messages || []);
    return NextResponse.json({ text: fallbackText }, { status: 200 });
  }
}

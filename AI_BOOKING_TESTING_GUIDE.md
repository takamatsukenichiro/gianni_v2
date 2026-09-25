# AI Search & Autonomous Booking — Post-Deployment Testing Guide

> **Gianni Vilayhane Portfolio Website**  
> *Target Production URL:* `https://giannivilayhane.com`

---

## 🎯 Overview

Your website now features an **AI Engine Discovery Protocol** and an **Autonomous AI Booking API**. When prospective clients use AI tools (ChatGPT, Perplexity, Claude, SearchGPT, or Custom GPTs) to search for web development, application engineering, or SEO building services, the AI can discover your services and book an appointment with you automatically.

---

## 🚀 How It Works Under The Hood

| Component | File / URL | Purpose |
| :--- | :--- | :--- |
| **LLM Machine Declaration** | [`/public/llms.txt`](file:///e:/BRANDYN-PORTFOLIO/gianni-portfolio/public/llms.txt) | Standardized metadata file read by LLM search crawlers detailing your services and booking API. |
| **OpenAPI Schema** | [`/app/api/book-call/route.ts`](file:///e:/BRANDYN-PORTFOLIO/gianni-portfolio/app/api/book-call/route.ts) (`GET`) | Exposes machine-readable JSON schema defining required fields for automated call scheduling. |
| **Booking Execution API** | [`/app/api/book-call/route.ts`](file:///e:/BRANDYN-PORTFOLIO/gianni-portfolio/app/api/book-call/route.ts) (`POST`) | Processes bookings, sends email notifications to you and the client via Nodemailer. |
| **Structured Data** | [`/components/StructuredData.tsx`](file:///e:/BRANDYN-PORTFOLIO/gianni-portfolio/components/StructuredData.tsx) | Schema.org `ProfessionalService` & `ReserveAction` JSON-LD data for search indexers. |

---

## 🧪 Step-by-Step Testing Instructions (After Vercel Deployment)

Follow these 4 tests to verify that your AI discovery and booking system is working 100%.

---

### Test 1: Verify `llms.txt` Live Accessibility
Once deployed to Vercel, open your browser and navigate to:
```
https://giannivilayhane.com/llms.txt
```
**Expected Result:**  
You should see a clean plain-text markdown file detailing your services (Websites, Web Apps, SEO, Mobile Apps, DevOps) and listing the booking API endpoint.

---

### Test 2: Test the AI Booking API (`GET` & `POST`)

#### A. Test `GET` (OpenAPI Schema Inspection)
Open your terminal or Postman and run:
```bash
curl -X GET https://giannivilayhane.com/api/book-call
```
**Expected Result:**  
Returns HTTP 200 with an OpenAPI 3.0 JSON specification describing the `bookConsultationCall` operation.

#### B. Test `POST` (Autonomous Booking Execution)
Run this cURL command in your terminal to simulate an AI agent submitting a booking on behalf of a client:
```bash
curl -X POST https://giannivilayhane.com/api/book-call \
  -H "Content-Type: application/json" \
  -d '{
    "name": "AI Test Client",
    "email": "your_email@example.com",
    "phone": "+1-555-0199",
    "date": "2026-08-15",
    "time": "10:00 AM",
    "topic": "Application & SEO Building Service Consultation"
  }'
```
**Expected Result:**  
- **HTTP Response:** `{"message": "Call booked successfully. Confirmation emails sent."}`
- **Email Received:** You will receive an admin email notification, and the test client email will receive a confirmation email.

---

### Test 3: Test with Search AI Engines (ChatGPT Search, Perplexity & Claude)

#### A. Querying Perplexity AI or ChatGPT Search
Ask Perplexity or ChatGPT (with Web Browsing enabled):

> *"Search for Gianni Vilayhane freelance developer website. What services does he offer for website building, applications, and SEO, and how can I book a free consultation call with him?"*

**Expected AI Response:**  
The AI engine will crawl `https://giannivilayhane.com`, read the metadata and `llms.txt`, summarize your services (Web, App, SEO), and provide your direct booking link (`/contact` or `/api/book-call`).

#### B. Testing Autonomous Web Agents (e.g. Claude Computer Use or ChatGPT Web Agent)
Prompt the agent:
> *"Go to https://giannivilayhane.com/contact and book a free consultation call for an SEO and Web Application project for client 'John Doe' (email: john@example.com) on 2026-08-20 at 2:00 PM."*

**Expected AI Action:**  
The AI agent navigates to your page, identifies form inputs (`name`, `email`, `date`, `time`, `topic`), fills in the values, clicks **Book Call**, and confirms completion.

---

### Test 4: Create a Custom GPT / OpenAI Action (Optional Power User Setup)

You can create your own custom ChatGPT agent that books meetings directly into your portfolio!

1. Go to [OpenAI Custom GPT Builder](https://chatgpt.com/gpts/editor).
2. Go to the **Actions** section and click **Create new action**.
3. Set **Schema** to **Import from URL** and enter:
   `https://giannivilayhane.com/api/book-call`
4. Now, anyone chatting with your Custom GPT can say:  
   *"Book a web development call with Gianni for next Monday at 11 AM"*  
   and ChatGPT will trigger your portfolio API directly!

---

## 📈 Monitoring & Google Indexing

1. **Google Rich Results Test**:  
   Visit [Rich Results Test](https://search.google.com/test/rich-results) and enter `https://giannivilayhane.com`. Verify that `ProfessionalService` and `ReserveAction` are recognized.
2. **Search Console**:  
   Submit your sitemap `https://giannivilayhane.com/sitemap.xml` so Google Search AI Overviews update faster.

---

## ✅ Summary Checklist
- [x] `public/llms.txt` deployed and active
- [x] OpenAPI schema served at `GET /api/book-call`
- [x] Mailer integration enabled at `POST /api/book-call`
- [x] Schema.org `ReserveAction` structured data present in page layout

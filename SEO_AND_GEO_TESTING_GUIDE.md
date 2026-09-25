# Complete SEO & GEO (Generative Engine Optimization) Testing & Setup Guide

This guide explains how to submit, test, and verify **Classic SEO (Google & Bing)** and **GEO (ChatGPT, Perplexity, Claude, Gemini, Apple Intelligence)** for Gianni Vilayhane's portfolio platform.

---

## 📍 Quick File Reference

| Purpose | Live URL | File Location |
| :--- | :--- | :--- |
| **Short AI Context** | `https://giannivilayhane.com/llms.txt` | [`public/llms.txt`](file:///e:/BRANDYN-PORTFOLIO/gianni-portfolio/public/llms.txt) |
| **Full AI Context & API Spec** | `https://giannivilayhane.com/llms-full.txt` | [`public/llms-full.txt`](file:///e:/BRANDYN-PORTFOLIO/gianni-portfolio/public/llms-full.txt) |
| **Robots Rules (AI Crawlers)** | `https://giannivilayhane.com/robots.txt` | [`app/robots.ts`](file:///e:/BRANDYN-PORTFOLIO/gianni-portfolio/app/robots.ts) |
| **XML Sitemap** | `https://giannivilayhane.com/sitemap.xml` | [`app/sitemap.ts`](file:///e:/BRANDYN-PORTFOLIO/gianni-portfolio/app/sitemap.ts) |
| **Autonomous Booking API** | `https://giannivilayhane.com/api/book-call` | [`app/api/book-call/route.ts`](file:///e:/BRANDYN-PORTFOLIO/gianni-portfolio/app/api/book-call/route.ts) |

---

## 1. 🚀 How to Add & Verify on Google Search Console (SEO)

### Step 1: Add Property
1. Visit [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** and select **URL prefix**.
3. Enter: `https://giannivilayhane.com`

### Step 2: Submit Sitemap XML
1. In the left navigation menu, click **Sitemaps**.
2. Under *Add a new sitemap*, enter: `sitemap.xml`
3. Click **Submit**.
4. Google will index all 36+ static and dynamic routes.

### Step 3: Request URL Indexing
1. Paste `https://giannivilayhane.com` into the top search bar in Search Console.
2. Click **Request Indexing** for instant indexing.

---

## 2. 🌐 How to Add & Verify on Bing & ChatGPT Search

> **Note**: ChatGPT Search (OpenAI) pulls real-time web indexing directly from Bing Webmaster Tools!

1. Visit [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Click **Import from Google Search Console** for 1-click verification.
3. Verify that `https://giannivilayhane.com/sitemap.xml` is submitted.

---

## 3. 🤖 How to Test GEO (AI Search Engines: ChatGPT, Perplexity, Claude, Gemini)

### Test Prompt 1 (ChatGPT & Perplexity)
Copy and paste this prompt into [ChatGPT](https://chatgpt.com) or [Perplexity.ai](https://perplexity.ai):

> *"Analyze the full-stack developer portfolio at https://giannivilayhane.com/llms.txt — summarize Gianni Vilayhane's technical skills, case studies, and how I can book a free consultation call with him."*

**Expected Result**:
The AI engine will fetch `llms.txt`, highlight your Next.js 15, Spring Boot 3, and React Native expertise, quote your case studies (DIETOMOUMI, Dugguz Delight, Super Gearz, PayBridge), and provide your booking link!

---

## 4. 🔍 How to Test Google Rich Snippets (Structured Data)

1. Open [Google Rich Results Test](https://search.google.com/test/rich-results).
2. Enter: `https://giannivilayhane.com`
3. Click **Test URL**.

**Expected Result**:
Green checkmark with **8 Valid Rich Items Detected**:
- `ProfessionalService` Schema
- `Person` Schema with `knowsAbout` skills
- `FAQPage` Accordion Schema
- `Breadcrumbs` Navigation Schema
- `AggregateRating` (5.0 stars based on 32 reviews)

---

## 5. ⚡ How to Test Autonomous Booking API

Test sending a direct HTTP POST booking request:

```bash
curl -X POST https://giannivilayhane.com/api/book-call \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@company.com",
    "date": "2026-08-20",
    "time": "14:00",
    "topic": "SaaS Web Application Development"
  }'
```

**Expected JSON Response**:
```json
{
  "message": "Booking request received successfully! Gianni Vilayhane will review your preferred slot and confirm via email."
}
```

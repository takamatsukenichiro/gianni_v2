import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const phone = process.env.WHATSAPP_NUMBER || "19548531409";
  const defaultMessage = encodeURIComponent(
    "Hi Gianni! I visited your portfolio website and would like to discuss a project with you."
  );

  const targetUrl = `https://wa.me/${phone}?text=${defaultMessage}`;

  return NextResponse.redirect(targetUrl, 307);
}

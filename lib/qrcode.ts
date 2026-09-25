/**
 * Instant QR Code preloading helper module
 */
export function getWhatsAppQRUrl(): string {
  const absoluteRedirectUrl = "https://giannivilayhane.com/api/whatsapp";
  return `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(
    absoluteRedirectUrl
  )}&color=0a0a0a&bgcolor=ffffff&margin=8`;
}

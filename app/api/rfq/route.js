import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatPayload(payload) {
  return Object.entries(payload)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => `${key}: ${typeof value === "boolean" ? (value ? "yes" : "no") : value}`)
    .join("\n");
}

// POST /api/rfq — sends RFQ/BOM submissions through Resend.
export async function POST(request) {
  let payload = {};
  try {
    payload = await request.json();
  } catch (e) {
    return NextResponse.json({ ok: false, message: "Invalid request payload." }, { status: 400 });
  }

  const reference = "SRM-RFQ-" + Math.floor(Math.random() * 900000 + 100000);
  const receivedAt = new Date().toISOString();
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RFQ_TO_EMAIL || "rfq@srmglobaltech.com";
  const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey) {
    return NextResponse.json({ ok: false, message: "RFQ email service is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const details = formatPayload(payload);
  const subject = `[${reference}] RFQ via srmglobaltech.com`;
  const text = [
    `New RFQ received: ${reference}`,
    `Received at: ${receivedAt}`,
    "",
    details,
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: payload.email || undefined,
    subject,
    text,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#131722">
        <h2 style="margin:0 0 12px;color:#122a52">New RFQ received</h2>
        <p><strong>Reference:</strong> ${escapeHtml(reference)}</p>
        <p><strong>Received at:</strong> ${escapeHtml(receivedAt)}</p>
        <pre style="white-space:pre-wrap;background:#f3f6fc;border:1px solid #cfdcf0;padding:14px;border-radius:4px">${escapeHtml(details)}</pre>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({
      ok: false,
      reference,
      receivedAt,
      message: error.message || "Unable to send RFQ email.",
    }, { status: 502 });
  }

  return NextResponse.json({
    ok: true,
    reference,
    receivedAt,
    message: "Routed to sourcing desk. Account manager will respond within 2 business hours.",
  });
}

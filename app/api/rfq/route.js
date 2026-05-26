import { NextResponse } from "next/server";

// POST /api/rfq — stub handler
// TODO: wire this into your CRM / SMTP / Slack webhook of choice.
export async function POST(request) {
  let payload = {};
  try { payload = await request.json(); } catch (e) {}

  const reference = "SRM-RFQ-" + Math.floor(Math.random() * 900000 + 100000);
  const receivedAt = new Date().toISOString();

  // Server-side log — visible in `npm run dev` console
  console.log("[RFQ]", reference, receivedAt, payload);

  // Example wiring (uncomment + implement):
  //
  // await fetch(process.env.SLACK_WEBHOOK_URL, { method: "POST", body: JSON.stringify({
  //   text: `New RFQ ${reference} from ${payload.email}\n\`\`\`${JSON.stringify(payload, null, 2)}\`\`\``
  // })});
  //
  // await sendMail({
  //   to: "rfq@srmglobaltech.com",
  //   subject: `[${reference}] RFQ via srmglobaltech.com`,
  //   text: JSON.stringify(payload, null, 2),
  // });

  return NextResponse.json({
    ok: true,
    reference,
    receivedAt,
    message: "Routed to sourcing desk. Account manager will respond within 2 business hours.",
  });
}

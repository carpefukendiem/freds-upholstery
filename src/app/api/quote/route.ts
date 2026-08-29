import { NextResponse } from "next/server";

/**
 * Quote intake endpoint.
 *
 * TODO before launch: forward to the CRM. Set QUOTE_WEBHOOK_URL in .env.local
 * to a GoHighLevel inbound webhook (or replacement) and this will relay to it.
 * Without that, submissions are logged and nothing else — leads will be lost.
 */
export async function POST(req: Request) {
  const body = await req.json();

  if (!body?.name || !body?.email || !body?.details) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const webhook = process.env.QUOTE_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, source: "website-quote-form" }),
      });
    } catch (err) {
      console.error("Quote webhook failed:", err);
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
  } else {
    console.warn("QUOTE_WEBHOOK_URL not set — quote request not delivered:", body);
  }

  return NextResponse.json({ ok: true });
}

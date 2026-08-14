import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";

const paths = { service: "/api/v1/service-requests", contact: "/api/v1/contact", partner: "/api/v1/provider-interest" } as const;

export async function POST(request: NextRequest) {
  const base = process.env.FORM_API_BASE_URL?.trim();
  if (!base || !base.startsWith("https://")) return NextResponse.json({ error: "Request delivery is unavailable." }, { status: 503 });
  let payload: Record<string, unknown>;
  try { payload = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const kind = payload.kind as keyof typeof paths;
  if (!(kind in paths)) return NextResponse.json({ error: "Invalid form type." }, { status: 400 });
  const idempotencyKey = request.headers.get("idempotency-key") || randomUUID();
  delete payload.kind;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);
  try {
    const upstream = await fetch(new URL(paths[kind], base), {
      method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json", "Idempotency-Key": idempotencyKey,
        "User-Agent": "booked4seasons-web/1", "X-Forwarded-For": request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "" },
      body: JSON.stringify(payload), signal: controller.signal, cache: "no-store",
    });
    const body = await upstream.json().catch(() => ({}));
    if (!upstream.ok) return NextResponse.json({ error: "The request could not be accepted." }, { status: upstream.status });
    return NextResponse.json(body, { status: upstream.status, headers: { "Cache-Control": "no-store" } });
  } catch { return NextResponse.json({ error: "Request delivery failed." }, { status: 502 }); }
  finally { clearTimeout(timeout); }
}

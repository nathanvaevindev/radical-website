import { NextRequest, NextResponse } from "next/server";

// Webhook handler — receives form submission payloads and forwards them
// to the Radical portal when the portal API spec is delivered (phase 2).
// For now the handler is a no-op stub, ready to be wired up.
export async function POST(request: NextRequest) {
  // TODO: wire up to portal API in phase 2
  // 1. Parse payload
  // 2. Authenticate (shared secret header)
  // 3. POST structured data to portal API endpoint
  void request;
  return NextResponse.json({ received: true }, { status: 200 });
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // TODO: implement "Hire a Radical" form handler
  // 1. Validate request body (zod schema)
  // 2. Write submission to Supabase form_submissions table
  // 3. Send email notification via Infomaniak KSuite SMTP
  // 4. Fire webhook to /api/webhooks/form-submission
  void request;
  return NextResponse.json({ ok: true }, { status: 200 });
}

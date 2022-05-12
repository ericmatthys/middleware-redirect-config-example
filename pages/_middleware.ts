import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const clone = req.nextUrl.clone()
  clone.pathname = `/country/${req.geo?.country ?? 'US'}${clone.pathname}`
  return NextResponse.rewrite(clone)
}

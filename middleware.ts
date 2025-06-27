import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  if (url.startsWith("/.well-known/appspecific/")) {
    // 404 응답 직접 반환
    return new Response("Not found", { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};

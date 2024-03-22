import { NextRequest, NextResponse } from "next/server"


export function middleware(request: Request) {
  const token = request.headers.get("Authorization");

  if (token === null) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
    // return new Response("Unauthorized", {status: 401})
  }


  return NextResponse.next();
}

//gagamitin lang if yung middleware is for specific route lang
export const config = {
  matcher: ["/api/auth/login"]
}

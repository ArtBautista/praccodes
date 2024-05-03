import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const publicPaths =
    path === "/auth/login" || path === "/auth/register" || path === "/";

  if (publicPaths && token) {
    return NextResponse.redirect(new URL("/student", req.nextUrl));
  }
  if (!publicPaths && !token) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }
}
export const config = {
  matcher: ["/", "/auth/login", "/auth/register", "/student"],
};

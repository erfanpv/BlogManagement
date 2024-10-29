import { NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export function middleware(req) {

  const token = getCookie("auth_token", { req });

  console.log(token)

  // Allow access to the login page
  if (req.nextUrl.pathname === "/admin/logIn") {
    return NextResponse.next();
  }

  // Protect all other admin routes
  if (req.nextUrl.pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/admin/logIn", req.url));
  }

  console.log("erfan")

  return NextResponse.next();
}

// export const config = {
//   matcher: ["/admin/:path*"], // Apply middleware to all admin routes
// };



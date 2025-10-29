import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  console.log(`[MIDDLEWARE] Processing request for: ${pathname}`);

  // Only process dashboard routes
  if (!pathname.startsWith('/admin-dashboard') && !pathname.startsWith('/student-dashboard')) {
    return NextResponse.next();
  }

  // Retrieve JWT token from cookies
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const userRole = token?.role;

  console.log(`[MIDDLEWARE] Token found:`, !!token);
  console.log(`[MIDDLEWARE] User role:`, userRole);

  // Redirect unauthenticated users to signin
  if (!token) {
    console.log(`[MIDDLEWARE] No token found. Redirecting to /signin from ${pathname}`);
    const signinUrl = req.nextUrl.clone();
    signinUrl.pathname = '/signin';
    return NextResponse.redirect(signinUrl);
  }

  // Block admin-only routes from students
  if (pathname.startsWith('/admin-dashboard') && userRole !== 'admin') {
    console.log(`[MIDDLEWARE] User with role ${userRole} tried to access admin dashboard. Redirecting.`);
    const dashboardUrl = req.nextUrl.clone();
    dashboardUrl.pathname = '/student-dashboard';
    return NextResponse.redirect(dashboardUrl);
  }

  // Block student-only routes from admins
  if (pathname.startsWith('/student-dashboard') && userRole !== 'student') {
    console.log(`[MIDDLEWARE] User with role ${userRole} tried to access student dashboard. Redirecting.`);
    const dashboardUrl = req.nextUrl.clone();
    dashboardUrl.pathname = '/admin-dashboard';
    return NextResponse.redirect(dashboardUrl);
  }

  console.log(`[MIDDLEWARE] Access granted for ${userRole} to ${pathname}`);
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin-dashboard/:path*',
    '/student-dashboard/:path*'
  ],
};
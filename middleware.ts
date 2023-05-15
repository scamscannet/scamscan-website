import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

import { i18n } from "./i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export default async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = req.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !path.startsWith(`/${locale}/`) && path !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(req);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}/${path}`, req.url));
  }

  // // If it's the root path, just render it
  // if (path === "/") {
  //   return NextResponse.next();
  // }

  // const session = await getToken({
  //   req,
  //   secret: process.env.NEXTAUTH_SECRET,
  // });
  // if (!session && path === "/protected") {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // } else if (session && (path === "/login" || path === "/register")) {
  //   return NextResponse.redirect(new URL("/protected", req.url));
  // }
  // return NextResponse.next();
}

export const config = {
  matcher: [
    '/'
  ],
};

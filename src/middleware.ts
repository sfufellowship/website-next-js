import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "zh"];
const defaultLocale = "zh";

function getLocale(_request: NextRequest): string {
    // Always return Chinese as default
    return defaultLocale;
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

    // If no locale in path, redirect to Chinese version
    if (pathnameIsMissingLocale) {
        return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next).*)",
    ],
};

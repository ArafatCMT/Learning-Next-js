import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest){
    // return NextResponse.redirect(new URL("/", request.url))
    const response = NextResponse.next();
    const themePreference = request.cookies.get("theme");
    const requestHeaders = request.headers.get("Custom-Value")

    if (!requestHeaders){
        response.headers.set("Custom-Value","good");
    }

    if (!themePreference){
        response.cookies.set("theme","dark")
    }

    return response;

    // if(request.nextUrl.pathname === "/about"){
    //     return NextResponse.redirect(new URL("/", request.nextUrl))
    //     // return NextResponse.rewrite(new URL("/", request.nextUrl))
    // }
};

// export const config = {
//     matcher: "/about",
// };
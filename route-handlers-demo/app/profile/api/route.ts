import { cookies, headers } from "next/headers"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    
    // const headers = new Headers(request.headers)
    // 👉 Client (browser / frontend) থেকে আসা সব HTTP headers এখানে থাকে, ei ta custom vabe headers get kora 
    // (যেমন: Authorization, Content-Type, User-Agent)
    //    console.log(headers.get("Authorization"))

    // r ei ta build in headers
    const headerList = await headers();
    console.log(headerList.get("Authorization"))

    // custom cookie get system 
    // const theme = request.cookies.get("theme");
    // console.log(theme)

    // build in cookies() ei ta deye cookies get,set kora jai
    const cookieStore = await cookies();
    cookieStore.set("resultPerPage", "20")
    console.log(cookieStore.get("resultPerPage"))
 
    return new Response("<h1>Profile API data!</h1>",{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=dark"
        }
    })
}
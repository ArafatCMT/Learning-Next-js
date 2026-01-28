import { NextRequest } from "next/server";
import {Comments} from "./data"

export async function GET(request:NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    // NextRequest use করে তুমি server-side এ সেই request-এর URL access করতে পারো।
    // console.log(searchParams)
    const query = searchParams.get("query");
    const fillteredComments = query ? Comments.filter((comment)=>comment.text.includes(query)) : Comments;
    return Response.json(fillteredComments);
}

export async function POST(request:Request){
    const comment = await request.json();
    const newComment = {
        id: Comments.length + 1,
        text: comment.text
    };
    Comments.push(newComment);
    return new Response(JSON.stringify(newComment),{
        headers:{"Content-Type":"application/json"},
        status:201
    });
}
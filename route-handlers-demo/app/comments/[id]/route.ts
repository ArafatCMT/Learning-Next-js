import { headers } from "next/headers";
import {Comments} from "../data"

export async function GET(request:Request,{params}:{params: Promise<{id:string}>}){
    const {id} = await params;
    const comment = Comments.find((comment)=>comment.id === parseInt(id))
    return Response.json(comment)
}

export async function PATCH(request:Request, {params}:{params: Promise<{id:string}>}){
    const body = request.json();
    const {text} = await body
    console.log(text)
    const {id} = await params;
    const index = Comments.findIndex((comment)=>comment.id === parseInt(id));
    Comments[index].text = text;
    return new Response(JSON.stringify(Comments[index]),{
        headers:{"Content-Type":"application/json"},
        status:200,
    })    
}

export async function DELETE(request:Request,{params}:{params: Promise<{id:string}>}){
    const {id} = await params;
    const index = Comments.findIndex((comment)=> comment.id === parseInt(id));
    const deleteComment = Comments.splice(index,1);
    return new Response(JSON.stringify({message:"Comment delete successfully!",delete:deleteComment},),{
        headers:{"Content-Type":"application/json"},
        status:200,
    })
}
import {Metadata} from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title:{
        absolute:"Blog"
    }
}

export default async function Blog(){
    await new Promise((reslove) =>{
        setTimeout(()=>{
            reslove("Intentional Dealy")
        },2000)
    })
    return (
        <>
            <Link href="/">Home</Link>
            <h1 className="text-4xl">My blog</h1>
        </>
    )
}
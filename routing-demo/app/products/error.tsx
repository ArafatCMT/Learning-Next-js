"use client"
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({error, reset}:{error:Error; reset:()=>void}){
    const router = useRouter();
    const reload = () => {
        console.log("reload")
        startTransition(()=>{
            router.refresh();
            reset()
        })
    }
    return(
        <>
            <h2>{error.message}</h2>
            <button onClick={()=>reload()}>Try Again</button>
        </>
    )
}
"use client"
import { useState } from "react"

export default function Dashboard(){
    console.log("Dashboard client component!")
    const [input,SetInput] = useState("");
    return(
        <>
            <h1>Dashboard</h1>
            <input value={input} onChange={(e)=> SetInput(e.target.value)}/>
            <p>
                Hello {input}
            </p>
        </>
    )
}
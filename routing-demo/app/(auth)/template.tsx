"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./style.css"
import { useState } from "react"

const navLinks = [
    {name:"Register", href:"/register"},
    {name:"Login", href:"/login"},
    {name:"Forgot Password", href:"/forgot-password"},
]


export default function AuthLayout({children,}: {children: React.ReactNode}){
    const [input , setInput] = useState("");
    const pathName = usePathname();
    // console.log(pathName);
    return(
        <div>
            <div>
                <input value={input} onChange={(event) => setInput(event.target.value)}/>
            </div>
            {
                navLinks.map((link)=>{
                    const isActive = pathName === link.href || (pathName.startsWith(link.href) && link.href !== "/");
                    return(
                        <Link className={isActive? "active":"link"} href={link.href} key={link.name}>{link.name}</Link>
                    )
                })
            }
            {children}
        </div>
    )
};
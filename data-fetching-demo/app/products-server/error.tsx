"use client"

export default function Loading({error}:{error:Error}){
    return(
        <>  
            <h2 style={{textAlign:"center", marginTop:"30px", fontSize: "22px", color:"red"}}>{error.message}</h2>
        </>
    )
}
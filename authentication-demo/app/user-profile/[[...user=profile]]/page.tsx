import { UserProfile } from "@clerk/nextjs"

export default function UserProfilePage(){
    return(
        <>
            <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
                <UserProfile path="/user-profile"/>
            </div>
        </>
    )
}
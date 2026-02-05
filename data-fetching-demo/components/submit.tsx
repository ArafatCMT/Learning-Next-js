"use client"
import { useFormStatus } from "react-dom";


export default function Submit(){
    const {pending} = useFormStatus();
    return(
        <button
                    disabled={pending}
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: pending ?  "gray" :"#2563eb",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    {pending? "Submitting..." : "Submit"}
                </button>
    )
}
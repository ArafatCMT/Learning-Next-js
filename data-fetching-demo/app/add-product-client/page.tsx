"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";


export default function AddProductClient() {
    const [title,setTitle] = useState("");
    const [Price,setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [loading,setLoading] = useState(false);

    const router = useRouter();

    const HandleSubmit = async(event:React.FormEvent<HTMLFormElement>)=>{
        // “এই event আসে form থেকে যখন submit হয়, আর এটা React এর form event”
        // অর্থাৎ, যখন তুমি <form> submit করো, form থেকে আসা সব তথ্য এই event-এর মধ্যে থাকে, আর React সেটাকে automatically function-এ পাঠায়।
        event.preventDefault();
        setLoading(true)

        const price = Number(Price) // string ke number e type casting kora hocce

        try{
            const response = await fetch("http://127.0.0.1:8000/api/products/",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({title, price, description})
            })
            if(!response.ok){
                throw new Error("Faild to add product!");
            }
            await new Promise((reslove)=> setTimeout(reslove,1000))
            // console.log(response.ok);
            router.push("/products-client")
            
        }catch(error){
            if(error instanceof Error){
                console.log(error.message)
            }
        }
    }

    return (
        <form onSubmit={HandleSubmit}
            style={{
                width: "400px",
                margin: "40px auto",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    marginBottom: "20px",
                }}
            >
                Add Product Client
            </h2>

            {/* User ID */}
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                    Title
                </label>
                <input
                    type="text"
                    name='title'
                    placeholder="Enter title"
                    style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                    }}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>

            {/* Title */}
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                    Price
                </label>
                <input
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                    }}
                    onChange={(event) => setPrice(event.target.value)}
                />
            </div>

            {/* Description */}
            <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                    Description
                </label>
                <textarea
                    name="description"
                    placeholder="Enter description"
                    rows={4}
                    style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        resize: "none",
                    }}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </div>

            <button
                type="submit"
                style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#2563eb",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "16px",
                }}
            >
                {loading? "Submitting...": "Submit"}
            </button>
        </form>
    )
}
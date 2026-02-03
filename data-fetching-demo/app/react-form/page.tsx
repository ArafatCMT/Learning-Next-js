"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreatePost() {
    const [userId, setUserId] = useState<number>(1);
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // page reload আটকানো
        setLoading(true);
        // console.log("form submit")

        // TypeScript এখানে e.target কে generic EventTarget type হিসেবে ধরে
        // EventTarget-এর মধ্যে form এর specific properties নেই
        // তাই form.elements বা form.userId access করলে compile-time error দিবে
        // as HTMLFormElement = type assertion / cast
        // তুমি বলছো: "এই event.target আসলে form element"
        const form = event.target as HTMLFormElement;
        const userId = (form.elements.namedItem("userId") as HTMLInputElement).value;
        const title = (form.elements.namedItem("title") as HTMLInputElement).value;
        const body = (form.elements.namedItem("body") as HTMLInputElement).value;

        // console.log(userId," ", title, " - ", body)

        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({userId, title, body})
            });
            if(response.ok){
                // router.push("/posts-sequential")
                console.log(response.ok)
            }
        }catch(error){
            console.log("error", error)
        }finally{
            setLoading(false)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}
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
                    Create Post
                </h2>

                {/* User ID */}
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        User ID
                    </label>
                    <input
                        type="number"
                        name="userId"
                        placeholder="Enter user id"
                        style={{
                            width: "100%",
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                        onChange={(event) => setUserId(Number(event.target.value))}
                    />
                </div>

                {/* Title */}
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
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

                {/* Description */}
                <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Description
                    </label>
                    <textarea
                        name="body"
                        placeholder="Enter description"
                        rows={4}
                        style={{
                            width: "100%",
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            resize: "none",
                        }}
                        onChange={(event) => setBody(event.target.value)}
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
                    {loading? "Submitting...":"Submit"}
                </button>
            </form>

        </>
    )
}
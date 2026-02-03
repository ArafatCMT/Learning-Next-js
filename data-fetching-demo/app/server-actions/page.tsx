import { redirect } from "next/navigation";

export default function ServerAction() {
    async function CreatePost(formData:FormData){
        "use server"
        const userId = formData.get("userId")
        const title = formData.get("title");
        const body = formData.get("body")

        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({userId,title,body})
        })
        if(response.ok){
            console.log(response.ok)
            redirect("/posts-sequential")
        }
        console.log("hello ????")
    }
    return (
        <>
            <form action={CreatePost}
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
                   Submit
                </button>
            </form>

        </>
    )
}
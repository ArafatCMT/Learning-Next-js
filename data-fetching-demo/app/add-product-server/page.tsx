import { redirect } from "next/navigation";

export default function AddProductServer() {
    async function HandleSubmit(formData: FormData) {
        "use server"

        const title = formData.get("title");
        const price = Number(formData.get("price"));
        const description = formData.get("description");

        const response = await fetch("http://127.0.0.1:8000/api/products/",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({title, price, description})
        });
        if(!response.ok){
            throw new Error("Faild to add product!");
        }
        redirect("/products-server")

    }

    return (
        <>
            <form action={HandleSubmit}
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
                    Add Product Server
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
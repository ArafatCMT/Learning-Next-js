"use client"
import { useActionState } from "react";
import { formState } from "@/app/add-product-server/products";
import { Product } from "../page";
import { EditProduct } from "@/app/add-product-server/products";

export default function EditProductForm({product}:{product: Product}) {

    const initialState: formState ={
        errors:{}
    }

    const [state, formAction, isPending] = useActionState(EditProduct, initialState)
    // useActionState () প্রথম parameter হলো server action function যা তুমি form-submit এ চালাতে চাও, এটা একটা function যা form data নিয়ে server-side কাজ করে (validation, save, etc.)
    
    return (
        <>
            <form action={formAction}
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
                        marginBottom: "25px",
                        fontWeight: "bold",
                        fontSize:"25px"
                    }}
                >
                    Edit Product Form
                </h2>

                {/* User ID */}
                <div style={{ marginBottom: "15px" }}>
                    <input type="hidden" name="id" value={product.id}/>
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
                        defaultValue={product.title}
                    />
                    {
                        state.errors.title && <p style={{color:"red"}}>{state.errors.title}</p>
                    }
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
                        defaultValue={product.price}
                    />
                    {
                        state.errors.price && <p style={{color:"red"}}>{state.errors.price}</p>
                    }
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
                        defaultValue={product.description ?? ""}
                    />
                    {
                        state.errors.description && <p style={{color:"red"}}>{state.errors.description}</p>
                    }
                </div>

                <button
                    disabled={isPending}
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: isPending? "gray": "#2563eb",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    {isPending? "Updating...": "Update"}
                </button>
                {/* <Submit/> */}
            </form>
        </>
    )
}
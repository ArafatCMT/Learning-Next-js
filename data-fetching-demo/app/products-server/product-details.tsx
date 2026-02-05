"use client"
import { RemoveProduct } from "../add-product-server/products";
import { useOptimistic } from "react";
import Link from "next/link";

export type Product = {
    id: number,
    title: string,
    price: number,
    description: string
}

export async function ProductDetails({ products }: { products: Product[] }) {

    // Step 1️⃣: useOptimistic setup
    // - Component render হওয়ার সময় `useOptimistic` একবার initialize হয়
    // - `products` = server থেকে আসা আসল data
    // - `optimisticProducts` = UI state mne products সেট হয়, ekhen e original (optimisticProducts === products)
    //   মানে UI তে server এর আসল data দেখা যাবে, কোনো change হয়নি

    const [optimisticProducts, setOptimisticProduct] = useOptimistic(
        products,
        (currentProducts, productId) => {
            return currentProducts.filter((product) => product.id !== productId)
            // Step 3️⃣: Updater function কাজ করে
            // - `currentProducts` = আগের UI state (optimisticProducts)
            // - `productId` = যেটা user delete করতে চাচ্ছে
            // - updater function filter করে ঐ product বাদ দেয়
            // - নতুন array return হয় → UI তে instant update হয়
            // - তারপর `optimisticProducts` = updater function return value সেট হয়  mne optimisticProduct === currentProducts 
        });

    const removeProductId = async (productId: number) => {
        // Step 2️⃣: User action triggers delete
        // - যখন `removeProductById(productId)` call হয়
        // - `setOptimisticProducts(productId)` execute হয়
        // - তখন `updater function` (currentProducts, productId) auto call হয়
        setOptimisticProduct(productId);
        await RemoveProduct(productId);
    }

    return (
        <>
            <div style={{ padding: "20px" }}>
                <h1 style={{ marginBottom: "20px", color: "#333", fontFamily: "Arial, sans-serif", fontSize: "32px" }}>
                    Products List on server component
                </h1>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px", // gap between cards
                    }}
                >
                    {products.map((product: Product) => {
                        return (
                            <div
                                key={product.id}
                                style={{
                                    border: "1px solid #ccc",
                                    borderRadius: "10px",
                                    width: "300px",
                                    padding: "15px",
                                    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                                    fontFamily: "Arial, sans-serif",
                                }}
                            >
                                <h2 style={{ margin: "0 0 10px 0", fontSize: "20px", color: "#333" }}>
                                    {product.title}
                                </h2>
                                <p style={{ margin: "0 0 10px 0", fontWeight: "bold", color: "#007BFF" }}>
                                    Price: {product.price} BDT
                                </p>
                                <p style={{ margin: "0", color: "#555", fontSize: "14px" }}>
                                    {product.description}
                                </p>
                                {/* button  */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        gap: "12px",
                                        marginTop: "10px",
                                    }}
                                >
                                    <Link href={`/products-server/${product.id}`}
                                        style={{
                                            padding: "7px 14px",
                                            borderRadius: "6px",
                                            border: "1px solid #2563eb",
                                            backgroundColor: "#3b82f6",
                                            color: "#fff",
                                            cursor: "pointer",
                                            fontWeight: "500",
                                        }}
                                    >
                                        Edit
                                    </Link>

                                    <form action={removeProductId.bind(null, product.id)}>
                                        <button
                                            style={{
                                                padding: "7px 14px",
                                                borderRadius: "6px",
                                                border: "1px solid #dc2626",
                                                backgroundColor: "#ef4444",
                                                color: "#fff",
                                                cursor: "pointer",
                                                fontWeight: "500",
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </form>
                                </div>

                            </div>
                        )
                    })
                    }

                </div>
            </div>
        </>
    )
}
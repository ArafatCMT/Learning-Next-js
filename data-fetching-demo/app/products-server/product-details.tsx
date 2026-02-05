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

export async function ProductDetails({products}:{products: Product[]}) {

    // step 1 e useOptimistic setup hoi e optimisticProducts === products set hoi ca [jeta hocce server action theke asa real data]

    const [optimisticProducts, setOptimisticProduct] = useOptimistic(
        products,
        (currentProducts, productId) => {
            return currentProducts.filter((product) => product.id !== productId)
            // step 3 te setOptimisticProduct function jei productId value deye call hoica oi ta amra currentProducts array thake filter kore bad dao ya hocca and abong optimisticProducts === currentProducts set kora hocce  
        });

    const removeProductId = async (productId: number) => {
        setOptimisticProduct(productId);
        // step 2 te jhokon removeProductId tigger hoi ca thokon setOptimisticProduct(productId) deye (currentProducts, productId) function ta call hobe 
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
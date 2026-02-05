"use client"
import { use, useEffect, useState } from "react"

type Product = {
    id: number,
    title: string,
    price: number,
    description: string
}


export default function ProductsClient() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function GetProducts() {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/product-list/");

                if (!response.ok) {
                    throw new Error("Faild to fetch data in client component!");
                }
                const data = await response.json();
                setProducts(data)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
                else {
                    setError("An Unknown error occurred!");
                }
            } finally {
                setLoading(false);
            }

        }
        GetProducts();
    }, []);
    
    // console.log(products)
    if(loading) return <h2 style={{textAlign:"center", marginTop:"30px", fontSize: "22px"}}>Loaiding...</h2>
    if(error) return <h2 style={{textAlign:"center", marginTop:"30px", fontSize: "22px", color:"red"}}>{error}</h2>

    return (
        <>
            <div style={{ padding: "20px"}}>
                <h1 style={{ marginBottom: "20px", color: "#333", fontFamily: "Arial, sans-serif", fontSize: "32px" }}>
                    Products List on client component
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
                            </div>
                        )
                    })
                    }

                </div>
            </div>
        </>
    )
}
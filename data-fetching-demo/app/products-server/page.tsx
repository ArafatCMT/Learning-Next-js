import Link from "next/link"
import { RemoveProduct } from "../add-product-server/products";

export type Product = {
    id: number,
    title: string,
    price: number,
    description: string
}

export default async function ProductsServer() {
    // await new Promise((reslove) => setTimeout(reslove, 1500));
    const response = await fetch("http://127.0.0.1:8000/api/product-list/");

    if (!response.ok) throw new Error("Faild to fetch data in server component!");

    const products: Product[] = await response.json();

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

                                    <form action={RemoveProduct.bind(null, product.id)}>
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
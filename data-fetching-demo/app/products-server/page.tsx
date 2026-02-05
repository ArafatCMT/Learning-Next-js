type Product = {
    id: number,
    title: string,
    price: number,
    description: string
}

export default async function ProductsServer() {
    await new Promise((reslove) => setTimeout(reslove, 1500));
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
                            </div>
                        )
                    })
                    }

                </div>
            </div>
        </>
    )
}
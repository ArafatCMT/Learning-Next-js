import Link from "next/link"
import {ProductDetails} from './product-details'

export type Product = {
    id: number,
    title: string,
    price: number,
    description: string
}

export default async function ProductsServer() {

    const response = await fetch("http://127.0.0.1:8000/api/product-list/");

    if (!response.ok) throw new Error("Faild to fetch data in server component!");

    const products: Product[] = await response.json();

    return (
        <>
            <ProductDetails products={products}/>
        </>
    )
}
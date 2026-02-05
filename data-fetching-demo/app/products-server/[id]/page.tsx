import { Product } from "../page";
import EditProductForm from './product-edit-form'
import { notFound } from "next/navigation";

export default async function ProductDetails({params}:{params: Promise<{id: string}>}){
    const {id} = await params;

    const response = await fetch(`http://127.0.0.1:8000/api/product-details/${Number(id)}`)
    const product : Product | null = await response.json();

    if(!product){
        notFound();
    }

    return(
        <>
            <EditProductForm product={product}/>
        </>
    )
}
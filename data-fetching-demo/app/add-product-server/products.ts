"use server"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type Errors = {
    title?: string,
    price?: string,
    description?: string
}

export type formState = {
    errors: Errors
}

export async function HandleSubmit(preState: formState ,formData: FormData) {

    const title = formData.get("title");
    const price = Number(formData.get("price"));
    const description = formData.get("description");

    const errors: Errors = {};

    if (!title) {
        errors.title = "Title is required"
    }

    if (!price) {
        errors.price = "price is required"
    }

    if (!description) {
        errors.description = "Description is required"
    }

    if (Object.keys(errors).length > 0) {
        return { errors }
    }

    const response = await fetch("http://127.0.0.1:8000/api/products/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price, description })
    });
    await new Promise((reslove) => setTimeout(reslove, 1000))
    if (response.ok) {
        redirect("/products-server")
    }
    throw new Error("Faild to add product!");
}

export async function EditProduct(preState: formState ,formData: FormData) {

    const id = Number(formData.get("id"))
    const title = formData.get("title");
    const price = Number(formData.get("price"));
    const description = formData.get("description");

    const errors: Errors = {};

    if (!title) {
        errors.title = "Title is required"
    }

    if (!price) {
        errors.price = "price is required"
    }

    if (!description) {
        errors.description = "Description is required"
    }

    if (Object.keys(errors).length > 0) {
        return { errors }
    }

    const response = await fetch(`http://127.0.0.1:8000/api/product-details/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price, description })
    });
    await new Promise((reslove) => setTimeout(reslove, 1000))
    if (response.ok) {
        redirect("/products-server")
    }
    throw new Error("Faild to add product!");
}

export async function RemoveProduct(id:number) {
    const response = await fetch(`http://127.0.0.1:8000/api/product-details/${id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"}
    })

    if(response.ok){
        console.log(response.ok)
        revalidatePath("/products-server")
        // revalidatePath() দিলে ওই path-এর data আবার নতুন করে fetch হবে।
    }
}


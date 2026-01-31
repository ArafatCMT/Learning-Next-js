import Link from "next/link"

export default function products(){
    return(
        <>
            <h1>Product List Page</h1>
            <p>
                <Link href="/products/1">Product 1</Link>
            </p>
            <p>
                <Link href="/products/2">Product 2</Link>
            </p>
            <p>
                <Link href="/products/3">Product 3</Link>
            </p>
        </>
    )
}
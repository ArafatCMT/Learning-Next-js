import { Products } from "@/components/products"
import { Reviews } from "@/components/reviews"
import { Suspense } from "react"


export default function ProductReviews(){
    return(
        <>
            <h1>Product Reviews</h1>
            <Suspense fallback={<p>Loading products...</p>}>
                <Products/>
            </Suspense>

            <Suspense fallback={<p>Reviews Loading...</p>}>
                <Reviews/>
            </Suspense>
        </>
    )
}
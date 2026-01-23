"use client"
import { usePathname } from "next/navigation"

export default function NotFound(){
    const pathName = usePathname();
    const productId = pathName.split("/")[2];
    const reviewId = pathName.split("/")[4];
    // console.log(productId, reviewId);
    return(
        <>
            <div className="text-2xl text-center mt-2">
                <h2>Review {reviewId} Not Found for product {productId}</h2>
            </div>
        </>
    )
}
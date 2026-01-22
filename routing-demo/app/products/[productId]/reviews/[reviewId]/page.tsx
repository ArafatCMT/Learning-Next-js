export default async function ProductReview({params}:{params: Promise <{productId:string; reviewId:string}>}){
    const {productId,reviewId} = await params;
    return(
        <>  
            <h1 className="text-4xl">Review {reviewId} for product {productId} </h1>
        </>
    )
}
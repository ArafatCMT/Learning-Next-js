export default async function ProductReviews({params}:{params: Promise<{productId:string}>}){
    const productId = (await params).productId;
    return(
        <>
            <h1 className="text-4xl">All reviews for product {productId}</h1>
            <ul>
                <li style={{textDecoration:"underline", color:"blue"}}><a href={`/products/${productId}/reviews/1`}>Review 1 for product {productId}</a></li>
                <li style={{textDecoration:"underline", color:"blue"}}><a href={`/products/${productId}/reviews/2`}>Review 2 for product {productId}</a></li>
                <li style={{textDecoration:"underline", color:"blue"}}><a href={`/products/${productId}/reviews/3`}>Review 3 for product {productId}</a></li>
            </ul>
        </>
    )
}
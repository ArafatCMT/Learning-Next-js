export default async function ProductDetails({params}:{params: Promise<{productId:string}>}){
    // {params} এইটা হলো destructuring syntax
    // মানে: function এ যা object pass হয়েছে, তার মধ্যে params property` বের করা হচ্ছে সরাসরি variable হিসেবে
    // : {params: Promise<{productId:string}>} Colon এর পর type annotation বলে দিচ্ছে params কোন type এর হবে 
    // params একটি Promise object Promise resolve হলে একটি object পাওয়া যাবে যার মধ্যে productId string হবে
    const productId = (await params).productId;
    // console.log(productId)
    return(
        <>  
            <h1 className="text-4xl">Details about product {productId}</h1>
        </>
    )
}
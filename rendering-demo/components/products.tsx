export async function Products(){
    await new Promise((reslove)=>setTimeout(reslove,2000))
    return(
        <>
            <h1>Products</h1>
        </>
    )
}
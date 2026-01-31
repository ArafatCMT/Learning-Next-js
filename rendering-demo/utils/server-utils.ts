import "server-only"

export const serverSideFuntion = () =>{
    console.log(
        `use multiple libraries,
        use environment variables,
        interacts with database,
        process confidential information`
    )
    return "server result"
}
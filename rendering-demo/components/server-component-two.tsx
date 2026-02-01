import fs from "fs"
// Node.js এর built-in file system module import করা হয়েছে
// fs দিয়ে আমরা server থেকে file read/write করতে পারি
// Important: এটা server-only, browser এ কাজ করবে না

export const ServerComponentTwo = () =>{
    fs.readFileSync("components/server-component-two.tsx", "utf-8")
    return(
        <>
            <h1>Server Component Two</h1>
        </>
    )
}
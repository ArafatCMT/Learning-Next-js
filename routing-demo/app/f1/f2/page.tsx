import Link from "next/link"

export default function F2(){
    return(
        <>
            <h1>F2</h1>
            <p>
                <Link href="/f1">F1</Link>
            </p>
            <p>
                <Link href="/f4">F4</Link>
            </p>
        </>
    )
}
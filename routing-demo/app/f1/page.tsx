import Link from "next/link"

export default function F1(){
    return(
        <>
            <h1>F1</h1>
            <p>
                <Link href="/f1/f2">F2</Link>
            </p>
            <p>
                <Link href="/f3">F3</Link>
            </p>
        </>
    )
}
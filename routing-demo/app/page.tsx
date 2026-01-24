import Link from "next/link"

export default function Home(){
  return (
    <>
      <h1 className="text-3xl">Welcome Home!</h1>
      <p>
        <Link href="/blog">Blog</Link>
      </p>
      <p>
        <Link href="/products">Products</Link>
      </p>
    </>
  )
}
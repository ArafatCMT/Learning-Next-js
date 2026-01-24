"use client"

import Link from "next/link"
import {use} from "react"

export default function NewsArticles({
    params,
    searchParams,
}: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
    // lang এর value শুধু এই তিনটার যেকোনো একটাই হতে পারবে: "en" (English), "es" (Spanish), অথবা "fr" (French)।
}) {
    // console.log(params,searchParams);
    const { articleId } =use(params);
    const { lang = "en" } = use(searchParams);
    return (
        <>
            <h2>News article {articleId}</h2>
            <h3>Read in language {lang}</h3>
            <p>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            </p>
            <p>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            </p>
            <p>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            </p>

        </>
    )
};

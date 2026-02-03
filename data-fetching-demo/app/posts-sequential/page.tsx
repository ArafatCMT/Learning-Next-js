import { Author } from "./author";
import { Suspense } from "react";


type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export default async function PostsSequential() {
    const respone = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await respone.json()

    const filteredPost = posts.filter((post) => post.id % 10 === 1);

    return (
        <>
            <h1 style={{ textAlign: "center", marginBottom: "30px", marginTop:"30px", fontSize:"2rem", fontWeight:"bold" }}>
                Posts
            </h1>

            <div
                style={{
                    width: "80%",
                    margin: "auto",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "24px",
                    justifyContent: "center",
                }}
            >
                {filteredPost.map((post) => (
                    <div
                        key={post.id}
                        style={{
                            width: "300px",
                            border: "1px solid #e5e5e5",
                            borderRadius: "12px",
                            padding: "18px",
                            backgroundColor: "#fff",
                            boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        }}
                    >
                        {/* Title */}
                        <h3
                            style={{
                                marginBottom: "12px",
                                fontSize: "18px",
                                lineHeight: "1.4",
                            }}
                        >
                            {post.title}
                        </h3>

                        {/* Body */}
                        <p
                            style={{
                                color: "#555",
                                fontSize: "14px",
                                lineHeight: "1.6",
                                marginBottom: "16px",
                            }}
                        >
                            {post.body}
                        </p>

                        {/* Author */}
                        <div
                            style={{
                                borderTop: "1px solid #eee",
                                paddingTop: "10px",
                                fontSize: "13px",
                                color: "#777",
                                fontStyle: "italic",
                            }}
                        >
                            <Suspense fallback={<div>Loading Writer...</div>}>
                                <Author userId={post.userId}/>
                            </Suspense>
                        </div>
                    </div>
                ))}
            </div>


        </>
    )
}
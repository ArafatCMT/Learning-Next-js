
type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

type Album = {
    userId: number,
    id: number,
    title: string
}

async function getUserPosts(userId: string) {
    await new Promise((resolve)=> setTimeout(resolve,2000))
    const respone = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return respone.json();
}

async function getUserAlbums(userId: string) {
    await new Promise((resolve)=> setTimeout(resolve,2000))
    const respone = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    return respone.json();
    //     এটা Promise return করে, কারণ JSON parsing async
    // অর্থাৎ .json() call করলে তুমি অফিসিয়ালি এখনও Promise পাই
}


export default async function UserProfile({ params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;

    const postsData = getUserPosts(userId); // getusersPosts ekta promise return kortace , akhon o fetch kore nai
    const albumsData = getUserAlbums(userId)

    // const posts = await getUserPosts(userId); // JSON array

    const [posts, albums] = await Promise.all([postsData, albumsData])

    return (
        <>
           <div
  style={{
    padding: "16px",
    maxWidth: "1280px",
    margin: "0 auto",
    display: "flex",
    gap: "32px", // left-right spacing
  }}
>
  {/* Left Column - Posts */}
  <div style={{ flex: 1 }}>
    <h2
      style={{
        fontSize: "1.5rem",
        fontWeight: 700,
        marginBottom: "16px",
      }}
    >
      Posts
    </h2>

    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {posts.map((post: Post) => (
        <div
          key={post.id}
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "12px",
            padding: "24px",
          }}
        >
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: 700,
              marginBottom: "12px",
              color: "#1f2937",
              lineHeight: 1.3,
            }}
          >
            {post.title}
          </h3>
          <p
            style={{
              color: "#4b5563",
              lineHeight: 1.6,
            }}
          >
            {post.body}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Right Column - albums */}
  <div style={{ flex: 1 }}>
    <h2
      style={{
        fontSize: "1.5rem",
        fontWeight: 700,
        marginBottom: "16px",
      }}
    >
      albums
    </h2>

    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {albums.map((album: Album) => (
        <div
          key={album.id}
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "12px",
            padding: "24px",
          }}
        >
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: 700,
              marginBottom: "12px",
              color: "#1f2937",
            }}
          >
            {album.title}
          </h3>
          
        </div>
      ))}
    </div>
  </div>
</div>

        </>
    )
}
type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

export async function Author({ userId }: { userId: number }) {
    await new Promise((reslove) => setTimeout(reslove,1500))

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user: User= await response.json();

    return (
        <>
            <div
                style={{
                    fontSize: "14px",
                    color: "#6b7280", // gray-500
                }}
            >
                Written by{" "}
                <span
                    style={{
                        fontWeight: "600",
                        color: "#374151", // gray-700
                        cursor: "pointer",
                        transition: "color 0.2s ease",
                    }}
                >
                    {user.name}
                </span>
            </div>


        </>
    )

}
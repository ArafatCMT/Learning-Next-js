import { SignInButton, 
    SignOutButton,
    // UserButton
    } from "@clerk/nextjs"

import Link from "next/link"

export const Navigation = () => {
    return (
        <nav
            style={{
                backgroundColor: "var(--background)",
                borderBottom: "1px solid rgba(23, 23, 23, 0.1)" // fallback
            }}
        >
            <div
                style={{
                    maxWidth: "112rem", // Tailwind max-w-7xl = 112rem
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingLeft: "1rem",  // px-4
                    paddingRight: "1rem", // px-4
                }}
                className="sm:px-6 lg:px-8"
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "4rem", // h-16
                    }}
                >
                    <div style={{ flexShrink: 0 }}>
                        <h1
                            style={{ color: "var(--foreground)" }}
                            className="text-xl font-semibold"
                        >
                            Next.js App
                        </h1>
                    </div>
                    <div
                        style={{ display: "flex", alignItems: "center", gap: "1rem" }} // gap-4 = 1rem
                    >
                        <SignInButton mode="modal" />
                        {/* <UserButton/> */}
                        <Link href="/user-profile">Profile</Link>
                        <SignOutButton />
                    </div>
                </div>
            </div>

        </nav>
    );
};

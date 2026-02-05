import Form from "next/form"

export const Search = () => {
    return (
        <Form
            action="/products-server"
            style={{
                display: "flex",
                gap: "8px", // Tailwind 'gap-2'
            }}
        >
            <input
                name="query"
                placeholder="Search products"
                style={{
                    flex: 1, // Tailwind 'flex-1'
                    padding: "8px 16px", // Tailwind 'px-4 py-2'
                    borderRadius: "0.5rem", // Tailwind 'rounded-lg'
                    border: "1px solid #D1D5DB", // Tailwind 'border-gray-300'
                    outline: "none",
                    color: "#000", // Tailwind 'text-black'
                    // focus effect can be added with JS if needed
                }}
            />
            <button
                type="submit"
                style={{
                    padding: "8px 16px", // Tailwind 'px-4 py-2'
                    backgroundColor: "#3B82F6", // Tailwind 'bg-blue-500'
                    color: "#fff", // Tailwind 'text-white'
                    borderRadius: "0.5rem", // Tailwind 'rounded-lg'
                    border: "none",
                    cursor: "pointer",
                }}
                // onMouseOver={(e) => {
                //     (e.target as HTMLButtonElement).style.backgroundColor = "#2563EB"; // Tailwind 'hover:bg-blue-600'
                // }}
                // onMouseOut={(e) => {
                //     (e.target as HTMLButtonElement).style.backgroundColor = "#3B82F6"; // original bg
                // }}
            >
                Submit
            </button>
        </Form>
    )
}
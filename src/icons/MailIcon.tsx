export function MailIcon({ size = "md" }: { size?: "sm" | "md" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size === "sm" ? 16 : 24}
            height={size === "sm" ? 16 : 24}
            fill="currentColor"
            viewBox="0 -960 960 960"
            style={{ flexShrink: 0 }}
        >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
        </svg>
    )
}
export function LinkedInIcon({ size = "md" }: { size?: "sm" | "md" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size === "sm" ? 16 : 24}
            height={size === "sm" ? 16 : 24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            style={{ flexShrink: 0 }}
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
            <circle cx={4} cy={4} r={2} />
        </svg>
    )
}
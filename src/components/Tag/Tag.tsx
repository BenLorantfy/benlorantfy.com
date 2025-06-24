import { theme } from "~/theme";

export function Tag({ tone = "primary", children }: { tone?: "primary" | "magic", children: React.ReactNode }) {
    return (
        <span
            style={{
                display: "inline-block",
                backgroundColor: tone === "primary" ? theme.colors.primary : theme.colors.magic,
                color: "white",
                padding: "4px 8px",
                borderRadius: "12px",
                width: "fit-content",
                fontSize: "14px",
                whiteSpace: "nowrap",
                marginBottom: theme.spacing[1]
            }}
        >
            {children}
        </span>
    )
}
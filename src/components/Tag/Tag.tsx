import { theme } from "~/theme";

export function Tag({ tone = "primary", children }: { tone?: "primary" | "magic", children: React.ReactNode }) {
    return (
        <span
            style={{
                display: "inline-block",
                // backgroundColor: tone === "primary" ? theme.colors.primary : theme.colors.magic,
                backgroundColor: tone === "primary" ? "rgba(30, 81, 141, 0.9)" : "rgba(87, 0, 148, 0.8)",
                border: `2px solid ${tone === "primary" ? theme.colors.primary : theme.colors.magic}`,
                color: "white",
                padding: "2px 6px",
                borderRadius: "12px",
                width: "fit-content",
                fontSize: "14px",
                whiteSpace: "nowrap",
                backdropFilter: 'blur(10px)',
            }}
        >
            {children}
        </span>
    )
}
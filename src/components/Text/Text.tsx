import { theme } from "~/theme";

export function Text({ children, color, size }: { children: React.ReactNode, color?: 'primary' | 'gold', size?: "md" | "lg" }) {
    return (
        <p style={{
            fontFamily: "var(--font-albert-sans)",
            fontSize: size === "lg" ? 20 : 16,
            lineHeight: 1.5,
            color: color === 'primary' ? theme.colors.primary : color === 'gold' ? theme.colors.gold : undefined,
        }}>
            {children}
        </p>
    )
}
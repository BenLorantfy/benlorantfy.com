import { theme } from "~/theme";

export function Text({ children, color, size = 'base' }: { children: React.ReactNode, color?: 'primary' | 'gold', size?: keyof typeof theme.text }) {
    return (
        <p style={{
            fontFamily: "var(--font-albert-sans)",
            color: color === 'primary' ? theme.colors.primary : color === 'gold' ? theme.colors.gold : undefined,
            ...theme.text[size]
        }}>
            {children}
        </p>
    )
}
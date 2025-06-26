import { Responsive, SpacingToken, theme } from "~/theme";
import { CSSProperties } from "react";
import { createResponsiveStyles } from "~/utils/createResponsiveStyles";

export function Flex({ 
    children,
    direction = "row",
    gap = 0,
    align,
    justify,
    wrap = false,
    width,
}: { 
    children: React.ReactNode;
    direction?: Responsive<"row" | "column">;
    gap?: Responsive<SpacingToken>;
    align?: Responsive<"start" | "end" | "center">;
    justify?: Responsive<"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">;
    wrap?: boolean;
    width?: Responsive<string>;
}) {
    const baseStyles: CSSProperties = {
        display: "flex",
        flexWrap: wrap ? "wrap" : "nowrap",
    };

    const styles = createResponsiveStyles(baseStyles, {
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        width,
        gap: {
            xs: typeof gap === "object" ? gap.xs ? theme.spacing[gap.xs || 0] : undefined : theme.spacing[gap],
            sm: typeof gap === "object" ? gap.sm ? theme.spacing[gap.sm || 0] : undefined : theme.spacing[gap],
            md: typeof gap === "object" ? gap.md ? theme.spacing[gap.md || 0] : undefined : theme.spacing[gap],
            lg: typeof gap === "object" ? gap.lg ? theme.spacing[gap.lg || 0] : undefined : theme.spacing[gap],
            xl: typeof gap === "object" ? gap.xl ? theme.spacing[gap.xl || 0] : undefined : theme.spacing[gap],
        }
    });

    return (
        <div style={styles}>
            {children}
        </div>
    )
}

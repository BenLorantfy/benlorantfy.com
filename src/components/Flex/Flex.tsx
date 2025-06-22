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
            xs: typeof gap === "object" ? gap.xs || 0 : gap,
            sm: typeof gap === "object" ? gap.sm || 0 : gap,
            md: typeof gap === "object" ? gap.md || 0 : gap,
            lg: typeof gap === "object" ? gap.lg || 0 : gap,
            xl: typeof gap === "object" ? gap.xl || 0 : gap,
        }
    });

    return (
        <div style={styles}>
            {children}
        </div>
    )
}

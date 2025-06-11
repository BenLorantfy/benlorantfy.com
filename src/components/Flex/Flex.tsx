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
}: { 
    children: React.ReactNode;
    direction?: Responsive<"row" | "column">;
    gap?: SpacingToken;
    align?: "start" | "end" | "center";
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    wrap?: boolean;
}) {
    const baseStyles: CSSProperties = {
        display: "flex",
        gap: gap ? theme.spacing[gap] : undefined,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? "wrap" : "nowrap",
    };

    const styles = createResponsiveStyles(baseStyles, {
        flexDirection: direction,
    });

    return (
        <div style={styles}>
            {children}
        </div>
    )
}

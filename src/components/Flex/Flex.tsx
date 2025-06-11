import { SpacingToken, theme } from "~/theme";

export function Flex({ 
    children,
    direction = "row",
    gap = 0,
    align,
    justify,
    wrap = false,
}: { 
    children: React.ReactNode;
    direction?: "row" | "column";
    gap?: SpacingToken;
    align?: "start" | "end" | "center";
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    wrap?: boolean;
}) {
    return (
        <div style={{ 
            display: "flex",
            flexDirection: direction,
            gap: gap ? theme.spacing[gap] : undefined,
            alignItems: align,
            justifyContent: justify,
            flexWrap: wrap ? "wrap" : "nowrap"
        }}>
            {children}
        </div>
    )
}
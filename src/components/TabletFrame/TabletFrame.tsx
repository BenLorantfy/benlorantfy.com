import { Responsive, SpacingToken, theme } from "~/theme";
import { createResponsiveStyles } from "~/utils/createResponsiveStyles";
import { CSSProperties } from "react";

const volumeButtonWidth = "4%";

export function TabletFrame({ 
    children, 
    mt = 0, 
    width = "100%" 
}: { 
    children: React.ReactNode, 
    mt?: Responsive<SpacingToken>, 
    width?: string 
}) {
    const baseStyles: CSSProperties = {
        width, 
        aspectRatio: "16/9", 
        border: "10px solid black", 
        borderRadius: 12,
        lineHeight: 0,
        backgroundColor: "black",
        position: "relative",
    };

    const styles = createResponsiveStyles(baseStyles, {
        marginTop: {
            xs: typeof mt === "object" ? mt.xs || 0 : mt,
            sm: typeof mt === "object" ? mt.sm || 0 : mt,
            md: typeof mt === "object" ? mt.md || 0 : mt,
            lg: typeof mt === "object" ? mt.lg || 0 : mt,
            xl: typeof mt === "object" ? mt.xl || 0 : mt,
        }
    });

    return (
        <div style={styles}>
            {/* Power Button */}
            <div 
                style={{
                    width: "4px",
                    height: "10%",
                    position: "absolute",
                    left: -12,
                    top: 12,
                    backgroundColor: "black",
                }}
            />
            {/* Volume Up Butotn */}
            <div 
                style={{
                    height: "4px",
                    width: volumeButtonWidth,
                    position: "absolute",
                    top: -12,
                    left: 12,
                    backgroundColor: "black",
                }}
            />
            {/* Volume Down Button */}
            <div 
                style={{
                    height: "4px",
                    width: volumeButtonWidth,
                    position: "absolute",
                    top: -12,
                    left: `calc(12px + ${volumeButtonWidth} + 12px)`,
                    backgroundColor: "black",
                }}
            />

            {children}
        </div>
    )
}
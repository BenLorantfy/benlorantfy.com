import { SpacingToken, theme } from "~/theme";

const volumeButtonWidth = "4%";

export function TabletFrame({ children, mt = 0, width = "100%" }: { children: React.ReactNode, mt?: SpacingToken, width?: string }) {
    return (
        <div style={{ 
            width, 
            aspectRatio: "16/9", 
            border: "10px solid black", 
            borderRadius: 12,
            lineHeight: 0,
            backgroundColor: "black",
            position: "relative",
            marginTop: theme.spacing[mt]
        }}>
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
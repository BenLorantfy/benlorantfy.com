import { on } from "~/css";
import { theme } from "~/theme";
import { pipe } from "~/utils/pipe";

export function Button({ 
    children, 
    width = "full",
    leadIcon
}: { 
    children: React.ReactNode; 
    width?: "md" | "full";
    leadIcon?: React.ReactNode;
}) {
    return (
        <button type="button" style={pipe({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: '#C5C5C5',
            color: theme.colors.primary,
            padding: 12,
            borderRadius: 12,
            fontFamily: "var(--font-albert-sans)",
            fontSize: 24,
            appearance: "none",
            border: "none",
            cursor: "pointer",
            transition: "all 0.1s",
            width: width === "md" ? `300px` : "100%",
            flexShrink: 0,
        }, 
        on("&:hover,&:focus-visible", {
            backgroundColor: '#b3b3b3',
        }),
        on("&:active", {
            backgroundColor: '#a8a8ad',
        }))}>
            {leadIcon}
            <div style={{ flex: 1, textAlign: "center" }}>{children}</div>
            <div style={{ width: leadIcon ? 24 : 0, visibility: "hidden" }} />
        </button>
    )
}
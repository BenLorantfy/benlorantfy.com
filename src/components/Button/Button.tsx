import { on } from "~/css";
import { theme } from "~/theme";
import { pipe } from "~/utils/pipe";

type CommonButtonProps = {
    children: React.ReactNode; 
    width?: "md" | "full";
    leadIcon?: React.ReactNode;
}

type AsButtonProps = CommonButtonProps & {
    as?: "button";
}

type AsAnchorProps = CommonButtonProps & {
    href: string;
    as: "a";
}

type ButtonProps = AsButtonProps | AsAnchorProps;

export function Button({ 
    children, 
    width = "full",
    leadIcon,
    ...otherProps
}: ButtonProps) {
    const Tag = "as" in otherProps && otherProps.as === "a" ? "a" : "button";

    return (
        <Tag 
            type={"as" in otherProps && otherProps.as === "a" ? undefined : "button"} 
            href={"as" in otherProps && otherProps.as === "a" ? otherProps.href : undefined}
            style={pipe({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: '#C5C5C5',
            color: theme.colors.primary,
            padding: 12,
            borderRadius: 12,
            fontFamily: "var(--font-albert-sans)",
            fontSize: 20,
            appearance: "none",
            border: "none",
            cursor: "pointer",
            transition: "all 0.1s",
            width: width === "md" ? `300px` : "100%",
            flexShrink: 0,
            maxWidth: "100%",
            textDecoration: "none",
        }, 
        on(`@media (min-width: 600px)`, {
            fontSize: 24,
        }),
        on("&:hover,&:focus-visible", {
            backgroundColor: '#b3b3b3',
        }),
        on("&:active", {
            backgroundColor: '#a8a8ad',
        }))}>
            {leadIcon}
            <div style={{ flex: 1, textAlign: "center" }}>{children}</div>
            <div style={{ width: leadIcon ? 24 : 0, visibility: "hidden" }} />
        </Tag>
    )
}
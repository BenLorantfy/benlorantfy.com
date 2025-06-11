import { SpacingToken, theme } from "~/theme";

export function Box({ 
    children, 
    pl = 0, 
    pr = 0, 
    pt = 0, 
    pb = 0,
    bleed = 0
}: { 
    children: React.ReactNode, 
    pl?: SpacingToken, 
    pr?: SpacingToken, 
    pt?: SpacingToken, 
    pb?: SpacingToken,
    bleed?: SpacingToken
}) {
    return (
        <div style={{ 
            paddingLeft: theme.spacing[pl], 
            paddingRight: theme.spacing[pr], 
            paddingTop: theme.spacing[pt], 
            paddingBottom: theme.spacing[pb],
            marginLeft: `-${theme.spacing[bleed]}`,
            marginRight: `-${theme.spacing[bleed]}`,
        }}>
            {children}
        </div>
    )
}
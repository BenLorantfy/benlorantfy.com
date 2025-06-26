import { SpacingToken, theme } from "~/theme";

export function Card({ 
    children, 
    bleed,
    mb,
}: { 
    children: React.ReactNode, 
    bleed?: boolean,
    mb?: SpacingToken,
}) {
    return (
        <div style={{ 
            paddingLeft: theme.spacing[6], 
            paddingRight: theme.spacing[6], 
            paddingTop: theme.spacing[6], 
            paddingBottom: theme.spacing[6],
            marginLeft: bleed ? `-${theme.spacing[6]}` : undefined,
            marginRight: bleed ? `-${theme.spacing[6]}` : undefined,
            backgroundColor: 'rgba(255,255,255,0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: theme.spacing[4],
            marginBottom: mb ? theme.spacing[mb] : undefined,
            border: `1px solid #ebecf2`,
        }}>
            {children}
        </div>
    )
}
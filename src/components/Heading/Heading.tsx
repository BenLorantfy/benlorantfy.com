import { SpacingToken, theme } from "~/theme";

export default function Heading({ 
    children,
    decoration,
    align,
    level,
    mt = 0,
    mb = 0
}: { 
    children: React.ReactNode;
    decoration?: 'underline' | 'none';
    align?: 'center';
    level: 2 | 3 | 4 | 5 | 6;
    mt?: SpacingToken;
    mb?: SpacingToken;
}) {
    const HeadingTag = `h${level}` as const;
    
    return (
        <div style={{
            marginTop: theme.spacing[mt],
            marginBottom: theme.spacing[mb],
            textAlign: align
        }}>
            <HeadingTag
                style={{
                    color: theme.colors.primary,
                    fontSize: level === 2 ? 36 : 30,
                    fontFamily: "var(--font-baloo-2)",
                }}
            >
                {children}
            </HeadingTag>
            {decoration === 'underline' && (
                <div style={{
                    width: 40,
                    height: 4,
                    backgroundColor: theme.colors.secondary,
                    marginTop: 2,
                    margin: align === 'center' ? 'auto' : undefined
                }} />
            )}
        </div>
    )
}
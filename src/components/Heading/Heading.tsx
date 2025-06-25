import { SpacingToken, theme } from "~/theme";

export default function Heading({ 
    children,
    decoration,
    align,
    level,
    mt = 0,
    mb = 0,
    size = "2xl"
}: { 
    children: React.ReactNode;
    decoration?: 'underline' | 'none';
    align?: 'center';
    level: 2 | 3 | 4 | 5 | 6;
    mt?: SpacingToken;
    mb?: SpacingToken;
    size?: keyof typeof theme.text;
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
                    fontFamily: "var(--font-baloo-2)",
                    ...theme.text[size]
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
import { Responsive } from "~/theme";

import { Breakpoint } from "~/theme";

import { CSSProperties } from "react";
import { on } from "~/css";
import { theme } from "~/theme";
import { pipe } from "./pipe";

export function createResponsiveStyles(baseStyles: CSSProperties, responsiveProps: ResponsiveCSSProperties): CSSProperties {
    const additionalStyles: ReturnType<typeof on>[] = [];

    for (const [prop, value] of Object.entries(responsiveProps)) {
        if (value === undefined) continue;

        const responsiveValue = typeof value === "object" ? value : { 'xs': value };

        for (const breakpoint of Object.keys(theme.breakpoints) as Breakpoint[]) {
            if (responsiveValue[breakpoint]) {
                additionalStyles.push(on(`@media (min-width: ${theme.breakpoints[breakpoint]}px)`, { [prop]: responsiveValue[breakpoint] }));
            }
        }
    }


    return pipe(
        baseStyles,
        // @ts-expect-error - pipe function expects specific types but we're passing dynamic styles
        ...additionalStyles,
    )
}

type ResponsiveCSSProperties = Partial<{
    [K in keyof CSSProperties]: Responsive<CSSProperties[K]>;
}>;
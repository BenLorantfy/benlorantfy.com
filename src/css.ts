import { createHooks } from "@css-hooks/react";
import { Breakpoint, theme } from "./theme";

const breakpointQueries = {
    sm: `@media (min-width: ${theme.breakpoints.sm}px)`,
    md: `@media (min-width: ${theme.breakpoints.md}px)`,
    lg: `@media (min-width: ${theme.breakpoints.lg}px)`,
    xl: `@media (min-width: ${theme.breakpoints.xl}px)`,
} as const satisfies Record<Exclude<Breakpoint, "xs">, string>;

export const { styleSheet, on } = createHooks(
    "&:hover", 
    "&:active", 
    "&:focus-visible", 
    "&:hover,&:focus-visible",
    `@media (min-width: ${theme.breakpoints.xs}px)` as const,
    `@media (min-width: ${theme.breakpoints.sm}px)` as const,
    `@media (min-width: ${theme.breakpoints.md}px)` as const,
    `@media (min-width: ${theme.breakpoints.lg}px)` as const,
    `@media (min-width: ${theme.breakpoints.xl}px)` as const,
);

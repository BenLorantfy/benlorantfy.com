import { createHooks } from "@css-hooks/react";
import { theme } from "./theme";

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

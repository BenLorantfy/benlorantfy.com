import { createHooks } from "@css-hooks/react";

export const { styleSheet, on } = createHooks("&:hover", "&:active", "&:focus-visible", "&:hover,&:focus-visible");

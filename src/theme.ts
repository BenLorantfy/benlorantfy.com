export const theme = {
    colors: {
        primary: "#1E518D",
        secondary: "#6D9DD7",
        magic: "#570094",
        gold: "#DCA312"
    },
    spacing: {
        0: `0px`,
        1: `4px`,
        2: `8px`,
        3: `12px`,
        4: `16px`,
        5: `20px`,
        6: `24px`,
        7: `28px`,
        8: `32px`,
        9: `36px`,
        10: `40px`,
        11: `44px`,
        12: `48px`,
        13: `52px`,
        14: `56px`,
        15: `60px`,
        [-1]: `-4px`,
        [-2]: `-8px`,
        [-3]: `-12px`,
        [-4]: `-16px`,
        [-5]: `-20px`,
        [-6]: `-24px`,
        [-7]: `-28px`,
        [-8]: `-32px`,
        [-9]: `-36px`,
        [-10]: `-40px`,
        [-11]: `-44px`,
        [-12]: `-48px`,
        [-13]: `-52px`,
        [-14]: `-56px`,
        [-15]: `-60px`,
        [-16]: `-64px`,
        [-17]: `-68px`,
        [-18]: `-72px`,
    },
    text: {
        xs: {
            fontSize: '0.75rem',
            lineHeight: 'calc(1 / 0.75)'
        },
        sm: {
            fontSize: '0.875rem',
            lineHeight: 'calc(1.25 / 0.875)'
        },
        base: {
            fontSize: '1rem',
            lineHeight: 'calc(1.5 / 1)'
        },
        lg: {
            fontSize: '1.125rem',
            lineHeight: 'calc(1.75 / 1.125)'
        },
        xl: {
            fontSize: '1.25rem',
            lineHeight: 'calc(1.75 / 1.25)'
        },
        '2xl': {
            fontSize: '1.5rem',
            lineHeight: 'calc(2 / 1.5)'
        },
        '3xl': {
            fontSize: '1.875rem',
            lineHeight: 'calc(2.25 / 1.875)'
        },
        '4xl': {
            fontSize: '2.25rem',
            lineHeight: 'calc(2.5 / 2.25)'
        },
        '5xl': {
            fontSize: '3rem',
            lineHeight: '1'
        },
        '6xl': {
            fontSize: '3.75rem',
            lineHeight: '1'
        },
        '7xl': {
            fontSize: '4.5rem',
            lineHeight: '1'
        },
        '8xl': {
            fontSize: '6rem',
            lineHeight: '1'
        },
        '9xl': {
            fontSize: '8rem',
            lineHeight: '1'
        }
    },
    breakpoints: {
        xs: 0 as const,
        sm: 600 as const,
        md: 960 as const,
        lg: 1280 as const,
        xl: 1920 as const,
    }
}

export type SpacingToken = keyof typeof theme.spacing;

export type Breakpoint = keyof typeof theme.breakpoints;
export type Responsive<T> = T | Partial<Record<Breakpoint, T>>;

interface BaseColors {
    main: string
    strongGray: string
    iconMain: string
    danger: string
    success: string
    secondary: string
    inverse: string
    textColor: string
    utilsBack: string
    header: string
}

interface Colors extends BaseColors {
    mainDark: string,
    mainOpacityBackground: string
    dangerLighter: string,
    inverseHover: string,
    successLighter: string
}

export interface ThemeVars {
    main: string,
    colors: Colors,
    shadows: {
        main: string,
    },
}

export interface Theme {
    theme: ThemeVars
}

import { semanticLight, spacing, radii, typography, fonts, semanticDark, sizes } from "../tokens";


export const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200
}

export const lightTheme = {
  name: 'light',
  colors: semanticLight,
  spacing,
  radii,
  typography,
  fonts,
  sizes,
} as const;

export const darkTheme = {
  name: 'dark',
  colors: semanticDark,
  spacing,
  radii,
  typography,
  fonts,
  sizes,
} as const;

export const appThemes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export type AppTheme = typeof appThemes;



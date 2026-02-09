import { semanticLight, spacing, radii, typography, fonts, semanticDark } from "../tokens";


export const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200
}

export const lightTheme = {
  colors: semanticLight,
  spacing,
  radii,
  typography,
  fonts,
} as const;

export const darkTheme = {
  colors: semanticDark,
  spacing,
  radii,
  typography,
  fonts,
} as const;

export const appThemes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export type AppTheme = typeof appThemes;



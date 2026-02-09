export const palette = {
  neutral: {
    0: "#FFFDF6",
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1F2937",
    900: "#222831",
  },
  orange: {
    500: "#F4A261",
  },
  blue: {
    500: "#3B82F6",
    600: "#2563EB",
  },
  red: {
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
  },
  green: {
    500: "#22C55E",
    600: "#16A34A",
  },
  darkAlphaLight: "#0F172A0A",
  darkAlphaMedium: "#0F172A14",
  darkAlphaStrong: "#0F172A1F",

  lightAlphaLight: "#FFFFFF0F",
  lightAlphaMedium: "#FFFFFF1A",
  lightAlphaStrong: "#FFFFFF29",
};

export const semanticLight = {
  bg: palette.neutral[0],
  surface: palette.neutral[50],
  border: palette.neutral[200],

  titlePrimary: palette.orange[500],

  textPrimary: palette.neutral[900],
  textSecondary: palette.neutral[0],
  textTertiary: palette.neutral[500],

  primary: palette.blue[600],
  onPrimary: palette.neutral[0],

  danger: palette.red[500],
  success: palette.green[600],
  buttonBlur: palette.darkAlphaMedium,
};

export const semanticDark = {
  bg: palette.neutral[900],
  surface: palette.neutral[800],
  border: palette.neutral[700],

  titlePrimary: palette.orange[500],

  textPrimary: palette.neutral[0],
  textSecondary: palette.neutral[0],
  textTertiary: palette.neutral[400],

  primary: palette.blue[500],
  onPrimary: palette.neutral[0],

  danger: palette.red[500],
  success: palette.green[500],

  buttonBlur: palette.lightAlphaMedium,
};
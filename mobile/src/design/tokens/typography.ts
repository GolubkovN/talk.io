import { radii } from "./radii";

export const fonts = {
  thin: "Inter_100Thin",
  extraLight: "Inter_200ExtraLight",
  light: "Inter_300Light",
  regular: "Inter_400Regular",
  medium: "Inter_500Medium",
  semibold: "Inter_600SemiBold",
  bold: "Inter_700Bold",
  extraBold: "Inter_800ExtraBold",
  black: "Inter_900Black",
  thinItalic: "Inter_100Thin_Italic",
  extraLightItalic: "Inter_200ExtraLight_Italic",
  lightItalic: "Inter_300Light_Italic",
  italic: "Inter_400Regular_Italic",
  mediumItalic: "Inter_500Medium_Italic",
  semiboldItalic: "Inter_600SemiBold_Italic",
  boldItalic: "Inter_700Bold_Italic",
  extraBoldItalic: "Inter_800ExtraBold_Italic",
  blackItalic: "Inter_900Black_Italic",
  lobster: "Lobster-Regular",
};

export const typography = {
  title1: {
    fontSize: radii.xxxxl,
    lineHeight: 50,
    letterSpacing: -0.2,
    fontFamily: fonts.bold,
  },
  title2: {
    fontSize: radii.xxxl,
    lineHeight: 46,
    letterSpacing: -0.1,
    fontFamily: fonts.semibold,
  },
  title3: {
    fontSize: radii.xxl,
    lineHeight: 32,
    letterSpacing: -0.1,
    fontFamily: fonts.extraBold,
  },
  paragraph: {
    fontSize: radii.xl,
    lineHeight: 26,
    letterSpacing: 0,
    fontFamily: fonts.regular,
  },
  paragraph2: {
    fontSize: radii.lg,
    lineHeight: 18,
    letterSpacing: 0,
    fontFamily: fonts.regular,
  },
  caption: {
    fontSize: radii.md,
    lineHeight: 16,
    letterSpacing: 0.2,
    fontFamily: fonts.medium,
  },
  accentText: {
    fontSize: radii.xxl,
    lineHeight: 34,
    letterSpacing: 0,
    fontFamily: fonts.lobster,
  }
};
export type TextVariant = keyof typeof typography;
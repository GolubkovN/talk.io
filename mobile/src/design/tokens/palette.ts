// Base color palette with descriptive names
export const palette = {
  // Neutral colors - grayscale for backgrounds, text, borders
  white: "#FFFFFF",
  gray50: "#FAFBFC",
  gray100: "#F3F5F7",
  gray200: "#E4E7EB",
  gray300: "#CBD2D9",
  gray400: "#9AA5B1",
  gray500: "#697386",
  gray600: "#4B5563",
  gray700: "#364152",
  gray800: "#27303F",
  gray900: "#1A202E",
  black: "#0F0E11",
  
  // Ocean Blue - Primary brand color (friendly, trustworthy)
  oceanBlue50: "#E8F4FF",
  oceanBlue100: "#C2E3FF",
  oceanBlue200: "#8ECCFF",
  oceanBlue300: "#5BB5FF",
  oceanBlue400: "#3DA3FF",
  oceanBlue500: "#2B8FEF",    // Main primary color
  oceanBlue600: "#1F7ADB",
  oceanBlue700: "#1663B8",
  oceanBlue800: "#0F4D8F",
  
  // Electric Lime - Action/CTA color (high energy, attention-grabbing)
  lime50: "#F7FFE0",
  lime100: "#EEFFB3",
  lime200: "#E0FF80",
  lime300: "#D4FF4D",
  lime400: "#CAFF26",
  lime500: "#BFEF00",        // Main action color
  lime600: "#A8D600",
  lime700: "#8FB800",
  lime800: "#739500",
  
  // Sunset Coral - Accent color (warm, friendly, exciting)
  coral50: "#FFF1ED",
  coral100: "#FFD9CC",
  coral200: "#FFBFA3",
  coral300: "#FFA57A",
  coral400: "#FF8B5C",
  coral500: "#FF6B3D",       // Main accent color
  coral600: "#E64D25",
  coral700: "#C23515",
  coral800: "#9E220A",
  
  // Mint Green - Success color (fresh, positive, growth)
  mint50: "#E6FFF4",
  mint100: "#B3FFE0",
  mint200: "#80FFCC",
  mint300: "#4DFFB8",
  mint400: "#26FFA8",
  mint500: "#00E88E",        // Main success color
  mint600: "#00CC7A",
  mint700: "#00A862",
  mint800: "#008549",
  
  // Amber Gold - Warning color (attention, caution, premium)
  amber50: "#FFF8E6",
  amber100: "#FFECB3",
  amber200: "#FFE080",
  amber300: "#FFD44D",
  amber400: "#FFCA26",
  amber500: "#FFC000",       // Main warning color
  amber600: "#F0A500",
  amber700: "#D68C00",
  amber800: "#B37200",
  
  // Ruby Red - Danger/Error color (urgent, stop, critical)
  ruby50: "#FFEBEE",
  ruby100: "#FFC9CE",
  ruby200: "#FFA3AD",
  ruby300: "#FF7A8C",
  ruby400: "#FF5C75",
  ruby500: "#FF3D5E",        // Main danger color
  ruby600: "#E62547",
  ruby700: "#CC1133",
  ruby800: "#A30022",
  
  // Purple Violet - Info/Special color (creative, premium, mysterious)
  violet50: "#F3EBFF",
  violet100: "#E0C9FF",
  violet200: "#CCA3FF",
  violet300: "#B87AFF",
  violet400: "#A85CFF",
  violet500: "#9747FF",      // Main info color
  violet600: "#7E2FE6",
  violet700: "#661BCC",
  violet800: "#4E0BA3",
  
  // Alpha overlays for shadows, blurs, and depth
  blackAlpha10: "rgba(15, 14, 17, 0.04)",
  blackAlpha20: "rgba(15, 14, 17, 0.08)",
  blackAlpha30: "rgba(15, 14, 17, 0.12)",
  blackAlpha40: "rgba(15, 14, 17, 0.16)",
  blackAlpha50: "rgba(15, 14, 17, 0.20)",
  
  whiteAlpha10: "rgba(255, 255, 255, 0.06)",
  whiteAlpha20: "rgba(255, 255, 255, 0.10)",
  whiteAlpha30: "rgba(255, 255, 255, 0.16)",
  whiteAlpha40: "rgba(255, 255, 255, 0.24)",
  whiteAlpha50: "rgba(255, 255, 255, 0.32)",
};

// Light theme semantic colors
export const semanticLight = {
  // Backgrounds
  bg: palette.white,
  surface: palette.gray50,
  surfaceElevated: palette.white,
  surfaceHover: palette.gray100,
  
  // Borders
  border: palette.gray300,
  borderLight: palette.gray200,
  borderStrong: palette.gray400,
  
  // Text colors
  textPrimary: palette.gray900,
  textSecondary: palette.gray600,
  textTertiary: palette.gray400,
  textInverse: palette.white,
  textDisabled: palette.gray300,
  
  // Brand/Title colors
  titlePrimary: palette.oceanBlue600,
  titleAccent: palette.coral500,
  
  // Primary action (Ocean Blue - main brand interactions)
  primary: palette.oceanBlue500,
  primaryHover: palette.oceanBlue600,
  primaryActive: palette.oceanBlue700,
  primaryLight: palette.oceanBlue100,
  onPrimary: palette.white,
  
  // Action button (Electric Lime - high-energy CTAs)
  action: palette.lime500,
  actionHover: palette.lime600,
  actionActive: palette.lime700,
  actionLight: palette.lime100,
  onAction: palette.gray900,
  
  // Accent (Sunset Coral - highlights and special elements)
  accent: palette.coral500,
  accentHover: palette.coral600,
  accentLight: palette.coral100,
  onAccent: palette.white,
  
  // Status colors
  success: palette.mint500,
  successLight: palette.mint100,
  onSuccess: palette.white,
  
  warning: palette.amber500,
  warningLight: palette.amber100,
  onWarning: palette.gray900,
  
  danger: palette.ruby500,
  dangerLight: palette.ruby100,
  onDanger: palette.white,
  
  info: palette.violet500,
  infoLight: palette.violet100,
  onInfo: palette.white,
  
  // Effects
  shadow: palette.blackAlpha20,
  overlay: palette.blackAlpha40,
  buttonBlur: palette.blackAlpha20,
  disabled: palette.blackAlpha10,
};

// Dark theme semantic colors
export const semanticDark = {
  // Backgrounds
  bg: palette.gray900,
  surface: palette.gray800,
  surfaceElevated: palette.gray700,
  surfaceHover: palette.gray600,
  
  // Borders
  border: palette.gray600,
  borderLight: palette.gray700,
  borderStrong: palette.gray500,
  
  // Text colors
  textPrimary: palette.gray50,
  textSecondary: palette.gray300,
  textTertiary: palette.gray500,
  textInverse: palette.gray900,
  textDisabled: palette.gray600,
  
  // Brand/Title colors
  titlePrimary: palette.oceanBlue400,
  titleAccent: palette.coral400,
  
  // Primary action (Ocean Blue - brighter for dark mode)
  primary: palette.oceanBlue400,
  primaryHover: palette.oceanBlue300,
  primaryActive: palette.oceanBlue200,
  primaryLight: palette.oceanBlue800,
  onPrimary: palette.gray900,
  
  // Action button (Electric Lime - glows on dark)
  action: palette.lime500,
  actionHover: palette.lime400,
  actionActive: palette.lime300,
  actionLight: palette.lime800,
  onAction: palette.gray900,
  
  // Accent (Sunset Coral - warm glow)
  accent: palette.coral400,
  accentHover: palette.coral300,
  accentLight: palette.coral800,
  onAccent: palette.gray900,
  
  // Status colors (brighter for visibility on dark)
  success: palette.mint400,
  successLight: palette.mint800,
  onSuccess: palette.gray900,
  
  warning: palette.amber400,
  warningLight: palette.amber800,
  onWarning: palette.gray900,
  
  danger: palette.ruby400,
  dangerLight: palette.ruby800,
  onDanger: palette.white,
  
  info: palette.violet400,
  infoLight: palette.violet800,
  onInfo: palette.gray900,
  
  // Effects
  shadow: palette.blackAlpha50,
  overlay: palette.blackAlpha50,
  buttonBlur: palette.whiteAlpha20,
  disabled: palette.whiteAlpha10,
};
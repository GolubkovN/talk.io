import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme) => ({
  button: {
    height: 48,
    borderRadius: theme.radii.md,
    paddingHorizontal: theme.spacing[16],
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    variants: {
      variant: {
        primary: {
          backgroundColor: theme.colors.primary,
          borderColor: theme.colors.primary,
        },
        secondary: {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.primary,
        },
      },
    },
  },
  label: {
    variants: {
      variant: {
        primary: {
          color: theme.colors.onPrimary,
        },
        secondary: {
          color: theme.colors.primary,
        },
      },
    },
  },
  pressed: {
    opacity: 0.8,
  },
}));

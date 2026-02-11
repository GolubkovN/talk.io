import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme) => ({
  button: {
    height: 48,
    borderRadius: theme.radii.md,
    paddingHorizontal: theme.spacing[16],
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    flexDirection: "row",
    gap: 6,
    variants: {
      variant: {
        primary: {
          backgroundColor: theme.colors.primary,
          borderColor: theme.colors.primary,
        },
        action: {
          backgroundColor: theme.colors.action,
          borderColor: theme.colors.action,
        },
        danger: {
          backgroundColor: theme.colors.danger,
          borderColor: theme.colors.danger,
        },
        secondary: {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.primary,
        },
        auth: {
          backgroundColor: theme.colors.buttonBlur,
          borderWidth: 0,
        },
        icon: {
          borderColor: theme.colors.border,
          borderRadius: theme.radii.pill,
          paddingHorizontal: 0,
          height: 48,
          width: 48,
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
        action: {
          color: theme.colors.onAction,
        },
        danger: {
          color: theme.colors.onDanger,
        },
        secondary: {
          color: theme.colors.primary,
        },
        auth: {
          color: theme.colors.textPrimary,
        },
      },
    },
  },
  pressed: {
    opacity: 0.8,
  },
}));

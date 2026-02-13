import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme) => ({
  avatarContainer: {
    borderRadius: theme.radii.pill,
    padding: theme.spacing[4],
    borderWidth: 2,
  },
  avatar: {
    borderRadius: theme.radii.pill,
  },
  pressed: {
    opacity: 0.8,
  },
}));
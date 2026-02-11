import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme) => ({
  avatarContainer: {
    borderRadius: theme.radii.pill,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: theme.radii.pill,
  },
}));
import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme) => ({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    marginTop: 24,
    textAlign: "center",
    color: theme.colors.primary,
  },
  description: {
    marginTop: 8,
    textAlign: "center",
    marginBottom: 24,
    color: theme.colors.textPrimary,
  },
}));
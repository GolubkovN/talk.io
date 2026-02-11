import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((_theme) => ({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    marginTop: 24,
    textAlign: "center",
  },
  description: {
    marginTop: 8,
    textAlign: "center",
    marginBottom: 24,
  },
}));
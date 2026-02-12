import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme, rt) => ({
  container: {
    backgroundColor: theme.colors.bg,
    paddingTop: rt.insets.top,
    paddingHorizontal: theme.spacing[16],
  },
  inner: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
}));
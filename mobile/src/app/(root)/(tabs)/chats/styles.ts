import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    marginTop: rt.insets.top,
    paddingHorizontal: theme.spacing[16],
  },
}))
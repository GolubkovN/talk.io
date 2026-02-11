import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme, rt) => ({
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: rt.insets.top,
    paddingHorizontal: theme.spacing[16],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: theme.sizes.font.xl,
  },
}));
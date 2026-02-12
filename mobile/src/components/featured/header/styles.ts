import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme, rt) => ({
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: rt.insets.top + theme.spacing[48],
    paddingHorizontal: theme.spacing[16],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  titleContainer: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing[16],
  },
  title: {
    color: theme.colors.textPrimary,
  },
}));
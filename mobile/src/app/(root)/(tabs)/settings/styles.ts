import { StyleSheet } from "react-native-unistyles";
export const stylesheet = StyleSheet.create((theme, rt) => ({
  container: {
    alignItems: 'center',
    paddingHorizontal: theme.spacing[16],
    paddingBottom: rt.insets.bottom,
  },
  inner: {
    backgroundColor: theme.colors.bg,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  headerTitle: {
    fontSize: theme.sizes.font.xl,
  },
  buttonContent: {
    width: '70%',
  },
  menuSections: {
    width: '100%',
    gap: 10,
    marginVertical: 20,
  },
  menuItems: {
    borderRadius: theme.radii.md,
    gap: 10,
    paddingVertical: 10,
  },
}));
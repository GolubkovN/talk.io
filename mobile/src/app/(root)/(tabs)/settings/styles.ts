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
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    padding: theme.spacing[6],
  },
  menuItemPressed: {
    backgroundColor: theme.colors.surfaceHover,
    borderRadius: theme.radii.md,
  },
  menuItemIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: theme.radii.md,
  },
  menuItemContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuItemValue: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
}));
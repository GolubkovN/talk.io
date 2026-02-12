import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme) => ({
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
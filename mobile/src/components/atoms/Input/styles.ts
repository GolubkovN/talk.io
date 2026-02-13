import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme) => ({
  searchInputWrapper: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radii.xl,
    backgroundColor: theme.colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing[8],
    paddingLeft: theme.spacing[16],
    paddingHorizontal: theme.spacing[8],
    marginBottom: theme.spacing[16],
  },
  searchInput: {
    paddingVertical: theme.spacing[16],
    flex: 1,
    color: theme.colors.textPrimary,
  },
}));
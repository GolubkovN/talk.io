import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing[32],
    backgroundColor: theme.colors.bg,
    paddingTop: theme.spacing[40],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing[16],
    marginBottom: theme.spacing[16],
  },
  headerDescription: {
    color: theme.colors.textTertiary,
  },
  headerContent: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    paddingBottom: theme.spacing[16],
  },
  closeButton: {
    backgroundColor: theme.colors.action,
  },
}));  
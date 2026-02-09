import { StyleSheet } from "react-native-unistyles";
export const stylesheet = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  headerTitle: {
    fontSize: theme.radii.xl,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.danger,
    width: '70%',
    height: 48,
    gap: 10,
    alignSelf: 'center',
    borderRadius: theme.radii.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  buttonText: {
    color: theme.colors.textSecondary,
  },
}));
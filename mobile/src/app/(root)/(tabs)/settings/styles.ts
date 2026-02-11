import { StyleSheet } from "react-native-unistyles";
export const stylesheet = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    alignItems: 'center',
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
    backgroundColor: theme.colors.danger,
    borderColor: theme.colors.border,
  },
  buttonText: {
    color: theme.colors.textSecondary,
  },
}));
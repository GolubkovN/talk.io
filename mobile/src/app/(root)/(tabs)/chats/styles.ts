import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing[16],
    marginTop: rt.insets.top,
  },
  inner: {
    backgroundColor: theme.colors.bg,
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: rt.insets.top,
    paddingHorizontal: theme.spacing[16],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing[16],
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
}))
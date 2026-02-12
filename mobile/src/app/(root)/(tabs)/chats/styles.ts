import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing[16],
    paddingTop: rt.insets.top,
    backgroundColor: theme.colors.bg,
  },
  listContainer: {
    flex: 1,
    marginTop: rt.insets.top,
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
    backgroundColor: theme.colors.bg,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
}))
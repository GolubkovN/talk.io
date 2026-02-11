import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: theme.spacing[16],
  },
  nameContainer: {
    flexDirection: 'row',
    gap: theme.spacing[4],
    marginBottom: theme.spacing[4],
    alignItems: 'center',
  },
  onlineIndicator: {
    width: 10,
    height: 10,
    borderRadius: theme.radii.pill,
    backgroundColor: theme.colors.success,
  },
  textContent: {
    flex: 1,
    height: 72,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: theme.spacing[8],
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  unreadMessagesIndicator: {
    width: 10,
    height: 10,
    borderRadius: theme.radii.pill,
    backgroundColor: theme.colors.primary,
  },
  lastMessageAtContainer: {
    gap: theme.spacing[4],
    alignItems: 'center',
  },
}));
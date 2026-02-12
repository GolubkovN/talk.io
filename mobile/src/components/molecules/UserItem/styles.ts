import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme) => ({
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing[16],
    marginTop: theme.spacing[16],
  },
  userItemContent: {
    paddingVertical: theme.spacing[8],
  },
}));
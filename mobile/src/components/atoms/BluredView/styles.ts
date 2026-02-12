import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme) => ({
  blurWrapper: {
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: theme.radii.pill,
  },

  bluredContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: theme.radii.pill,
  },
}));
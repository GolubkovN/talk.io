import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    paddingTop: rt.insets.top,
  },
  requestPermissionContainer: {
    paddingTop: rt.insets.top,
    paddingBottom: rt.insets.bottom,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.bg,
    paddingHorizontal: theme.spacing[16],
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: rt.insets.bottom,
    left: theme.spacing[16],
    right: theme.spacing[16],
    padding: theme.spacing[16],
  },
}));
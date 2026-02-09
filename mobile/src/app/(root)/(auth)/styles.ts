import { StyleSheet } from 'react-native-unistyles';

const styles = StyleSheet.create((theme, rt) => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.bg,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    topSection: {
        alignItems: 'center',
        paddingTop: 10,
    },
    title: {
        color: theme.colors.titlePrimary,
        textTransform: 'uppercase',
    },
    logoImage: { width: 120, height: 120, marginVertical: -20 },
    centerSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    heroImage: { width: rt.screen.width - 48, height: rt.screen.height * 0.3 },
    headlineSection: {
        marginTop: 24,
        alignItems: 'center',
    },
    headlineTitle: {
      textAlign: 'center',
      color: theme.colors.titlePrimary,
      fontSize: theme.radii.xxxl,
      lineHeight: 42
    },
    headlineText: {
      textAlign: 'center',
      fontSize: theme.radii.xxl,
      lineHeight: 32
    },
    authButtonsSection: {
      width: '100%',
      marginTop: 24,
      flexDirection: 'row',
      gap: 4,
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing[16],
    },
    authButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      backgroundColor: theme.colors.buttonBlur,
      padding: theme.spacing[8],
      borderRadius: theme.radii.md,
      width: rt.screen.width * 0.5 - 32,
      height: 48,
    },
    buttonText: {
      color: theme.colors.textPrimary,
    },
}));

export default styles;
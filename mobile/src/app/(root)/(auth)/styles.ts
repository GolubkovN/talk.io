import { StyleSheet } from 'react-native-unistyles';

const styles = StyleSheet.create((theme, rt) => ({
    container: {
        flex: 1,
        paddingTop: rt.insets.top,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.bg,
    },
    background: {
        ...StyleSheet.absoluteFillObject,
    },
    topSection: {
        justifyContent: 'center',
        flexDirection: 'row',
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
    },
    heroImage: { width: rt.screen.width, height: rt.screen.height * 0.5 },
    headlineSection: {
        alignItems: 'center',
    },
    headlineTitle: {
      textAlign: 'center',
      color: theme.colors.titlePrimary,
      fontSize: theme.sizes.font.xxxl,
      lineHeight: 42
    },
    headlineText: {
      textAlign: 'center',
      fontSize: theme.sizes.font.xxl,
      lineHeight: 32,
      color: theme.colors.textPrimary,
    },
    authButtonsSection: {
      width: '100%',
      marginTop: 24,
      flexDirection: 'row',
      gap: 4,
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      paddingHorizontal: theme.spacing[16],
    },
    authButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      backgroundColor: theme.colors.buttonBlur,
      padding: theme.spacing[8],
      borderRadius: theme.radii.md,
      height: 48,
    },
    buttonText: {
      color: theme.colors.textPrimary,
    },
}));

export default styles;
import { StyleSheet } from 'react-native-unistyles'
import { Appearance } from 'react-native';
import { appThemes, breakpoints } from "./appTheme";



StyleSheet.configure({
    themes: appThemes,
    breakpoints,
    settings: {
        initialTheme: Appearance.getColorScheme() ?? 'light'
    }
})
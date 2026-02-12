import { StyleSheet, UnistylesThemes } from 'react-native-unistyles'
import { appThemes, breakpoints } from "./appTheme";
import { getValueFor } from '@/src/utils';




StyleSheet.configure({
    themes: appThemes,
    breakpoints,
    settings: {
        adaptiveThemes: false,
        initialTheme: () => {
            const initialTheme =  getValueFor('theme') ?? 'light';
            return initialTheme as keyof UnistylesThemes;
        },
    } 
})
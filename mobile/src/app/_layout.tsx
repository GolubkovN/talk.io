import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from "expo-splash-screen";
import 'react-native-reanimated';
import '../../global.css';

import { validateEnv } from "../../config/validateEnv";


import { useColorScheme } from '@/src/hooks/use-color-scheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

validateEnv();
SplashScreen.preventAutoHideAsync()
export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ClerkProvider tokenCache={tokenCache}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#0D0D0F" } }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
          </Stack>
        </GestureHandlerRootView>
        <StatusBar style="auto" />
      </ThemeProvider>
    </ClerkProvider>
  );
}

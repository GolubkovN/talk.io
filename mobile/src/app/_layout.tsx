import { Stack } from 'expo-router';
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from "expo-splash-screen";
import { store } from '../store'
import { Provider as ReduxProvider } from 'react-redux'
import 'react-native-reanimated';

import { validateEnv } from "../../config/validateEnv";


import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthSync } from '../components';
import { EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY } from '@/config/env';
import { useUnistyles } from 'react-native-unistyles';

validateEnv();
SplashScreen.preventAutoHideAsync()
export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const { theme } = useUnistyles();

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <ReduxProvider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AuthSync />
          <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.bg } }}>
            <Stack.Screen name="(root)" options={{ headerShown: false }} />
          </Stack>
        </GestureHandlerRootView>
        <StatusBar style="auto" />
      </ReduxProvider>
    </ClerkProvider>
  );
}

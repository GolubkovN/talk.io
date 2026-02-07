import { useAuth } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// this wrapper layout is used to imolement protected routes and avoid clerk provider limitations
export default function SemiRootLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#0D0D0F" } }}>
      <Stack.Protected guard={!!isSignedIn}>
        <Stack.Screen name="(tabs)" options={{ animation: "fade" }} />
      </Stack.Protected>
      <Stack.Protected guard={!isSignedIn}>
        <Stack.Screen name="(auth)" options={{ animation: "fade" }} />
      </Stack.Protected>
    </Stack>
  );
}
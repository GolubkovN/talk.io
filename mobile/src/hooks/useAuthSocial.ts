import { useSSO } from "@clerk/clerk-expo";
import { useState } from "react";
import { Alert } from "react-native";

type TStrategy = "oauth_google" | "oauth_apple" | "oauth_github";
export const useAuthSocial = () => {
  const [ loadingStrategy, setLoadingStrategy ] = useState<TStrategy | null>(null);

  const { startSSOFlow } = useSSO();

  const providerMap = {
    "oauth_google": "google",
    "oauth_apple": "apple",
    "oauth_github": "github",
  }

  const handleSocialAuth = async (strategy: TStrategy) => {
    setLoadingStrategy(strategy);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (createdSessionId && setActive) {
        setActive({ session: createdSessionId });
      }
    } catch (error) {
      console.error(error);
      const provider = providerMap[strategy];
      Alert.alert("Error", `Failed to sign in with ${provider}`);
    }
    finally {
      setLoadingStrategy(null);
    }
  };
  return { handleSocialAuth, loadingStrategy };
};
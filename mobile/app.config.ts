import "dotenv/config";
import type { ExpoConfig, ConfigContext } from "expo/config";

type AppEnv = "dev" | "uat" | "prod";

const APP_ENV = (process.env.APP_ENV as AppEnv) ?? "dev";
const isProd = APP_ENV === "prod";

const withSuffix = (base: string) =>
  isProd ? base : `${base}.${APP_ENV}`;

const withNameSuffix = (base: string) =>
  isProd ? base : `${base} (${APP_ENV.toUpperCase()})`;

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,

  name: withNameSuffix("talkio"),
  slug: "talkio",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./src/assets/images/icon.png",
  scheme: "talkio",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,

  ios: {
    ...config.ios,
    supportsTablet: true,
    bundleIdentifier: withSuffix("com.holubkov.talkio"),
  },

  android: {
    ...config.android,
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./src/assets/images/android-icon-foreground.png",
      backgroundImage: "./src/assets/images/android-icon-background.png",
      monochromeImage: "./src/assets/images/android-icon-monochrome.png",
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
    package: withSuffix("com.holubkov.talkio"),
  },

  web: {
    ...config.web,
    bundler: "metro",
    output: "static",
    favicon: "./src/assets/images/favicon.png",
  },

  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./src/assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
        dark: { backgroundColor: "#000000" },
      },
    ],
    ["react-native-bottom-tabs"],
    [
      "expo-build-properties",
      {
        ios: { useFrameworks: "static" },
      },
    ],
    ["expo-font"]
  ],

  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },

  extra: {
    APP_ENV,
    API_BASE_URL: process.env.API_BASE_URL,
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
});

import Constants from "expo-constants";

export function getExpoExtra<T extends Record<string, any>>(): T {
  const expoConfigExtra = Constants.expoConfig?.extra as T | undefined;
  if (expoConfigExtra) return expoConfigExtra;

  const manifestExtra = (Constants.manifest as any)?.extra as T | undefined;
  if (manifestExtra) return manifestExtra;

  return {} as T;
}

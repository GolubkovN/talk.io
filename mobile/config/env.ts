import { getExpoExtra } from "./getExtra";

export type AppEnv = "dev" | "uat" | "prod";

type Extra = {
  APP_ENV: AppEnv;
  API_BASE_URL: string;
  EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
};

const extra = getExpoExtra<Extra>();

export const APP_ENV: AppEnv = extra.APP_ENV;
export const API_BASE_URL: string = extra.API_BASE_URL;
export const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: string = extra.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

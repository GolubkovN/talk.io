import { API_BASE_URL, APP_ENV } from "./env";

export function validateEnv(): void {
  if (!API_BASE_URL) {
    throw new Error(
      `[config] API_BASE_URL is empty. Check env/${APP_ENV}.env and app.config.ts extra.`
    );
  }

  try {
    new URL(API_BASE_URL);
  } catch {
    throw new Error(`[config] API_BASE_URL is not a valid URL: ${API_BASE_URL}`);
  }
}

import { browser } from "$app/environment";
import { page } from "$app/stores";
import posthog from "posthog-js";
import {
  PUBLIC_POSTHOG_KEY,
  PUBLIC_POSTHOG_API_HOST,
} from "$env/static/public";
export const ssr = false;

export const load = async () => {
  if (browser) {
    posthog.init(PUBLIC_POSTHOG_KEY, {
      api_host: PUBLIC_POSTHOG_API_HOST,
    });
  }
};

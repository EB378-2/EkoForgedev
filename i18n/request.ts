// i18n/request.ts
import { routing } from "./routing"; // Adjust path as necessary
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ requestLocale }) => {
  // Ensure requestLocale is resolved properly
  let locale = await requestLocale;

  // Validate the locale and provide a fallback if invalid
  if (!locale || !routing.locales.includes(locale as any)) {
    console.warn("Invalid locale detected, showing 404 page.");
    notFound();
    locale = routing.defaultLocale; // Fallback to defaultLocale
  }

  return {
    locale, // Explicitly return the locale
    messages: (await import(`./messages/${locale}.json`)).default, // Load translation messages
  };
});

import { createClient } from "contentful";
import { TLocale } from "~/types/shared";

export const getContentfulClient = () => {
  const {
    LOCALE: locale,
    CONTENTFUL_SPACE_ID: space,
    CONTENTFUL_ACCESS_TOKEN: accessToken,
  } = process.env;

  const host = "cdn.contentful.com";

  if (space && accessToken) {
    const baseClient = createClient({
      space,
      accessToken,
      host,
    });

    const localizedClient = {
      ...baseClient,
      getEntries: <T>(query: Record<string, any>) =>
        baseClient.getEntries<T>({ locale, ...query }),
      getEntry: <T>(id: string, query: Record<string, any>) =>
        baseClient.getEntry<T>(id, { locale, ...query }),
      getAsset: (id: string, query: Record<string, any>) =>
        baseClient.getAsset(id, { locale, ...query }),
      getAssets: (query: Record<string, any>) =>
        baseClient.getAssets({ locale, ...query }),
    };

    return localizedClient;
  }
};

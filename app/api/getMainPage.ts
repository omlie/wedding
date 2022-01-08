import { TPage } from "~/types/shared";
import { getContentfulClient } from "./contentful";

export const getMainPage = async (): Promise<TPage | null> => {
  const client = getContentfulClient();

  const result = await client?.getEntries({
    content_type: "mainPage",
  });

  if (result?.items.length !== 0) {
    return result?.items[0].fields as TPage;
  }

  return null;
};

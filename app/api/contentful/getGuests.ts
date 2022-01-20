import { fieldsParser } from "contentful-parsers";
import { TGuest, TLink, TWishlistPage } from "~/types/shared";
import { getContentfulClient } from "./contentful";

export const getGuests = async (): Promise<TGuest[] | null> => {
  const client = getContentfulClient();

  const result = await client?.getEntries({
    content_type: "guest",
  });

  if (result && result?.items.length !== 0) {
    return result.items
      .map((item) => fieldsParser(item) as TGuest)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  return null;
};

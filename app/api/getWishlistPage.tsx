import { fieldsParser } from "contentful-parsers";
import { TWishlistPage } from "~/types/shared";
import { getContentfulClient } from "./contentful";

export const getWishlistPage = async (): Promise<TWishlistPage | null> => {
  const client = getContentfulClient();

  const result = await client?.getEntries({
    content_type: "wishlistPage",
  });

  if (result?.items.length !== 0) {
    return fieldsParser(result?.items[0]) as TWishlistPage;
  }

  return null;
};

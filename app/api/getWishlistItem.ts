import { fieldsParser } from "contentful-parsers";
import { TLink, TWishlistItem } from "~/types/shared";
import { getContentfulClient } from "./contentful";

export const getWishlistItem = async (
  id: string
): Promise<TWishlistItem | null> => {
  const client = getContentfulClient();

  const result = await client?.getEntries({
    content_type: "wishlistItem",
    "sys.id[match]": id,
  });

  if (result?.items.length !== 0) {
    return fieldsParser(result?.items[0]) as TWishlistItem;
  }

  return null;
};

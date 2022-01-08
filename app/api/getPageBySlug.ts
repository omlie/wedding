import { TInfoPage, TPage } from "~/types/shared";
import { getContentfulClient } from "./contentful";

export const getPageBySlug = async (
  slug: string
): Promise<TInfoPage | null> => {
  const client = getContentfulClient();

  const result = await client?.getEntries({
    content_type: "infoPage",
    "fields.slug[match]": slug,
  });

  if (result?.items.length !== 0) {
    return result?.items[0].fields as TInfoPage;
  }

  return null;
};

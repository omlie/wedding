import { TInfoPage, TPage } from "~/types/shared";
import { getContentfulClient } from "./contentful";

export const getLinks = async (): Promise<string[]> => {
  const client = getContentfulClient();

  const result = await client?.getEntries({
    content_type: "infoPage",
  });

  if (result?.items.length !== 0) {
    const fields = result?.items.map((item) => item.fields as TInfoPage);

    return fields?.map((x) => x.slug) ?? [];
  }

  return [];
};

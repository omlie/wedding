import { TInfoPage, TLink, TPage } from "~/types/shared";
import { getContentfulClient } from "./contentful";

export const getLinks = async (): Promise<TLink[]> => {
  const client = getContentfulClient();

  const result = await client?.getEntries({
    content_type: "infoPage",
  });

  if (result?.items.length !== 0) {
    const fields = result?.items.map((item) => item.fields as TInfoPage);

    return fields?.map((x) => ({ text: x.heading, slug: x.slug })) ?? [];
  }

  return [];
};

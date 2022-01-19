import { fieldsParser } from "contentful-parsers";
import { TInfoPage, TLink } from "~/types/shared";
import { getContentfulClient } from "./contentful";
import { getWishlistPage } from "./getWishlistPage";

export const getLinks = async (): Promise<TLink[]> => {
  const client = getContentfulClient();

  const infoPages = await client?.getEntries({
    content_type: "infoPage",
  });

  const wishlistPage = await getWishlistPage();

  if (infoPages?.items.length !== 0) {
    const fields = infoPages?.items.map(
      (item) => fieldsParser(item) as TInfoPage
    );

    const rsvpLink = [{ text: "RSVP", slug: "rsvp" }];

    const wishlistLink = wishlistPage
      ? [{ text: wishlistPage.heading, slug: "wishlist" }]
      : [];

    return [
      ...rsvpLink,
      ...wishlistLink,
      ...(fields?.map((x) => ({ text: x.heading, slug: x.slug })) ?? []),
    ];
  }

  return [];
};

export type TLocale = "en-AU" | "nb";

export type TPage = {
  heading: string;
};

export type TInfoPage = TPage & {
  slug: string;
};

import { Document } from "@contentful/rich-text-types";

export type TLocale = "en-AU" | "nb";

type TDimensions = {
  width: number;
  height: number;
};

export type TImageDetails = {
  size: number;
  image: TDimensions;
};

export type TFile = {
  url: string;
  details: TImageDetails;
  fileName: string;
  contentType: string;
};

export type TImage = {
  title: string;
  description?: string;
  file?: TFile;
  sysId?: string;
};

export type TContentBlock = {
  heading?: string;
  image?: TImage;
  body: Document | null;
  id: string;
};

export type TPage = {
  heading: string;
  image?: TImage;
  body: Document | null;
  contentBlocks: TContentBlock[];
};

export type TWishlistItem = {
  name: string;
  description?: string;
  image?: TImage;
  amount?: number;
  linkText?: string;
  url?: string;
  id: string;
  price?: string;
};

export type TWishlistPage = {
  heading: string;
  body: Document | null;
  items: TWishlistItem[];
};

export type TInfoPage = TPage & {
  slug: string;
};

export type TLink = {
  text?: string;
  slug?: string;
};

export type TGuest = {
  name: string;
  plusOne: boolean;
  id: string;
  responded?: boolean;
};

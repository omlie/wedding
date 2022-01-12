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
  heading: string;
  image?: TImage;
  body: Document | null;
};

export type TPage = {
  heading: string;
  image?: TImage;
  body: Document | null;
  contentBlocks: TContentBlock[];
};

export type TInfoPage = TPage & {
  slug: string;
};

export type TLink = {
  text: string;
  slug: string;
};

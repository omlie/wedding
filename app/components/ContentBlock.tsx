import { TContentBlock } from "~/types/shared";
import { Image, RichText } from ".";

const ContentBlock = ({ heading, body, image }: TContentBlock) => {
  return (
    <div className="flex flex-col gap-2">
      <Image image={image} />
      <h2 className="text-3xl">{heading}</h2>
      <RichText content={body} />
    </div>
  );
};

export default ContentBlock;

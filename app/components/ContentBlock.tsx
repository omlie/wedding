import { TContentBlock } from "~/types/shared";
import { RichText } from ".";

const ContentBlock = ({ heading, body, image }: TContentBlock) => {
  return (
    <div className="flex flex-col gap-2">
      {image && (
        <img
          className="object-cover w-full my-8 max-h-image"
          src={image.file?.url}
        />
      )}
      <h2 className="text-3xl font-light ">{heading}</h2>
      <RichText content={body} />
    </div>
  );
};

export default ContentBlock;

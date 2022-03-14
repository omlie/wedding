import clsx from "clsx";
import { overrideTailwindClasses } from "tailwind-override";
import { TContentBlock } from "~/types/shared";
import { Image, RichText } from ".";

const ContentBlock = ({
  heading,
  body,
  image,
  className,
}: TContentBlock & { className?: string }) => {
  return (
    <div
      className={overrideTailwindClasses(
        clsx("flex flex-col gap-6 w-full", { [className ?? ""]: className })
      )}
    >
      {heading && <h2 className="text-3xl">{heading}</h2>}
      <Image image={image} noFixedHeight />
      {body && <RichText content={body} className={className} />}
    </div>
  );
};

export default ContentBlock;

import clsx from "clsx";
import { TImage } from "~/types/shared";

const Image = ({
  image,
  noFixedHeight = false,
  className,
  width = 1024,
}: {
  image?: TImage;
  noFixedHeight?: boolean;
  className?: string;
  width?: number;
}) => {
  return image ? (
    <div
      className={clsx("w-full", {
        "lg:h-[512px]": !noFixedHeight,
      })}
    >
      <img
        className={clsx("object-cover w-full max-h-image", {
          [className ?? ""]: className,
        })}
        src={`${image.file?.url}?w=${width}`}
        alt={image.title}
      />
    </div>
  ) : null;
};

export default Image;

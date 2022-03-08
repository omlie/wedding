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
  const isPng = image?.file?.contentType.includes("png");

  return image ? (
    <div
      className={clsx("w-full object-cover", {
        "lg:h-[512px]": !noFixedHeight,
      })}
    >
      <img
        className={clsx("w-full max-h-image", {
          [className ?? ""]: className,
          "object-contain":
            isPng ||
            (image.file?.details.image.height ?? 0) >
              (image.file?.details.image.width ?? 0),
          "object-cover":
            !isPng &&
            (image.file?.details.image.height ?? 0) <
              (image.file?.details.image.width ?? 0),
          "drop-shadow-lg": isPng,
        })}
        src={`${image.file?.url}?w=${width}`}
        alt={image.title}
      />
    </div>
  ) : null;
};

export default Image;

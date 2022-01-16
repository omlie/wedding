import clsx from "clsx";
import { TImage } from "~/types/shared";

const Image = ({
  image,
  noFixedHeight = false,
  className,
}: {
  image?: TImage;
  noFixedHeight?: boolean;
  className?: string;
}) =>
  image ? (
    <div
      className={clsx("w-full", {
        "lg:h-[512px]": !noFixedHeight,
      })}
    >
      <img
        className={clsx("object-cover w-full max-h-image", {
          [className ?? ""]: className,
        })}
        src={`${image.file?.url}?fm=jpg&w=1024&h=512`}
        alt={image.title}
      />
    </div>
  ) : null;

export default Image;

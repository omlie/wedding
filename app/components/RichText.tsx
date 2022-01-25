import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import clsx from "clsx";

const RichText = ({
  className,
  content,
}: {
  className?: string;
  content: Document | null;
}) => {
  return content ? (
    <div
      className={clsx("flex-col flex gap-6 max-w-3xl", {
        [className ?? ""]: className,
      })}
    >
      {documentToReactComponents(content)}
    </div>
  ) : null;
};

export default RichText;

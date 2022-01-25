import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document, INLINES } from "@contentful/rich-text-types";
import clsx from "clsx";

const RichText = ({
  className,
  content,
}: {
  className?: string;
  content: Document | null;
}) => {
  const documentToReactOptions = {
    renderNode: {
      [INLINES.HYPERLINK]: (node: any, children: any) => {
        return (
          <a href={node.data.uri} target="_blank">
            {children}
          </a>
        );
      },
    },
  };

  return content ? (
    <div
      className={clsx("flex-col flex gap-6 max-w-3xl", {
        [className ?? ""]: className,
      })}
    >
      {documentToReactComponents(content, documentToReactOptions)}
    </div>
  ) : null;
};

export default RichText;

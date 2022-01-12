import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

const RichText = ({
  className,
  content,
}: {
  className?: string;
  content: Document | null;
}) => {
  return content ? (
    <div className={className}>{documentToReactComponents(content)}</div>
  ) : null;
};

export default RichText;

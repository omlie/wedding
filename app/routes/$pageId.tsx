import { MetaFunction, useLoaderData } from "remix";
import { getPageBySlug } from "~/api/contentful";
import { ContentBlock, Image, Layout, RichText } from "~/components";
import { TInfoPage } from "~/types/shared";

export const meta: MetaFunction = ({
  data,
}: {
  data: TInfoPage | undefined;
}) => {
  if (!data) {
    return {
      title: "Not a page",
      description: "No page found",
    };
  }
  return {
    title: data.heading,
    description: "",
  };
};

export function loader({ params }: { params: { pageId: string } }) {
  const res = getPageBySlug(params.pageId);
  return res;
}

export default function Index() {
  const { heading, image, body, contentBlocks }: TInfoPage = useLoaderData();
  return (
    <main>
      <Image image={image} />
      <Layout>
        <h1>{heading}</h1>
        <RichText content={body} />
        {contentBlocks?.map((block) => (
          <ContentBlock key={block.heading} {...block} />
        ))}
      </Layout>
    </main>
  );
}

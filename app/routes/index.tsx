import { useLoaderData } from "remix";
import { getMainPage } from "~/api/contentful";
import { ContentBlock, Image, Layout, RichText } from "~/components";
import { TPage } from "~/types/shared";

export async function loader() {
  return getMainPage();
}

export default function Index() {
  const { heading, image, body, contentBlocks }: TPage = useLoaderData();
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

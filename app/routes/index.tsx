import { useLoaderData } from "remix";
import { getMainPage } from "~/api/getMainPage";
import { ContentBlock, Layout, RichText } from "~/components";
import { TPage } from "~/types/shared";

export async function loader() {
  return getMainPage();
}

export default function Index() {
  const { heading, image, body, contentBlocks }: TPage = useLoaderData();
  return (
    <main>
      {image && (
        <img
          className="object-cover w-full max-h-image"
          src={image.file?.url}
          alt={image.title}
        />
      )}
      <Layout>
        <h1 className="font-adelio">{heading}</h1>
        <RichText content={body} />
        {contentBlocks?.map((block) => (
          <ContentBlock key={block.heading} {...block} />
        ))}
      </Layout>
    </main>
  );
}

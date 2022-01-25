import { useLoaderData } from "remix";
import { getMainPage } from "~/api/contentful";
import { ContentBlock, Image, Layout, RichText } from "~/components";
import { useLocale } from "~/hooks";
import { labels } from "~/i18n";
import { TPage } from "~/types/shared";

export async function loader() {
  return getMainPage();
}

export default function Index() {
  const { heading, image, body, contentBlocks }: TPage = useLoaderData();
  const locale = useLocale();

  return (
    <main>
      <Image image={image} />
      <Layout>
        <h1>{heading}</h1>
        <div className="flex items-center justify-between h-full gap-8">
          <h3 className="py-6 text-center max-w-[175px]">
            {labels[locale].date}
          </h3>
          <span className="h-32 border border-r-black"></span>
          <h3 className="py-6  text-center max-w-[175px]">
            {labels[locale].location}
          </h3>
        </div>
        <RichText content={body} />
        {contentBlocks?.map((block) => (
          <ContentBlock key={block.heading} {...block} />
        ))}
      </Layout>
    </main>
  );
}

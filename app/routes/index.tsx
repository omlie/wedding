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
      <Layout className="items-center">
        <h1>{heading}</h1>
        <div className="flex items-center justify-between h-full gap-8">
          <h5 className="py-6 text-center w-[120px]">{labels[locale].date}</h5>
          <span className="h-20 border-r-2 border-black"></span>
          <h5 className="py-6  text-center w-[120px]">
            {labels[locale].location}
          </h5>
        </div>
        <RichText className="items-center text-center" content={body} />
        {contentBlocks?.map((block) => (
          <ContentBlock
            key={block.id}
            className="items-center text-center"
            {...block}
          />
        ))}
      </Layout>
    </main>
  );
}

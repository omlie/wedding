import { useLoaderData } from "remix";
import { getWishlistPage } from "~/api/getWishlistPage";
import {
  ContentBlock,
  Image,
  Layout,
  RichText,
  WishlistItem,
} from "~/components";
import { TPage, TWishlistPage } from "~/types/shared";

export async function loader() {
  return getWishlistPage();
}

export default function Index() {
  const { heading, body, items }: TWishlistPage = useLoaderData();
  return (
    <main>
      <Layout>
        <h1>{heading}</h1>
        <RichText content={body} />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 auto-rows-fr">
          {items?.map((item) => (
            <WishlistItem key={item.name} {...item} />
          ))}
        </div>
      </Layout>
    </main>
  );
}

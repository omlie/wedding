import { Outlet, useLoaderData } from "remix";
import { getWishlistCounter } from "~/api/firebase/wishlist";
import { getWishlistPage } from "~/api/contentful";
import { Layout, RichText, WishlistItem } from "~/components";
import { TWishlistItem, TWishlistPage } from "~/types/shared";

export async function loader() {
  const page = await getWishlistPage();

  const updatedItems = page
    ? await Promise.all<TWishlistItem>(
        page?.items.map(async (item) => {
          const alreadyRegistered = await getWishlistCounter(item.id);

          return {
            ...item,
            amount: item.amount ? item.amount - alreadyRegistered : item.amount,
          } as TWishlistItem;
        })
      )
    : [];

  return { ...page, items: updatedItems };
}

export default function Index() {
  const { heading, body, items }: TWishlistPage = useLoaderData();
  return (
    <main>
      <Layout>
        <h1>{heading}</h1>
        <RichText content={body} />
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 auto-rows-fr">
          {items?.map((item) => (
            <WishlistItem key={item.name} {...item} />
          ))}
        </div>
      </Layout>
      <Outlet />
    </main>
  );
}

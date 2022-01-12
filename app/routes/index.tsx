import { useLoaderData } from "remix";
import { getMainPage } from "~/api/getMainPage";
import { Layout } from "~/components";
import { TPage } from "~/types/shared";

export async function loader() {
  return getMainPage();
}

export default function Index() {
  const page: TPage = useLoaderData();
  return (
    <Layout>
      <h1>{page.heading}</h1>
      <div></div>
    </Layout>
  );
}

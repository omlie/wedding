import { MetaFunction, useLoaderData } from "remix";
import { getPageBySlug } from "~/api/getPageBySlug";
import { Layout } from "~/components";
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
  return getPageBySlug(params.pageId);
}

export default function Index() {
  const page: TInfoPage = useLoaderData();

  return (
    <Layout>
      <h1>{page.heading}</h1>
    </Layout>
  );
}

import { useLoaderData } from "remix";
import { getPageBySlug } from "~/api/getPageBySlug";
import { TInfoPage } from "~/types/shared";

export function loader({ params }: { params: { pageId: string } }) {
  return getPageBySlug(params.pageId);
}

export default function Index() {
  const page: TInfoPage = useLoaderData();

  return (
    <div>
      <h1>{page.heading}</h1>
    </div>
  );
}

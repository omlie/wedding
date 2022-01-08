import { useLoaderData } from "remix";
import { getLinks } from "~/api/getLinks";
import { getMainPage } from "~/api/getMainPage";
import { TPage } from "~/types/shared";

export async function loader() {
  const page = await getMainPage();
  const links = await getLinks();

  return { page, links };
}

type MainPageData = {
  page: TPage;
  links: string[];
};

export default function Index() {
  const { page, links }: MainPageData = useLoaderData();
  return (
    <div>
      <h1>{page.heading}</h1>
      <div>
        {links?.map((link) => (
          <a href={link}>{link}</a>
        ))}
      </div>
    </div>
  );
}

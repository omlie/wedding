import { LoaderFunction, NavLink, useLoaderData, useNavigate } from "remix";
import { getLinks } from "~/api/contentful";
import { Modal } from "~/components";
import { useLocale } from "~/hooks";
import { labels } from "~/i18n";
import { TLink } from "~/types/shared";

export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let attending = url.searchParams.get("attending");
  const links = await getLinks();
  return { attending: attending === "true", links };
};

const Registered = () => {
  const locale = useLocale();
  const navigate = useNavigate();
  const { attending, links }: { attending: boolean; links: TLink[] } =
    useLoaderData();

  return (
    <>
      <Modal
        open={true}
        onClose={() => {
          navigate("../");
        }}
        className="border-4 bg-pink-accent text-blue-dark border-blue-dark"
      >
        <div className="flex flex-col max-w-sm gap-4 px-8 pb-8">
          <h4>{labels[locale].rsvp.thanksForRegistering}</h4>
          <h5>
            {attending
              ? labels[locale].rsvp.isAttending
              : labels[locale].rsvp.isNotAttending}
          </h5>
          {attending && (
            <div className="flex flex-col w-full gap-4">
              <p>{labels[locale].rsvp.exploreInfo}</p>
              <div className="flex flex-wrap w-full gap-2">
                {links.map(
                  (link) =>
                    link.slug &&
                    !link.slug.includes("rsvp") && (
                      <NavLink
                        to={link.slug}
                        className="p-2 no-underline bg-blue-light hover:bg-blue-lightest hover:text-blue-dark rounded-5xl"
                      >
                        {link.text}
                      </NavLink>
                    )
                )}
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Registered;

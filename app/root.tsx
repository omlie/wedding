import {
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";
import type { MetaFunction } from "remix";
import type { LinksFunction } from "remix";
import tailwindUrl from "./tailwind.css";
import adelioUrl from "./styles/fonts/adelio.otf";
import arsenalUrl from "./styles/fonts/Arsenal-Regular.ttf";
import { getLinks } from "./api/getLinks";
import NavBar from "./components/NavBar";
import { TLink } from "./types/shared";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindUrl },
    { rel: "stylesheet", href: adelioUrl },
    { rel: "stylesheet", href: arsenalUrl },
  ];
};

export const meta: MetaFunction = () => {
  return { title: "Othea & Vana" };
};

export const loader: LoaderFunction = () => {
  return getLinks();
};

export default function App() {
  const links: TLink[] = useLoaderData();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-lavender-grey text-indigo-dye">
        <NavBar links={links} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

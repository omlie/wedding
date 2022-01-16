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
import adelioWoff from "../public/fonts/AdelioDarmanto.woff";
import adelioWoff2 from "../public/fonts/AdelioDarmanto.woff2";
import carroisWoff from "../public/fonts/CarroisGothic-Regular.woff";
import carroisWoff2 from "../public/fonts/CarroisGothic-Regular.woff2";
import { getLinks } from "./api/getLinks";
import NavBar from "./components/NavBar";
import { TLink, TLocale } from "./types/shared";
import { createContext } from "react";
import { LocaleProvider } from "./hooks";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindUrl }];
};

export const meta: MetaFunction = () => {
  return { title: "Othea & Vana" };
};

export const loader: LoaderFunction = async () => {
  const link = await getLinks();
  return { links: link, locale: process.env.LOCALE };
};

export default function App() {
  const { links, locale } = useLoaderData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <LocaleProvider locale={locale}>
          <NavBar links={links} />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </LocaleProvider>
      </body>
    </html>
  );
}

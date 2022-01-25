import { NavLink } from "remix";
import { TLink } from "~/types/shared";
import { Layout } from ".";
import Home from "remixicon-react/HomeHeartFillIcon";

const NavBar = ({ links }: { links: TLink[] }) => (
  <nav className="z-50 w-screen h-auto transition-all bg-blue-dark text-orange-accent text-blue-jeans">
    <Layout className="flex flex-col justify-between gap-4" noMargin wide>
      <div className="flex flex-row items-center justify-between w-full">
        <NavLink
          to="/"
          className="py-4 text-2xl text-pink-accent hover:text-orange-accent focus:text-orange-accent"
        >
          <Home size={40} />
        </NavLink>
        <div className="flex-row items-center justify-center hidden w-full gap-6 sm:flex">
          {links.map(
            ({ text, slug }) =>
              slug && (
                <NavLink
                  to={slug}
                  key={slug}
                  className="py-4 no-underline text-pink-accent hover:text-orange-accent focus:text-orange-accent rounded-3xl whitespace-nowrap"
                >
                  {text}
                </NavLink>
              )
          )}
        </div>
        <div className="relative flex items-center gap-6">
          <a
            href="https://www.otheaogvana.no"
            className="py-4 text-sm no-underline text-pink-accent"
          >
            Norsk
          </a>

          <a
            href="https://www.otheaandvana.com"
            className="py-4 text-sm no-underline text-pink-accent"
          >
            English
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center w-full gap-6 sm:hidden">
        {links.map(
          ({ text, slug }) =>
            slug && (
              <NavLink
                to={slug}
                key={slug}
                className="py-4 no-underline text-pink-accent hover:text-orange-accent focus:text-orange-accent rounded-3xl whitespace-nowrap"
              >
                {text}
              </NavLink>
            )
        )}
      </div>
    </Layout>
  </nav>
);

export default NavBar;

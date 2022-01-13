import { NavLink } from "remix";
import { TLink } from "~/types/shared";
import { Layout } from ".";
import Home from "remixicon-react/HomeHeartFillIcon";
import Menu from "remixicon-react/MenuLineIcon";
import { useState } from "react";
import clsx from "clsx";
import { overrideTailwindClasses } from "tailwind-override";

const NavBar = ({ links }: { links: TLink[] }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="w-screen h-auto transition-all bg-blue-dark text-orange-accent text-blue-jeans">
      <Layout className="flex flex-col justify-between gap-4" noMargin wide>
        <div className="flex flex-row items-center justify-between w-full">
          <NavLink
            to="/"
            className="py-4 text-2xl text-pink-accent hover:text-orange-accent focus:text-orange-accent"
          >
            <Home size={40} />
          </NavLink>
          <a
            onClick={() => setOpen(!open)}
            className="py-4 text-2xl text-pink-accent"
          >
            <Menu size={40} />
          </a>
        </div>
        {open && (
          <div
            className={clsx(
              "fixed right-0 flex flex-col bg-blue-dark min-w-[800px]",
              {
                ["h-screen"]: open,
              }
            )}
          >
            {links.map(({ text, slug }) => (
              <NavLink
                to={slug}
                key={slug}
                className="py-4 text-2xl text-pink-accent hover:text-orange-accent focus:text-orange-accent"
              >
                {text}
              </NavLink>
            ))}
          </div>
        )}
      </Layout>
    </nav>
  );
};

export default NavBar;

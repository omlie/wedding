import { NavLink } from "remix";
import { TLink } from "~/types/shared";
import { Layout } from ".";
import Home from "remixicon-react/HomeHeartFillIcon";
import Menu from "remixicon-react/MenuLineIcon";
import Close from "remixicon-react/CloseLineIcon";
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
          <div className="relative flex flex-col items-end w-96">
            <a
              onClick={() => setOpen(!open)}
              className="py-4 text-2xl text-pink-accent"
            >
              {!open ? <Menu size={40} /> : <Close size={40} />}
            </a>
            <div
              className={clsx(
                "absolute right-0 flex flex-col bg-blue-dark p-10 transition-all rounded-5xl translate-x-10 text-right",
                {
                  "h-auto -translate-y-full": !open,
                  "mt-16 shadow-menu": open,
                }
              )}
            >
              {links.map(({ text, slug }) => (
                <NavLink
                  to={slug}
                  key={slug}
                  className="py-4 text-2xl no-underline text-pink-accent hover:text-orange-accent focus:text-orange-accent rounded-3xl"
                >
                  {text}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </nav>
  );
};

export default NavBar;

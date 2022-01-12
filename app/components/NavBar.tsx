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
    <nav
      className={overrideTailwindClasses(
        clsx("bg-indigo-dye text-blue-jeans w-screen h-auto transition-all", {
          ["h-screen"]: open,
        })
      )}
    >
      <Layout className="flex flex-col justify-between gap-4" noMargin>
        <div className="flex flex-row items-center justify-between w-full">
          <NavLink to="/" className="py-4 text-2xl">
            <Home size={40} />
          </NavLink>
          <a onClick={() => setOpen(!open)} className="py-4 text-2xl">
            <Menu size={40} />
          </a>
        </div>
        {open && (
          <div>
            {links.map(({ text, slug }) => (
              <NavLink to={slug} key={slug} className="py-4 text-2xl">
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

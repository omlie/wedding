import { NavLink, useTransition } from "remix";
import { TLink } from "~/types/shared";
import { Layout } from ".";
import Home from "remixicon-react/HomeHeartFillIcon";
import Menu from "remixicon-react/MenuLineIcon";
import Close from "remixicon-react/CloseLineIcon";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useOnClickOutside } from "~/hooks";

const NavBar = ({ links }: { links: TLink[] }) => {
  const transition = useTransition();
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  useOnClickOutside(ref, () => setOpen(false));

  useEffect(() => {
    setOpen(false);
  }, [transition]);

  return (
    <nav className="z-50 w-screen h-auto transition-all bg-blue-dark text-orange-accent text-blue-jeans">
      <Layout className="flex flex-col justify-between gap-4" noMargin wide>
        <div
          ref={ref}
          className="flex flex-row items-center justify-between w-full"
        >
          <NavLink
            to="/"
            className="py-4 text-2xl text-pink-accent hover:text-orange-accent focus:text-orange-accent"
          >
            <Home size={40} />
          </NavLink>
          <div className="relative flex items-center justify-end gap-6 w-96">
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
            <a
              onClick={() => setOpen(!open)}
              className="py-4 text-2xl text-pink-accent"
            >
              {!open ? <Menu size={40} /> : <Close size={40} />}
            </a>
            <div
              className={clsx(
                "absolute top-24 right-0 flex flex-col bg-blue-dark px-10 py-4 transition-all rounded-5xl text-right z-100",
                {
                  "h-auto translate-x-[100vh] invisible": !open,
                  "shadow-menu visible xl:translate-x-10": open,
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

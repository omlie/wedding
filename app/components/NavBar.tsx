import { NavLink } from "remix";
import { TLink } from "~/types/shared";
import { Layout } from ".";
import HomeHeartFill from "remixicon-react/HomeHeartFillIcon";

const NavBar = ({ links }: { links: TLink[] }) => {
  return (
    <nav className="bg-indigo-dye text-blue-jeans">
      <Layout className="flex flex-row items-center gap-4" noMargin>
        <NavLink to="/" className="py-4 text-2xl">
          <HomeHeartFill size={40} />
        </NavLink>
        {links.map(({ text, slug }) => (
          <NavLink to={slug} key={slug} className="py-4 text-2xl">
            {text}
          </NavLink>
        ))}
      </Layout>
    </nav>
  );
};

export default NavBar;

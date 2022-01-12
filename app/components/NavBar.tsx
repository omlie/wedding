import { NavLink, useLoaderData } from "remix";
import { Layout } from ".";

const NavBar = ({ links }: { links: string[] }) => {
  return (
    <nav className="bg-indigo-dye text-blue-jeans">
      <Layout className="flex flex-row gap-4">
        {links.map((link) => (
          <NavLink to={link} key={link} className="py-4 text-2xl">
            {link}
          </NavLink>
        ))}
      </Layout>
    </nav>
  );
};

export default NavBar;

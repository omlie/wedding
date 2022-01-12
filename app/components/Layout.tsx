import clsx from "clsx";
import { overrideTailwindClasses } from "tailwind-override";

type TLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

const Layout = ({ className, children }: TLayoutProps) => {
  return (
    <main
      className={overrideTailwindClasses(
        clsx("flex flex-col items-start flex-1 max-w-5xl px-6 mx-auto mt-6", {
          [className ?? ""]: className,
        })
      )}
    >
      {children}
    </main>
  );
};

export default Layout;

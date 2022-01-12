import clsx from "clsx";
import { overrideTailwindClasses } from "tailwind-override";

type TLayoutProps = {
  className?: string;
  noMargin?: boolean;
  children: React.ReactNode;
};

const Layout = ({ className, children, noMargin = false }: TLayoutProps) => {
  return (
    <div
      className={overrideTailwindClasses(
        clsx(
          "flex flex-col items-start flex-1 max-w-5xl px-6 mx-auto my-10 gap-6",
          {
            [className ?? ""]: className,
            ["my-0"]: noMargin,
          }
        )
      )}
    >
      {children}
    </div>
  );
};

export default Layout;

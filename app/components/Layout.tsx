import clsx from "clsx";
import { overrideTailwindClasses } from "tailwind-override";

type TLayoutProps = {
  className?: string;
  noMargin?: boolean;
  wide?: boolean;
  children: React.ReactNode;
};

const Layout = ({
  className,
  children,
  noMargin = false,
  wide = false,
}: TLayoutProps) => {
  return (
    <div
      className={overrideTailwindClasses(
        clsx(
          "flex flex-col items-start flex-1 max-w-5xl px-6 mx-auto my-10 gap-6",
          {
            [className ?? ""]: className,
            ["my-0"]: noMargin,
            ["max-w-7xl"]: wide,
          }
        )
      )}
    >
      {children}
    </div>
  );
};

export default Layout;

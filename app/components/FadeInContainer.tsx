import clsx from "clsx";
import { ReactNode } from "react";

const FadeInContainer = ({
  className = "",
  hidden,
  children,
}: {
  className?: string;
  hidden: boolean;
  children: ReactNode;
}) => (
  <div
    className={clsx("opacity-100  gap-4 my-6 flex flex-col", {
      "opacity-0 absolute -z-1000": hidden,
      "transition-all duration-300": !hidden,
      [className]: className,
    })}
  >
    {children}
  </div>
);

export default FadeInContainer;

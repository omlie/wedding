import clsx from "clsx";
import { overrideTailwindClasses } from "tailwind-override";
import Close from "remixicon-react/CloseLineIcon";
import { useRef } from "react";
import { useOnClickOutside } from "~/hooks";

type TLayoutProps = {
  className?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ className, open, onClose, children }: TLayoutProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => onClose());

  if (!open) return null;

  return (
    <div
      className={clsx(
        "fixed bg-black bg-opacity-40 top-0 left-0 z-[200] w-screen min-h-screen"
      )}
      role="button"
    >
      <div
        ref={ref}
        className={overrideTailwindClasses(
          clsx(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto w-auto rounded-5xl z-1000 min-w-[350px] min-h-[250px]",
            {
              [className ?? ""]: className,
            }
          )
        )}
      >
        <div className="relative flex justify-end w-full">
          <button onClick={onClose} className="hover:text-blue-light">
            <Close size={40} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

import { ReactNode } from "react";
import GetIcon from "./getIcon";

interface ButtonInterface {
  children: ReactNode;
  className?: string;
  icon?: string;
  iconClassName?: string;
  startIcon?: boolean;
  endIcon?: boolean;
  onTrigger?:()=>void
}

function Button({
  children,
  className,
  endIcon = true,
  icon = undefined,
  iconClassName = "",
  startIcon = false,
  onTrigger
}: ButtonInterface) {
  return (
    <div className="w-fit">
      <button onClick={onTrigger}
        className={` text-white px-4 h-8  text-sm  flex items-center gap-2 cursor-pointer hover:scale-105 ${className} bg-black  `}
      >
        {icon && startIcon && (
          <GetIcon className={`${iconClassName}`} icon={icon} />
        )}

        {children}
        {icon && endIcon && (
          <GetIcon className={`${iconClassName}`} icon={icon} />
        )}
      </button>
    </div>
  );
}

export default Button;

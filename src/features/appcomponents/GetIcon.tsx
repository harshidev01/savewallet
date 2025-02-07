import { ReactNode } from "react";
import { HiOutlineArrowRightStartOnRectangle } from "react-icons/hi2";
import { IoReaderOutline } from "react-icons/io5";

interface GetIconInterface {
  icon: string;
  className: string;
}

function GetIcon({ icon, className }: GetIconInterface) {
  function getIcon(): ReactNode {
    switch (icon.toLowerCase()) {
      case "start":
        return (
          <HiOutlineArrowRightStartOnRectangle
            className={` h-5 w-5 ${className}`}
          />
        );

      case "read":
        return <IoReaderOutline className={` h-5 w-5 ${className}`} />;
    }
  }

  return <div>{getIcon()}</div>;
}

export default GetIcon;

import React, { PropsWithChildren, useState } from "react";

import { useMediaQuery } from "react-responsive";
import cn from "classnames";

import Button from "@elements/Button";
import { DESKTOP_QUERY } from "@constants/app";

import styles from "./styles.module.scss";

export interface PopoverProps {
  buttonIcon: React.ElementType;
}

const Popover: React.FC<PropsWithChildren<PopoverProps>> = ({
  children,
  buttonIcon,
}) => {
  const [isOpen, setOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: DESKTOP_QUERY })

  const handleTogglePopover = () => {
    setOpen((prevIsOpen) => {
      return !prevIsOpen;
    });
  };

  // return (
  //   <div className="relative flex min-w-full items-center justify-end">
  //     <Button
  //       onClick={handleTogglePopover}
  //       Icon={buttonIcon}
  //       className="z-[3]"
  //     />

  //     {isOpen && <div className={cn(styles.mobilePopover)}>{children}</div>}
  //   </div>
  // );

  return (
    <div>
      <Button
        onClick={handleTogglePopover}
        Icon={buttonIcon}
        className="z-[3]"
      />

      {isOpen && <div className={cn(styles.desktopPopover)}>{children}</div>}
    </div>
  );
};

export default Popover;

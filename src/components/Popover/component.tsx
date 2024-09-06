import React, { PropsWithChildren, useState } from "react";
import Button from "@elements/Button";
import { PopoverProps } from "./types";
import { useMediaQuery } from "react-responsive";
import { DESKTOP_QUERY } from "@constants/app";
import cn from "classnames";
import styles from "./styles.module.scss";

const Popover: React.FC<PropsWithChildren<PopoverProps>> = ({
  children,
  buttonIcon,
}) => {
  const [isOpen, setOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: DESKTOP_QUERY });

  const handleTogglePopover = () => {
    setOpen((prevIsOpen) => !prevIsOpen);
  };

  const classNameButton = cn({
    [styles.buttonPopoverFocus]: isOpen,
  });

  const classNameButtonIcon = cn({
    [styles.buttonIconPopoverFocus]: isOpen,
  });

  if (isDesktop) {
    return (
      <div>
        <Button
          onClick={handleTogglePopover}
          Icon={buttonIcon}
          className={classNameButton}
          classNameIcon={classNameButtonIcon}
        />

        {isOpen && <div className={styles.desktopPopover}>{children}</div>}
      </div>
    );
  }

  return (
    <div className={styles.shareButton}>
      <Button
        onClick={handleTogglePopover}
        Icon={buttonIcon}
        className={classNameButton}
        classNameIcon={classNameButtonIcon}
      />

      {isOpen && <div className={styles.mobilePopover}>{children}</div>}
    </div>
  );
};

export default Popover;

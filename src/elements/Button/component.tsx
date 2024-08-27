import React from "react";
import { ButtonProps } from "./types";
import cn from "classnames";
import styles from "./styles.module.scss";

const Button: React.FC<ButtonProps> = ({
  onClick,
  Icon,
  className = "",
  classNameIcon = "",
  href,
}) => {
  if (href) {
    return (
      <a href={href} className={cn(className, styles.button)}>
        {<Icon className={cn(classNameIcon, styles.buttonIcon)} />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cn(className, styles.button)}>
      {<Icon className={cn(classNameIcon, styles.buttonIcon)} />}
    </button>
  );
};

export default Button;

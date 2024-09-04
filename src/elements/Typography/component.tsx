import React from "react";
import { TypographyProps } from "./types";
import cn from "classnames";
import styles from "./styles.module.scss";

const Typography: React.FC<TypographyProps> = ({
  text,
  type,
  color,
  weight,
  element,
  className = "",
}) => {
  const classNames = cn(className, {
    [styles.textSizeBody]: type === "body",
    [styles.textSizeSubtitle]: type === "subtitle",
    [styles.textSizeOverline]: type === "overline",

    [styles.textColorDarkGrayish]: color === "dark-grayish",
    [styles.textColorGrayish]: color === "grayish",
    [styles.textColorLight]: color === "light",

    [styles.textWeightMedium]: weight === "medium",
    [styles.textWeightBold]: weight === "bold",
  });

  const Component = element;

  return <Component className={classNames}>{text}</Component>;
};

export default Typography;

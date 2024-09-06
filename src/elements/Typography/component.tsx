import React from "react";
import { TypographyProps } from "./types";
import cn from "classnames";
import styles from "./styles.module.scss";

const Typography: React.FC<TypographyProps> = ({
  text,
  type,
  color,
  weight,
  element = 'p',
  className = "",
}) => {
  const classNames = cn(className, {
    [styles.textSizeBody]: type === "body",
    [styles.textSizeSubtitle]: type === "subtitle",
    [styles.textSizeOverline1]: type === "overline-1",
    [styles.textSizeOverline2]: type === "overline-2",

    [styles.textColorDarkGrayish]: color === "dark-grayish",
    [styles.textColorDarkBlue]: color === "dark-blue",
    [styles.textColorGrayishBlue]: color === "grayish-blue",

    [styles.textWeightMedium]: weight === "medium",
    [styles.textWeightBold]: weight === "bold",
  });

  const Component = element;

  return <Component className={classNames}>{text}</Component>;
};

export default Typography;

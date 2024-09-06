import React from "react";
import Typography from "@elements/Typography";
import { AvatarProps } from "./types";
import { FaCircleUser } from "react-icons/fa6";
import styles from "./styles.module.scss";

const Avatar: React.FC<AvatarProps> = ({ img, name, date }) => {
  return (
    <div className={styles.avatarWrapper}>
      {img ? (
        <img src={img} className={styles.imgAvatar}></img>
      ) : (
        <FaCircleUser className={styles.iconUser} />
      )}
      <div className={styles.infoWrapper}>
        <Typography
          text={name}
          type="overline-1"
          color="dark-grayish"
          weight="bold"
          element="span"
        />

        <Typography
          text={date}
          type="overline-1"
          color="grayish-blue"
          weight="medium"
          element="span"
        />
      </div>
    </div>
  );
};

export default Avatar;

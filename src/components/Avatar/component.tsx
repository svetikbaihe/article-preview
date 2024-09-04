import React from "react";
import { AvatarProps } from "./types";
import Typography from "@elements/Typography";
import styles from "./styles.module.scss";
import { FaCircleUser } from "react-icons/fa6";

const Avatar: React.FC<AvatarProps> = ({ img, name, date}) => {
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
          type='overline'
          color='dark-grayish'
          weight='bold'
          element='span'
        />

        <Typography
          text={date}
          type='overline'
          color='light'
          weight='medium'
          element='span'
        />
      </div>
    </div>
  );
};

export default Avatar;

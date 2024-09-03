import React from "react";
import { AvatarProps } from "./types";
import styles from "./styles.module.scss";
import { FaCircleUser } from "react-icons/fa6";

const Avatar: React.FC<AvatarProps> = ({ img = "", name = "", date = "" }) => {
  return (
    <div className={styles.avatarWrapper}>
      {img ? <img src={img} className={styles.imgAvatar}></img> : <FaCircleUser className={styles.iconUser}/>}
      <div className={styles.infoWrapper}>
        <span className={styles.nameAvatar}>{name}</span>
        <span className={styles.dateAvatar}>{date}</span>
      </div>
    </div>
  );
};

export default Avatar;

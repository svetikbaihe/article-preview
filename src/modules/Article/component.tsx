import React from "react";
import Typography from "@elements/Typography";
import Avatar from "@components/Avatar";
import Button from "@elements/Button";
import Popover from "@components/Popover";
import { IoMdShareAlt } from "react-icons/io";
import { LiaFacebookSquare } from "react-icons/lia";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlinePinterest } from "react-icons/ai";
import styles from "./styles.module.scss";

const Article: React.FC = () => {
  return (
    <div className={styles.article}>
      <div role="img" className={styles.articleImg} />

      <div className={styles.contentWrapper}>
        <div className={styles.articleTextWrapper}>
          <Typography
            text="Shift the overall look and feel by adding these wonderful touches to furniture in your home"
            type="subtitle"
            color="dark-grayish"
            weight="bold"
            element="h1"
            className={styles.articleSubtitle}
          />

          <Typography
            text="Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete. "
            type="body"
            color="dark-blue"
            weight="medium"
            element="p"
          />
        </div>
        <div className={styles.avatarLinksWrapper}>
          <Avatar
            img="/images/avatar-michelle.jpg"
            name="Michelle Appleton"
            date="28 Jun 2020"
          />

          <Popover buttonIcon={IoMdShareAlt}>
            <div className={styles.popoverWrapper}>
              <Typography
                text="SHARE"
                type="overline-2"
                color="grayish-blue"
                weight="medium"
                element="span"
              />
              <div className={styles.buttonsWrapper}>
                <Button
                  href="https://www.facebook.com"
                  Icon={LiaFacebookSquare}
                />
                <Button href="https://www.twitter.com" Icon={RxTwitterLogo} />
                <Button
                  href="https://www.pinterest.com"
                  Icon={AiOutlinePinterest}
                />
              </div>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Article;

import React, { PropsWithChildren } from "react";
import styles from './styles.module.scss';

const Container: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.articleContainer}>
      {children}
    </div>
  )
}

export default Container;
import React from "react";
import LogoMain from "./LogoMain/LogoMain";
import styles from "./Lobby.module.scss";
import Auth from "./auth/Auth";

export default function Lobby(): JSX.Element {
  const backgroundColor = "#ebebeb";

  return (
    <div className={styles.container}>
      <div className={styles.rightPanel} style={{ backgroundColor }}>
        <LogoMain backgroundColor={backgroundColor} />
        <Auth />
      </div>
      <div className={styles.leftPanel}>פאנל שמאלי</div>
    </div>
  );
}

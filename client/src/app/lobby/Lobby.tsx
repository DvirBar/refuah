import React from "react";
import Card from "components/containers/card/Card";
import LogoMain from "./LogoMain/LogoMain";
import styles from "./Lobby.module.scss";
import Auth from "./auth/Auth";

export default function Lobby(): JSX.Element {
  const backgroundColor = "#486974";
  return (
    <div className={styles.container}>
      <LogoMain backgroundColor={backgroundColor} />
      <Card className={styles.authCard}>
        <Auth />
      </Card>

    </div>
  );
}

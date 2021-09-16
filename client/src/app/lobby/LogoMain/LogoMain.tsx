import React from "react";
import logo from "assets/logo.svg";
import styles from "./LogoMain.module.scss";

interface IProps {
  backgroundColor: string;
}

export default function LogoMain({ backgroundColor }: IProps): JSX.Element {
  return (
    <div style={{ backgroundColor }} className={styles.logo}>
      <img className={styles.logoImage} src={logo} alt="logo" />
      <div className={styles.logoText}>מועמדים לרפואה בישראל</div>
    </div>
  );
}

import React from "react";
import ButtonLink from "components/navigation/ButtonLink/ButtonLink";
// import { ChevronRight, ChevronLeft } from "react-feather";
import styles from "./NavigateAuth.module.scss";

interface IProps {
  text: string,
  toggleLogin: () => void
}

export default function NavigateAuth({ text, toggleLogin }: IProps): JSX.Element {
  return (
    <ButtonLink onClick={toggleLogin}>
      <div className={styles.registerLink}>
        <div className={styles.text}>{text}</div>
      </div>
    </ButtonLink>
  );
}

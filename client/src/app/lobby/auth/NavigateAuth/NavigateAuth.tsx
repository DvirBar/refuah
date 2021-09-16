import React from "react";
import ButtonLink from "components/navigation/ButtonLink/ButtonLink";
import { ChevronDown, ChevronUp } from "react-feather";
import styles from "./NavigateAuth.module.scss";

interface IProps {
  isLogin: boolean,
  text: string,
  toggleLogin: () => void
}

export default function NavigateAuth({ text, isLogin, toggleLogin }: IProps): JSX.Element {
  const arrowsProps = {
    size: 30,
    className: styles.arrow,
  };

  return (
    <ButtonLink onClick={toggleLogin}>
      <div className={styles.registerLink}>
        {!isLogin
          && <ChevronUp {...arrowsProps} />}
        <div className={styles.text}>{text}</div>
        {isLogin
          && <ChevronDown {...arrowsProps} />}
      </div>
    </ButtonLink>
  );
}

import React from "react";
import Typography from "components/typography/Typography";
import Button from "components/forms/Button/Button";
import googleLogo from "assets/googleLogo.svg";
import ButtonLink from "components/navigation/ButtonLink/ButtonLink";
import LoginForm from "./LoginForm";
import styles from "./Login.module.scss";

interface IProps {
  toggleLogin: () => void
}

export default function Login({ toggleLogin }: IProps): JSX.Element {
  return (
    <div className={styles.login}>
      <Typography className={styles.header} variant="h1">
        התחברות
      </Typography>
      <LoginForm />
      <Button
        variant="secondary"
      >
        <div className={styles.buttonContent}>
          <img src={googleLogo} className={styles.buttonLogo} alt="googleLogo" />
          <span>התחברות עם גוגל</span>
        </div>
      </Button>
      <div className={styles.navAuth}>
        <div className={styles.noUserText}>עדיין אין משתמש?</div>
        <ButtonLink onClick={() => toggleLogin()}>
          להרשמה
        </ButtonLink>
      </div>
    </div>
  );
}

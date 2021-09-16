import React from "react";
import Typography from "components/typography/Typography";
import LoginForm from "./LoginForm";
import styles from "./Login.module.scss";
import NavigateAuth from "../NavigateAuth/NavigateAuth";

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
      <div className={styles.navAuth}>
        <div className={styles.noUserText}>עדיין אין משתמש?</div>
        <NavigateAuth
          toggleLogin={toggleLogin}
          text="להרשמה"
          isLogin
        />
      </div>
    </div>
  );
}

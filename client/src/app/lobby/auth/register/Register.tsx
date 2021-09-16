import Typography from "components/typography/Typography";
import React from "react";
import NavigateAuth from "../NavigateAuth/NavigateAuth";
import RegisterForm from "./RegisterForm";
import styles from "./Register.module.scss";

interface IProps {
  toggleLogin: () => void
}

export default function Register({ toggleLogin }: IProps): JSX.Element {
  return (
    <div className={styles.register}>
      <div className={styles.navAuth}>
        <NavigateAuth
          toggleLogin={toggleLogin}
          isLogin={false}
          text="להתחברות"
        />
      </div>
      <Typography className={styles.header} variant="h1">
        הרשמה
      </Typography>
      <RegisterForm />
    </div>
  );
}

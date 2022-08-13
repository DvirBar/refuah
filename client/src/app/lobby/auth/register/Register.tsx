import Typography from "components/typography/Typography";
import React from "react";
import ButtonLink from "components/navigation/ButtonLink/ButtonLink";
import RegisterForm from "./RegisterForm";
import styles from "./Register.module.scss";

interface IProps {
  toggleLogin: () => void
}

export default function Register({ toggleLogin }: IProps): JSX.Element {
  return (
    <div className={styles.register}>
      <Typography className={styles.header} variant="h1">
        הרשמה
      </Typography>
      <RegisterForm />
      <ButtonLink onClick={() => toggleLogin()}>
        להתחברות
      </ButtonLink>
    </div>
  );
}

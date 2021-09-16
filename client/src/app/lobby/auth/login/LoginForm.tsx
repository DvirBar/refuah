import React from "react";
import Button from "components/forms/Button/Button";
import Input from "components/forms/Input/Input";
import ButtonLink from "components/navigation/ButtonLink/ButtonLink";
import Form from "components/forms/Layout/Form/Form";
import styles from "./LoginForm.module.scss";

export default function LoginForm(): JSX.Element {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Input
        name="email"
        value="dvir.bartov1@gmail.com"
        label="אימייל"
        onChange={() => console.log("change")}
      />
      <div className={styles.passwordBlock}>
        <Input
          type="password"
          name="password"
          value="123456"
          label="סיסמה"
          onChange={() => console.log("change")}
        />
        <ButtonLink className={styles.forgotPassword}>שכחתי את הסיסמה</ButtonLink>
      </div>

      <Button
        className={styles.button}
        type="submit"
        onClick={() => console.log("hi")}
      >
        התחברות
      </Button>
    </Form>
  );
}

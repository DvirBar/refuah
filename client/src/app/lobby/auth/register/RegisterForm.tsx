import React from "react";
import Button from "components/forms/Button/Button";
import Input from "components/forms/Input/Input";
import Form from "components/forms/Layout/Form/Form";
import styles from "./RegisterForm.module.scss";

export default function RegisterForm(): JSX.Element {
  return (
    <Form>
      <div className={styles.nameBlock}>
        <Input
          name="firstName"
          value="דביר"
          label="שם"
          onChange={() => console.log("change")}
        />
        <Input
          name="lastName"
          value="ברטוב"
          label="שם משפחה"
          onChange={() => console.log("change")}
        />
      </div>
      <Input
        name="username"
        value="dvirbar"
        label="שם משתמש"
        onChange={() => console.log("change")}
      />
      <Input
        name="email"
        value="dvir.bartov1@gmail.com"
        label="אימייל"
        onChange={() => console.log("change")}
      />
      <Input
        type="password"
        name="password"
        value="123456"
        label="סיסמה"
        onChange={() => console.log("change")}
      />
      <Button
        className={styles.button}
        type="submit"
        onClick={() => console.log("hi")}
      >
        הרשמה
      </Button>
    </Form>
  );
}

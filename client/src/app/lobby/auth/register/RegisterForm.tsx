import React from "react";
import Button from "components/forms/Button/Button";
import Input from "components/forms/Input/Input";
import Form from "components/forms/Layout/Form/Form";
import useForm from "forms/useForm";
import { RegisterData } from "store/auth/types";
import useAuthActions from "store/auth/actions";
import styles from "./RegisterForm.module.scss";

export default function RegisterForm(): JSX.Element {
  const {
    values,
    errors,
    formTriggers,
    handleSubmit,
  } = useForm<RegisterData>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  }, { dynamicValidation: true });

  const {
    register,
  } = useAuthActions();

  const onSubmit = () => {
    register(values);
  };

  return (
    <Form onSubmit={e => handleSubmit(e, onSubmit)}>
      <div className={styles.nameBlock}>
        <Input
          name="firstName"
          value={values.firstName}
          error={errors.firstName}
          label="שם"
          {...formTriggers}
        />
        <Input
          name="lastName"
          value={values.lastName}
          error={errors.lastName}
          label="שם משפחה"
          {...formTriggers}
        />
      </div>
      <Input
        name="username"
        value={values.username}
        error={errors.username}
        label="שם משתמש"
        {...formTriggers}
      />
      <Input
        name="email"
        value={values.email}
        error={errors.email}
        label="אימייל"
        {...formTriggers}
      />
      <Input
        type="password"
        name="password"
        value={values.password}
        error={errors.password}
        label="סיסמה"
        {...formTriggers}
      />
      <Button
        className={styles.button}
        type="submit"
      >
        הרשמה
      </Button>
    </Form>
  );
}

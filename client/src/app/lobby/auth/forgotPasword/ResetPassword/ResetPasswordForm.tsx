import Button from "components/forms/Button/Button";
import Input from "components/forms/Input/Input";
import Form from "components/forms/Layout/Form/Form";
import useForm from "forms/useForm";
import React from "react";
import useAuthActions from "store/auth/actions";
import { useParams } from "react-router-dom";

export default function ResetPasswordForm(): JSX.Element {
  const {
    values,
    errors,
    handleSubmit,
    formTriggers,
  } = useForm<{ password: string }>({ password: "" });

  const {
    token,
  } = useParams<{ token: string }>();

  const { resetPassword } = useAuthActions();
  const onSubmit = () => {
    resetPassword(values.password, token);
  };
  return (
    <Form onSubmit={e => handleSubmit(e, onSubmit)}>
      <Input
        value={values.password}
        error={errors.password}
        {...formTriggers}
        name="password"
        type="password"
        label="סיסמה חדשה"
      />
      <Button type="submit">
        איפוס סיסמה
      </Button>
    </Form>
  );
}

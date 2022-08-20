import React, { useState } from "react";
import Button from "components/forms/Button/Button";
import Input from "components/forms/Input/Input";
import ButtonLink from "components/navigation/ButtonLink/ButtonLink";
import Form from "components/forms/Layout/Form/Form";
import useForm from "forms/useForm";
import useAuthActions from "store/auth/actions";
import styled from "styled-components";
import ForgotPassword from "../forgotPasword/ForgotPassword";

export type LoginFields = {
  email: string;
  password: string;
}

export default function LoginForm(): JSX.Element {
  const {
    formTriggers,
    handleSubmit,
    values,
    errors,
  } = useForm<LoginFields>({
    email: "",
    password: "",
  }, {
    dynamicValidation: false,
  });

  const {
    login,
  } = useAuthActions();

  const onSubmit = () => {
    login(values);
  };

  const [displatForgot, setDisplayForgot] = useState(false);

  return (
    <Form onSubmit={e => handleSubmit(e, onSubmit)}>
      <Input
        name="email"
        value={values.email}
        error={errors.email}
        label="אימייל"
        {...formTriggers}
      />
      <div>
        <Input
          type="password"
          name="password"
          value={values.password}
          error={errors.password}
          label="סיסמה"
          {...formTriggers}
        />
        <ForgotPasswordLinkStyled
          onClick={() => setDisplayForgot(true)}
        >
          שכחתי את הסיסמה
        </ForgotPasswordLinkStyled>
        <ForgotPassword
          display={displatForgot}
          setDisplay={setDisplayForgot}
        />
      </div>
      <SubmitButtonStyled
        type="submit"
      >
        התחברות
      </SubmitButtonStyled>
    </Form>
  );
}

const ForgotPasswordLinkStyled = styled(ButtonLink)`
  align-self: flex-start;
  margin-top: 1rem;
`;

const SubmitButtonStyled = styled(Button)`
  margin-top: 1rem;
  align-self: center;
`;

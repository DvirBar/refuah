import Button from "components/forms/Button/Button";
import Input from "components/forms/Input/Input";
import Typography from "components/typography/Typography";
import useForm from "forms/useForm";
import React from "react";
import useAuthActions from "store/auth/actions";
import styled from "styled-components";

export default function ForgotPasswordForm(): JSX.Element {
  const {
    values,
    errors,
    formTriggers,
    handleSubmit,
  } = useForm<{email: string}>({
    email: "",
  }, { dynamicValidation: true });

  const { forgotPassword } = useAuthActions();
  console.log(errors);

  const onSubmit = () => {
    forgotPassword(values.email);
  };

  return (
    <Wrapper onSubmit={e => handleSubmit(e, onSubmit)}>
      <TextStyle>
        <Typography variant="h2">
          לא נורא, גם זה קורה...
        </Typography>
        <Typography variant="content">
          רק הזינו את כתובת הדוא״ל שלכם, על מנת שנוכל לשלוח לכם קישור לאיפוס הסיסמה.
        </Typography>
      </TextStyle>

      <Input
        value={values.email}
        error={errors.email}
        {...formTriggers}
        name="email"
        label="אימייל"
      />

      <Button type="submit">
        איפוס
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  height: 35rem;
  width: 45rem;
  justify-self: center;
`;

const TextStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

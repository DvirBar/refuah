import Button from "components/forms/Button/Button";
import Input from "components/forms/Input/Input";
import Typography from "components/typography/Typography";
import useForm from "forms/useForm";
import React from "react";
import useAuthActions from "store/auth/actions";
import styles from "./ForgotPasswordForm.module.scss";

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
    <form onSubmit={e => handleSubmit(e, onSubmit)} className={styles.container}>
      <div className={styles.text}>
        <Typography variant="h2">
          לא נורא, גם זה קורה...
        </Typography>
        <Typography variant="content">
          רק הזינו את כתובת הדוא״ל שלכם, על מנת שנוכל לשלוח לכם קישור לאיפוס הסיסמה.
        </Typography>
      </div>

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
    </form>
  );
}

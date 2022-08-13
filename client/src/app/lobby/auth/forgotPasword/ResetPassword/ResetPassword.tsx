import LogoMain from "app/lobby/LogoMain/LogoMain";
import Typography from "components/typography/Typography";
import { Status } from "forms/useForm";
import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { resetPasswordAtom } from "store/auth/atoms";
import styles from "./ResetPassword.module.scss";
import ResetPasswordForm from "./ResetPasswordForm";
// import ResetPasswordStatuses from "./ResetPasswordStatuses";

export default function ResetPassword(): JSX.Element {
  const status = useRecoilValueLoadable(resetPasswordAtom);
  return (
    <div>
      <LogoMain backgroundColor="#ffffff" />
      <div className={styles.resetPassword}>
        <Typography variant="h1">איפוס סיסמה</Typography>
        {!status.state || status.state === Status.Loading
          ? <></>
          : <ResetPasswordForm />}
      </div>
    </div>
  );
}

import Modal from "components/containers/Modal/Modal";
import React from "react";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";
import styles from "./ForgotPassword.module.scss";

export interface IProps {
    display: boolean,
    setDisplay: (display: boolean) => void
}

export default function ForgotPassword({
  display,
  setDisplay,
}: IProps): JSX.Element {
  return (
    <Modal
      title="איפוס סיסמה"
      display={display}
      setDisplay={setDisplay}
    >
      <div className={styles.container}>
        <ForgotPasswordForm />
      </div>
    </Modal>
  );
}

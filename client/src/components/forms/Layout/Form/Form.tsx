import React, { FormHTMLAttributes } from "react";
import styles from "./Form.module.scss";

export default function Form({
  children,
  onSubmit,
}: FormHTMLAttributes<HTMLFormElement>): JSX.Element {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {children}
    </form>
  );
}

import React, { FormHTMLAttributes } from "react";
import styles from "./Form.module.scss";

export default function Form({
  children,
}: FormHTMLAttributes<HTMLFormElement>): JSX.Element {
  return (
    <form className={styles.form}>
      {children}
    </form>
  );
}

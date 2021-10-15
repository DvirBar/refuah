import React from "react";
// import { Transition, TransitionStatus } from "react-transition-group";
import styles from "./InputError.module.scss";

export interface InputErrorProps {
    error?: string;
}
export default function InputError({ error }: InputErrorProps): JSX.Element {
  // const style = {
  //   transition: `transform ${200}ms ease-in-out, opacity ${200}ms ease-in-out`,
  //   opacity: 0,
  // };

  // const transitionStyles: { [key in TransitionStatus]?:
  // { opacity: number, transform: string } } = {
  //   entering: { opacity: 1, transform: "translateX(0)" },
  //   entered: { opacity: 1, transform: "translateX(0)" },
  //   exiting: { opacity: 0, transform: "translateX(30px)" },
  //   exited: { opacity: 0, transform: "translateX(30px)" },
  // };

  return (
  // <Transition unmountOnExit mountOnEnter in={!!error} timeout={200}>
  // {state => (
    <span
      className={styles.error}
    >
      {error || ""}
    </span>
  //   )}
  // </Transition>
  );
}

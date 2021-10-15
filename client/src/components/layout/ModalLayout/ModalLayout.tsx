import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./ModalLayout.module.scss";

export interface ModalLayoutProps {
  display: boolean;
  setDisplay: (display: boolean) => void;
}

export default function ModalLayout({
  display,
}: ModalLayoutProps): JSX.Element {
  const duration = 200;
  // const style: CSSProperties = {
  //   transition: `opacity ${duration}ms ease-in-out`,
  //   opacity: 1,
  // };

  // const transitionStyles: {
  //   [key in TransitionStatus]?: { opacity: number }
  // } = {
  //   entering: { opacity: 1 },
  //   entered: { opacity: 1 },
  //   exiting: { opacity: 0 },
  //   exited: { opacity: 0 },
  // };

  return (
    <CSSTransition
      appear
      unmountOnExit
      classNames={{ ...styles }}
      in={display}
      timeout={duration}
    >
      <div
        className={styles.container}
      />
    </CSSTransition>
  );
}

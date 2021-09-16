/* eslint-disable no-undef */
import React, { ButtonHTMLAttributes } from "react";
import composeClassNames from "styles/composeClassNames";
import styles from "./ButtonLink.module.scss";

export default function ButtonLink(props: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  const {
    children,
    className,
  } = props;

  return (
    <button
      {...props}
      className={composeClassNames(styles.link, styles.buttonLink, className || "")}
    >
      {children}

    </button>
  );
}

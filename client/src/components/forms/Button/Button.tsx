/* eslint-disable no-undef */
import React, { ButtonHTMLAttributes } from "react";
import { Variants } from "components/types";
import composeClassNames from "styles/composeClassNames";
import style from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variants;
    children: React.ReactNode;
    onClick: (event: React.MouseEvent) => void
}

export default function Button(props: ButtonProps): JSX.Element {
  const {
    variant = "main",
    children,
    onClick,
    className,
  } = props;

  return (
    <button
      tabIndex={-1}
      {...props}
      onClick={onClick}
      className={composeClassNames(style.button, style[variant], className || "")}
    >
      {children}
    </button>
  );
}

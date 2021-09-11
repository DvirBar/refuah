import React from "react";
import { Variants } from "components/types";
import style from "./Button.module.scss";

export interface ButtonProps {
    variant?: Variants;
    label: string;
    onClick: () => void
}

export default function Button({ variant = "main", label, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`${style.button} ${style[variant]}`}
    >
      {label}
    </button>
  );
}

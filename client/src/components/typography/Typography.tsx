import React from "react";
import composeClassNames from "styles/composeClassNames";
import { TypographyVariant } from "./types";
import styles from "./Typography.module.scss";

interface TypographyProps {
    variant: TypographyVariant,
    children: React.ReactNode,
    className?: string
}

export default function Typography({
  variant,
  children,
  className,
}: TypographyProps): JSX.Element | null {
  switch (variant) {
    case "h1":
      return <h1 className={composeClassNames(className || "", styles.h1)}>{children}</h1>;
    default:
      return null;
  }
}

import React, { CSSProperties, forwardRef } from "react";
import composeClassNames from "styles/composeClassNames";
import styles from "./Card.module.scss";

export interface CardProps {
  children: React.ReactNode
  className?: string
  style?: CSSProperties
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    children,
    className,
  } = props;

  return (
    <div
      ref={ref}
      className={composeClassNames(className ?? "", styles.card)}
    >
      {children}
    </div>
  );
});

export default Card;

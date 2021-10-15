import React from "react";
import styles from "./CardBody.module.scss";

export interface CardBodyProps {
    children: React.ReactNode
}

export default function CardBody({ children }: CardBodyProps): JSX.Element {
  return (
    <div className={styles.cardBody}>
      {children}
    </div>
  );
}

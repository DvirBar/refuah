import React from "react";
import { X } from "react-feather";
import styles from "./CardHeader.module.scss";

export interface CardHeaderProps {
    title?: string;
    subTitle?: string;
    closeAction?: () => void
}

export default function CardHeader({
  title,
  subTitle,
  closeAction,
}: CardHeaderProps): JSX.Element {
  return (
    <div className={styles.cardHeader}>
      {closeAction
        && (
        <div className={styles.closeWrapper}>
          <button
            className={styles.close}
            onClick={() => closeAction()}
          >
            <X size={24} className={styles.closeIcon} />
          </button>
        </div>
        )}
      {title
        && <div className={styles.title}>{title}</div>}
      {subTitle
        && <div className={styles.subtitle}>{subTitle}</div>}
    </div>
  );
}

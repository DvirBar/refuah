import Typography from "components/typography/Typography";
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
      {(title || subTitle)
        && (
          <div className={styles.titles}>
            {title
          && <Typography variant="h1">{title}</Typography>}
            {subTitle
          && <Typography variant="subtitle">{subTitle}</Typography>}
          </div>
        )}

    </div>
  );
}

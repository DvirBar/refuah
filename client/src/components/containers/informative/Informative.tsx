import Portal from "components/utils/Portal";
import React from "react";
import composeClassNames from "styles/composeClassNames";
import { X } from "react-feather";
import styles from "./Informative.module.scss";

export interface InformativeProps {
    message: string;
    isError: boolean;
}

export default function Informative({ message, isError }: InformativeProps): JSX.Element | null {
  if (!message) return null;

  return (
    <Portal>
      <div className={
        composeClassNames(
          styles.informative,
          isError
            ? styles.error
            : styles.success,
        )
}
      >
        <X className={styles.close} size={20} />
        <div>
          {message}
        </div>
      </div>
    </Portal>
  );
}

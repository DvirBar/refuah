/* eslint-disable no-undef */
import React, { InputHTMLAttributes, useState } from "react";
import composeClassNames from "styles/composeClassNames";
import styles from "./Input.module.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (e: React.ChangeEvent<{value: string | number}>) => void,
    onClick?: (e: React.MouseEvent) => void,
    value: number | string | undefined,
    name: string,
    label: string,
    error?: string,
    startChip?: React.ReactNode,
    endChip?: React.ReactNode,
    isFocused?: boolean
    readOnly?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref): JSX.Element => {
  const {
    name,
    value,
    onChange,
    onClick,
    label,
    error,
    startChip,
    endChip,
    readOnly,
    isFocused,
  } = props;

  const [isInternalFocused, setIsInternalFocused] = useState(false);

  const isElementFocused = typeof isFocused === "boolean" ? isFocused : isInternalFocused;

  return (
    <div
      onClick={onClick}
      role="none"
      onFocus={() => setIsInternalFocused(true)}
      onBlur={() => setIsInternalFocused(false)}
      className={composeClassNames(
        styles.inputWrapper,
        isElementFocused ? styles.focus : "",
        error ? styles.error : "",
        readOnly ? styles.readonly : "",
      )}
    >
      <span className={styles.label}>
        {label}
      </span>
      <div className={composeClassNames(
        styles.inputContainer,
        isElementFocused ? styles.inputContainerFocus : "",
      )}
      >
        {startChip
          && (
          <div className={styles.inputChip}>
            {startChip}
          </div>
          )}
        <input
          {...props}
          className={styles.input}
          ref={ref}
          name={name}
          value={value}
          onChange={e => onChange(e)}
        />
        {endChip
          && (
          <div className={styles.inputChip}>
            {endChip}
          </div>
          )}
      </div>

      <span className={styles.errorText}>{error}</span>
    </div>
  );
});

export default Input;
